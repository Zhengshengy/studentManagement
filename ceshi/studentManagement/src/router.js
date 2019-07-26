import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Person from '@/components/person.vue'
import Timetable from '@/components/Timetable.vue'
import Uniquetable from '@/components/Uniquetable.vue'
import Login from '@/components/login.vue'
import Test from '@/components/test.vue'
import Page from '@/components/page.vue'
import Page1 from '@/components/page1.vue'
import Page2 from '@/components/page2.vue'
import Chengji from '@/components/chengji.vue'
import fenye from "@/components/fenye.vue"


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      beforeEnter:(to,from,next)=> {
          if(! sessionStorage["user"]){
              next("/login")
          }else {
              next()
          }
      },
      children:[
        {
          path: '/Timetable',
          component: Timetable,

        },
          {
          path: '/Uniquetable',
          component: Uniquetable,
        },
          {
          path: '/person',
          component: Person,
        },
        {
          path: '/test',
          component: Test,
        },
         {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
     {
      path: '/chengji',
      name: 'chengji',
      component: Chengji
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },

      ]
    },
    {
          path: '/login',
          component: Login,
    },

  ]
})
