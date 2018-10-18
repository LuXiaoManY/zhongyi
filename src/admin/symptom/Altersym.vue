<template>
    <div class="Altersym">
        <div class="Alter_title">
           <el-input  placeholder="请输入内容"></el-input>
           <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <!-- 症状应用 -->
        <div class="Altersym_content" >
            <div class="sym" v-for="(item, index) in symlist" :key="index" :data="symlist">
            <el-popover placement="top-start" :title=symlist[index].name width="200" trigger="hover" :content=symlist[index].remark>
             <el-button slot="reference" @click="handleEdit(index, symlist[index])">{{symlist[index].name}}</el-button >
            </el-popover>
            </div>
        </div>
        <el-dialog class="Sres" title="修改症状信息" :visible.sync="dialogalterVisible" width="30%" >
            <el-input v-model="altersym.name"  placeholder="请输入管理员姓名"></el-input>
            <el-input v-model="altersym.remark" placeholder="请输入备注"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delSym" type="danger">删除 </el-button>
                <el-button  @click="updateSym" type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dialogalterVisible: false, //症状弹框
      symlist: {
        //获取症状数组
        name: "",
        remark: ""
      },
      altersym: {
        //修改症状数组
        id: "",
        name: "",
        remark: ""
      }
    };
  },
  created() {
    this.getSymlist();
  },
  methods: {
    getSymlist() {
      //获取症状
      this.axios
        .get("/api/symptom/getSymptom")
        .then(res => {
          //   console.log(res);
          if (res.status == 200) {
            this.symlist = res.data;
          } else {
            this.$message.error("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      //   console.log(index, row);
      this.altersym.id = row.Id;
      this.altersym.name = row.name;
      this.altersym.remark = row.remark;
      this.dialogalterVisible = true;
    },
    delSym() {
      //删除症状
      this.axios
        .post("/api/symptom/delSym", {
          id: this.altersym.id
        })
        .then(res => {
          if (res.status == 200) {
            this.dialogalterVisible = false;
            this.$confirm("此操作将永久删除该症状, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                this.$message.success("删除成功!");
              })
              .catch(() => {
                this.$message.info("已取消删除");
              });
          } else {
            this.$message.error("删除失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateSym() {
      //修改症状
      if (this.altersym.name == "") {
        this.$message.error("症状名不能为空");
      } else {
        this.axios
          .post("/api/symptom/updateSym", {
            id: this.altersym.id,
            name: this.altersym.name,
            remark: this.altersym.remark
          })
          .then(res => {
            // console.log(res);
            if (res.status == 200) {
              this.dialogalterVisible = false;
              this.$message.success("修改成功");
            } else {
              this.$message.error("修改失败");
            }
          })
          .catch(err => {
            this.$message.error("修改失败");
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.Alter_title {
  width: 100%;
  .el-input {
    margin-top: 10px;
    width: 35%;
  }
}
.Altersym_content {
  width: 95%;
  padding-top: 30px;
  .el-button {
    width: 150px;
  }
  .sym {
    float: left;
    margin: 10px 10px;
  }
}
.Sres {
  .el-input {
    margin: 10px 0px;
  }
}
</style>
