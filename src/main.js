import DefaultLayout from '~/layouts/Default.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
moment.locale('ja')

export default function (Vue) {
  Vue.use(ElementUI)
  Vue.component('Layout', DefaultLayout)
}
