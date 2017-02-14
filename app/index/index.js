//============导入JS文件=============
import Vue from 'Vue'

//===========导入Vue组件==============
import Favlist from './components/Favlist.vue'

//==========导入CSS文件===============
import './style/index.css'
import './style/font.css'

Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
      el: '#app',
      components: {
        'my-component': Favlist
      }
  });
}