
   this.axios
        .post("api/admin/getAdminer", {
          name: this.loginFrom.name,
          passwd: this.crypto(this.loginFrom.passwd)
        })
        .then(res => {
          console.log(res);
          if (res.data.resultCode === 200) {
            this.$message.success(res.data.message);
            let data = res.data;
            //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
            // console.log(data);
            this.$store.commit("set_token", data["token"]);
            this.$store.commit("set_admin", res.data.info[0].name);
            this.$store.commit("set_role", res.data.info[0].role);
            // console.log("config:" + res.data.info[0].name);
            // console.log(this.$store.commit("set_token", data["token"]));
            if (this.$store.state.token) {
              this.$router.push("/sheet");
              // console.log(this.$store.state.token);
            }
          } else {
            this.$message.error(res.data.message);
            this.$router.replace("/admin");
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("账号或密码错误");
        });



