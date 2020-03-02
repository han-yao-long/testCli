import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import { Checkbox } from 'ant-design-vue';
Vue.use(Checkbox);
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
new Vue({
  render: h => h(App),
}).$mount('#app')
