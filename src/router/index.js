import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Blog from '@/components/Blog.vue'
import Upload from '@/admin/Upload.vue'
import Sheet from '@/admin/Sheet.vue'
import Manger from '@/admin/Manger.vue'
import Info from '@/admin/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/admin',
      name: 'Upload',
      component: Upload,
    },
    { //后台首页
      path: '/sheet',
      name: 'Sheet',
      component: Sheet,
      //管理员
      children: [{
          path: '/manger',
          name: 'Manger',
          component: Manger,
        },
        {
          path: '/info',
          name: 'Info',
          component: Info,
        },
      ]
    },




  ]
})
