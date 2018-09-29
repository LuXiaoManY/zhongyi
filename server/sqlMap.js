//SQL语句
var sqlMap = {

  getValue: "SELECT * FROM test WHERE name = ?",
  setValue: 'UPDATE test SET name = ? WHERE id = ?',
  // 管理员
  admin: {
    get: 'SELECT * FROM admin',
    add: 'INSERT INTO admin (date,name,passwd,role) values(?,?,?,?)', //增加管理员
    del: 'DELETE FROM admin WHERE id=?', //删除管理员
    update: 'UPDATE admin SET name=?,passwd=?,role=? WHERE id=?', //修改管理员信息
  },
  // 增加用户
  addUser: {

  },
  // 增加症状
  symptom: {

  },
  // 增加药材
  drugs: {

  },
  // 增加医案
  consilia: {

  },

}

module.exports = sqlMap;
