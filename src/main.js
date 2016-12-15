// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import demoBlock from './components/demo-block.vue'

import {
  Alert
} from 'element-ui'

Vue.component(Alert.name, Alert)

import 'highlight.js/styles/color-brewer.css'
import 'element-ui/lib/theme-default/alert.css'
import 'element-ui/lib/theme-default/icon.css'

Vue.component('demo-block', demoBlock)

/* eslint-disable no-new */
new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app')
