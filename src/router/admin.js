import Admin from '@/admin/Admin.vue'
import Sheet from '@/admin/Sheet.vue'
import Manger from '@/admin/Manger.vue'
import Symptom from '@/admin/symptom/Symptom.vue'
import Altersym from '@/admin/symptom/Altersym.vue'
import Pharmacy from '@/admin/pharmacy/Pharmacy.vue'
import Alterpha from '@/admin/pharmacy/Alterpha.vue'
import Consilia from '@/admin/consilia/Consilia.vue'
import Altercon from '@/admin/consilia/Altercon.vue'
import {
  resolve
} from 'path';

const admin = [{
  //管理员登录
  path: '/admin',
  name: 'Admin',
  component: Admin,
}, ];
export default admin;
export const powerRouter = [{
  //后台首页
  path: '/',
  redirect: '/sheet',
  name: 'sheet',
  component: Sheet,
  hidden: false,

  children: [{
      path: '/sheet',
      name: '首页',
      // component: Sheet,
    },

    {
      path: '/sheet/manger',
      name: '管理员',
      component: Manger,
      meta: {
        role: 'Super'
      }
    },
    {
      path: '/sheet/symptom',
      name: '症状',
      icon: '',
      component: Symptom,
      children: [{ //症状信息
          path: '/sheet/symptom',
          name: '症状',
          component: Symptom,
          meta: {
            role: 'General'
          }
        },
        { //修改症状
          path: '/sheet/altersym',
          name: '修改症状',
          component: Altersym,
          meta: {
            role: 'General'
          }
        },
      ]
    },

    // { //药材信息
    //   path: '/sheet/pharmacy',
    //   name: '药材信息',
    //   component: Pharmacy,
    //   meta: {
    //     role: 'General'
    //   }
    // },
    // { //修改药材
    //   path: '/sheet/alterpha',
    //   name: '修改药材',
    //   component: Alterpha,
    //   meta: {
    //     role: 'General'
    //   }
    // },
    // { //医案信息
    //   path: '/sheet/consilia',
    //   name: '医案信息',
    //   component: Consilia,
    //   meta: {
    //     role: 'General'
    //   }
    // },
    // { //修改医案
    //   path: '/sheet/altercon',
    //   name: '修改医案',
    //   component: Altercon,
    //   meta: {
    //     role: 'General'
    //   }
    // },

  ]
}, ]
