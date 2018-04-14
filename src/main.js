// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Resource)
//自定义指令
Vue.directive('titlecolor',{
  bind(el,binding,vnode){
    el.style.color = '#'+Math.random().toString(16).slice(2,8)
  }
})

Vue.directive('them',{
  bind(el,binging,vnode){
    /*if(binging.value == 'width'){
      el.style.width = 800 +'px'
    }*/
    if (binging.arg == 'cols'){
      el.style.background ='#eee'
      el.style.padding = 10+'px'
    }
  }
})
//自定义过滤器
Vue.filter('atslice',function (value) {
    return value.slice(0,100)+'......'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
