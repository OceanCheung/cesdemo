import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCesium from 'vue-cesium'
// VueCesium 默认使用 `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium,{
  cesiumPath: './Cesium/Cesium.js',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
  