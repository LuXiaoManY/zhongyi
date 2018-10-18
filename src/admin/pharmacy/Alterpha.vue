<template>
    <div class="Alterpha">
        <div class="Alter_title">
           <el-input  placeholder="请输入内容"></el-input>
           <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <!-- 药材应用 -->
        <div class="Alterpha_content" >
            <div class="sym" v-for="(item, index) in phalist" :key="index" :data="phalist">
            <el-popover placement="top-start" :title=phalist[index].name width="200" trigger="hover" :content=phalist[index].remark>
             <el-button slot="reference" @click="handleEdit(index, phalist[index])">{{phalist[index].name}}</el-button >
            </el-popover>
            </div>
        </div>
        <el-dialog class="Sres" title="修改药材信息" :visible.sync="dialogalterVisible" width="30%" >
            <el-input v-model="Alterpha.name"  placeholder="请输入药材名"></el-input>
            <el-input v-model="Alterpha.remark" placeholder="请输入备注"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delPha" type="danger">删除 </el-button>
                <el-button  @click="updatePha" type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dialogalterVisible: false, //药材弹框
      phalist: {
        //获取药材数组
        name: "",
        remark: ""
      },
      Alterpha: {
        //修改药材数组
        id: "",
        name: "",
        remark: ""
      }
    };
  },
  created() {
    this.getphalist();
  },
  methods: {
    getphalist() {
      //获取药材
      this.axios
        .get("/api/pharmacy/getPharmacy")
        .then(res => {
          //   console.log(res);
          if (res.status == 200) {
            this.phalist = res.data;
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
      this.Alterpha.id = row.Id;
      this.Alterpha.name = row.name;
      this.Alterpha.remark = row.remark;
      this.dialogalterVisible = true;
    },
    delPha() {
      //删除药材
      this.axios
        .post("/api/pharmacy/delPha", {
          id: this.Alterpha.id
        })
        .then(res => {
          if (res.status == 200) {
            this.dialogalterVisible = false;
            this.$confirm("此操作将永久删除该药材, 是否继续?", "提示", {
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
    updatePha() {
      //修改药材
      if (this.Alterpha.name == "") {
        this.$message.error("药材名不能为空");
      } else {
        this.axios
          .post("/api/pharmacy/updatePha", {
            id: this.Alterpha.id,
            name: this.Alterpha.name,
            remark: this.Alterpha.remark
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
.Alterpha_content {
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
