//连接数据库 执行相关用法
var conn = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');


// 增加症状接口
router.post('/addSymptom', (req, res) => {
  var sql = $sql.symptom.add;
  var params = req.body;
  console.log(params);
  console.log(sql);
  conn.query(sql, [params.name, params.remark], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  })
});
//获取症状
router.get('/getSymptom', (req, res) => {
  var sql = $sql.symptom.get;
  console.log(sql);
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      //   console.log(result);
      res.json(result);
    }
  })
});
//修改症状接口
router.post('/updateSym', (req, res) => {
  var sql = $sql.symptom.update;
  var params = req.body;
  console.log(params);
  console.log(sql);
  conn.query(sql, [params.name, params.remark, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      // console.log(result);
      res.json(result);
    }
  })
})
//删除症状
router.post('/delsym', (req, res) => {
  var sql = $sql.symptom.del;
  var params = req.body;
  console.log(params);
  console.log(sql);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      // console.log(result);
      res.json(result);
    }
  })
})


module.exports = router;
