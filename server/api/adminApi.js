//连接数据库 执行相关用法
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 增加管理接口
router.post('/addAdmin', (req, res) => {
  var sql = $sql.admin.add;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [params.date, params.name, params.passwd, params.role], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
// 查询管理接口
router.get('/getAdmin', (req, res) => {
  var sql = $sql.admin.get;
  console.log(sql);
  conn.query(sql, [], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      jsonWrite(res, result);
    }
  })
});
//删除管理接口
router.post('/delAdmin', (req, res) => {
  var params = req.body;
  var sql = $sql.admin.del;
  // console.log(sql);
  // console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
})
// 修改管理信息接口
router.post('/updateAdmin', (req, res) => {
  var params = req.body;
  var sql = $sql.admin.update;
  // console.log(params);
  // console.log(sql);
  conn.query(sql, [params.name, params.passwd, params.role, params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })

})

module.exports = router;
