import Vue from 'vue';
import App from './App.vue';
//引入样式
import './styles/base.css';
import './styles/iconfont.less';
//引入路由
import router from './router';
// 导入lib-flexible模块，会自动适配所有的屏幕
// 他会给每一个屏幕设置一个html的大小  会把屏幕的大小/10 = 1rem
import 'lib-flexible';
//全局头部组件
import HmHeader from './components/HmHeader.vue';
Vue.component('hm-header', HmHeader);
//全局按钮组件
import Hmbutton from './components/Hmbutton.vue';
Vue.component('hm-button', Hmbutton);
//全局表单组件
import HmInput from './components/HmInput.vue';
Vue.component('hm-input', HmInput);
//把axios放到vue的原型链上
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.$axios = axios;
//vant
import { Toast } from 'vant';
Vue.use(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
