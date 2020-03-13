import Vue from 'vue'
import App from './App.vue'
//引入样式
import './styles/base.css'
import './styles/iconfont.less'
//引入路由
import router from './router'
// 导入lib-flexible模块，会自动适配所有的屏幕
// 他会给每一个屏幕设置一个html的大小  会把屏幕的大小/10 = 1rem
import 'lib-flexible'
//全局头部组件
import HmHeader from './components/HmHeader.vue'
Vue.component('hm-header',HmHeader)
//全局按钮组件
import Hmbutton from './components/Hmbutton.vue'
Vue.component('hm-button',Hmbutton)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
