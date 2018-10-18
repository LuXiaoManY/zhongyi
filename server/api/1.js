import Admin from '@/admin/Admin.vue'
import Sheet from '@/admin/Sheet.vue'
import Manger from '@/admin/Manger.vue'
import Symptom from '@/admin/symptom/Symptom.vue'
import Altersym from '@/admin/symptom/Altersym.vue'
import Pharmacy from '@/admin/pharmacy/Pharmacy.vue'
import Alterpha from '@/admin/pharmacy/Alterpha.vue'
import Consilia from '@/admin/consilia/Consilia.vue'
import Altercon from '@/admin/consilia/Altercon.vue'
import Personal from '@/admin/Personal.vue'

const admin = [{
    //管理员登录
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    //后台首页
    path: '/sheet',
    name: 'Sheet',
    meta: {
      requireAuth: true
    },
    component: Sheet,


    children: [{ //管理员
        path: '/sheet/manger',
        name: 'Manger',
        component: Manger,
      },
      { //症状信息
        path: '/sheet/symptom',
        name: 'Symptom',
        component: Symptom,
      },
      { //修改症状
        path: '/sheet/altersym',
        name: 'Altersym',
        component: Altersym,
      },
      { //药材信息
        path: '/sheet/pharmacy',
        name: 'Pharmacy',
        component: Pharmacy,
      },
      { //修改药材
        path: '/sheet/alterpha',
        name: 'Alterpha',
        component: Alterpha,
      },
      { //医案信息
        path: '/sheet/consilia',
        name: 'Consilia',
        component: Consilia,
      },
      { //修改医案
        path: '/sheet/altercon',
        name: 'Altercon',
        component: Altercon,
      },
      { //管理员个人中心
        path: '/sheet/personal',
        name: 'Personal',
        component: Personal,
      },

    ]
  },
];
//定义完路由之后，利用vue-router 提供的钩子函数进行判断


export default admin;
