import App from './App.vue'
import Vue from 'vue'
//axios
import axios from 'axios'
Vue.prototype.$axios=axios
//各组件
import goodslist from './components/goods/goodslist.vue'
import layout from './components/layout.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入全局样式
import './static/site/css/style.css'
  //定义路由规则
const routes = [
    { path: '/', redirect: '/site/goodslist' },
    { path: '/site', component: layout, 
    children:[
        {
        path: 'goodslist', component: goodslist
        }
    ]
},
  ]
   //创建路由对象
   const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })
new Vue ({
    el:'#app',
    router,
    render:function(createElement){
        return createElement(App)
    }
    
})