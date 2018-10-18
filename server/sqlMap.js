//SQL语句
var sqlMap = {
  // 管理员
  admin: {
    gets: 'SELECT * FROM admin WHERE name=? and passwd=?', //管理员登录状态
    get: 'SELECT * FROM admin', //获取全部管理员
    add: 'INSERT INTO admin (date,name,passwd,role) VALUES(?,?,?,?)', //增加管理员
    del: 'DELETE FROM admin WHERE id=?', //删除管理员
    update: 'UPDATE admin SET name=?,passwd=?,role=? WHERE id=?', //修改管理员信息
  },
  // 症状栏
  symptom: {
    add: 'INSERT INTO symptom (name, remark) VALUES(?,?)', //增加症状
    get: 'SELECT * FROM symptom', //获取症状
    del: 'DELETE FROM symptom WHERE id=?', //删除症状
    update: 'UPDATE symptom SET name=?,remark=? WHERE id=?', //修改症状
    sel: 'SELECT name FROM symptom'

  },
  // 增加药材
  pharmacy: {
    add: 'INSERT INTO pharmacy (name, remark) VALUES(?,?)', //增加药材
    get: 'SELECT * FROM pharmacy', //获取药材
    del: 'DELETE FROM pharmacy WHERE id=?', //删除药材
    update: 'UPDATE pharmacy SET name=?,remark=? WHERE id=?' //修改药材
  },
  // 增加医案
  consilia: {
    add: 'INSERT INTO consilia (name, date, sym, diag, pres, remark) VALUES(?,?,?,?,?,?)', //增加医案
    get: 'SELECT * FROM consilia', //获取医案
    update: 'UPDATE consilia SET name=?,date=?,sym=?,diag=?,pres=?,remark=? WHERE id=?', //修改医案信息
    del: 'DELETE FROM consilia WHERE id=?', //删除医案
  },

}

module.exports = sqlMap;
