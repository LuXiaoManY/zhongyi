//连接数据库 执行相关用法
var conn = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 增加药材接口
router.post('/addPharmacy', (req, res) => {
  var sql = $sql.pharmacy.add;
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
//获取药材
router.get('/getPharmacy', (req, res) => {
  var sql = $sql.pharmacy.get;
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
//修改药材接口
router.post('/updatePha', (req, res) => {
  var sql = $sql.pharmacy.update;
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
//删除药材
router.post('/delPha', (req, res) => {
  var sql = $sql.pharmacy.del;
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
