import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import play from '@/components/play'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
    	path: '/search',
    	name:'search',
    	component: search
    },{
    	path: '/play/:id',
    	name:'play',
    	component: play
    }
  ]
})
