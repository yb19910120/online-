import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '../components/AddBlog'
import ShowBlog from '../components/ShowBlog'
import ShowData from '../components/ShowData'
import Edit from '../components/Edit'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
     {
      path: '/',
      component: ShowBlog
    },
    {
      path: '/addblog',
      component: AddBlog
    },
    {
      path: '/showdata/:id',
      component: ShowData
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})
