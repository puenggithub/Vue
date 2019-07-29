import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueDraggable from 'vue-draggable'
import DynamicForm from 'vue-dynamic-form-component'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(DynamicForm)
Vue.use(VueDraggable)
Vue.use(BootstrapVue)


new Vue({
  el: '#app',
  render: h => h(App)
})


