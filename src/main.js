import Vue from 'vue'
import App from './App'
import MyPlugin from '@/utils/request.js'

// 配置插件
Vue.use(MyPlugin)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
