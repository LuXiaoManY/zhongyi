// import axios from 'axios'
// import crypto from "../../tools/crypto.js";
// const actions = {
//   AdminLogin({
//     commit
//   }, info) {
//     axios
//       .post("api/admin/getAdminer", {
//         name: info.name,
//         passwd: crypto(info.passwd)
//       })
//       .then(res => {
//         if (res.data.resultCode === 200) {
//           let data = res.data;
//           //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值
//           // console.log(data);
//           commit("set_token", data["token"]);
//           commit("set_admin", res.data.info[0].name);
//           commit("set_role", res.data.info[0].role);
//           // console.log("config:" + res.data.info[0].name);
//           // console.log(this.$store.commit("set_token", data["token"]));

//         }
//       })
//       .catch(error => {
//         console.log(error);

//       });
//   }
// };
// export default actions;
