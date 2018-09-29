//后端入口文件 启动后端服务
const adminApi = require('./api/adminApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// 后端api路由
app.use('/api/admin', adminApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
