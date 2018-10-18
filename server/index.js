//后端入口文件 启动后端服务
const adminApi = require('./api/adminApi');
const symptomApi = require('./api/symptomApi');
const pharmacyApi = require('./api/pharmacyApi');
const consiliaApi = require('./api/consiliaApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); //生成token
const connection = require('./db');
const secretkey = 'secretkey';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// 后端api路由
// app.use(router);
app.use('/api/admin', adminApi);
app.use('/api/symptom', symptomApi);
app.use('/api/pharmacy', pharmacyApi);
app.use('/api/consilia', consiliaApi);



app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(function (req, res, next) {
  console.log(req);
  if (req.url != '/admin') {
    //token可能存在post请求和get请求
    let token = req.body.token || req.query.token || req.headers.token;
    jwt.verify(token, secretkey, function (err, decode) {
      if (err) {
        res.json({
          message: 'token过期，请重新登录',
          resultCode: '403'
        })
      } else {
        next();
      }
    })
  } else {
    next();
  }
})




// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
