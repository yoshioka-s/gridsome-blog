import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default function (Vue) {
  Vue.use(ElementUI)
  Vue.component('Layout', DefaultLayout)
}
