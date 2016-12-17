// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './route.config'
import demoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'

import {
  Row,
  Col,
  Button,
  ButtonGroup
} from 'element-ui'

import 'highlight.js/styles/color-brewer.css'
import 'element-ui/lib/theme-default/row.css'
import 'element-ui/lib/theme-default/col.css'
import 'element-ui/lib/theme-default/button.css'
import 'element-ui/lib/theme-default/icon.css'

Vue.use(VueRouter)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

/* eslint-disable no-new */
new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app')
