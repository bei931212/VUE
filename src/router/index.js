import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Classification from '../components/classification/classification.vue'
import Shopcar from '../components/shopcar/shopcar.vue'
// ...........
import My from '../components/my/my.vue'
import myLogin from '../components/my/myLogin.vue'
import login from '../components/my/login.vue'
import logining from '../components/my/logining.vue'
import registered from '../components/my/registered.vue'
import myOrder from '../components/my/myOrder.vue'
import orderDetail from '../components/my/orderDetail.vue'
// .............
import GoodList from "../components/classification/goodList.vue"
import GoodDetail from '../components/classification/good_detail.vue'
import shopcarDetail from '../components/shopcar/shopcarDetail.vue'
import mail from '../components/shopcar/mail.vue'
import shCar from '../components/shopcar/shCar.vue'
import zhifu from '../components/shopcar/zhifu.vue'
import Home_Ms from '../components/home/home_ms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name:'shopcarDetail',
      path: '/shopcarDetail/:goodsid',
      component: shopcarDetail,
      meta:{
          tab_show:false
        }
    },
    {
      name:'zhifu',
      path: '/zhifu',
      component: zhifu,
      meta:{
          tab_show:false
        }
    },

    {
      name:'mail',
      path: '/mail',
      component: mail,
      meta:{
          tab_show:false
        }
    },
       {
      name:'shCar',
      path: '/shCar',
      component: shCar,
      meta:{
          tab_show:false
        }
    },
    {
      	path: '/home',
      	component: Home,
        meta:{
          tab_show:true
        }
    },
    {
        path: '/home_ms',
        component: Home_Ms,
        meta:{
          tab_show:true
        }
    },
    {
    	 path: '/classification',
      	component: Classification,
        meta:{
          tab_show:true
        }
    },
    {
    	 path: '/shopcar',
      	component: Shopcar,
        meta:{
          tab_show:true
        }
    },
    {
    	path: '/my',
      component: My,
      meta:{
          tab_show:true
        }
    },
    {
      path: '/myLogin',
      component: myLogin,
      meta:{
        tab_show:true
      }
    },
    {
      path: '/login',
      component : login,
    },
    {
      path: '/logining',
      component: logining,
    },
    {
      path:'/registered',
      component: registered,
    },
    {
      path: '/myOrder',
      component: myOrder,
    },
    {
      path: '/orderDetail',
      component : orderDetail
    },
    {
      path: '/goodList',
      component: GoodList,
      meta:{
          tab_show:false
        }
    },
    /*{
      path: '/home_active',
      component: Home_Active,
    },*/
    {
      name:'goodDetail',
      path: '/goodDetail',
      component: GoodDetail,
      meta:{
          tab_show:false
        }
    },  
    {
    	path: "/",
    	redirect:"/home"
    }
  ]
})
