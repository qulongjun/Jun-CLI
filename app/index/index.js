//============导入JS文件=============
import Vue from 'mod/vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'

//===========导入Vue组件==============
import Favlist from './components/Favlist.vue'
import Nav1 from './components/Nav1.vue'
import Nav2 from './components/Nav2.vue'

//==========导入CSS文件===============
import './style/index.css'
import './style/font.css'


Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


//
// Vue.http.get("/api/role/total").then(response => {
//     var data = response.data;
//     console.log(data);
// }, response => {
//
// });

var routes = [
    {
        path: "/nav1",
        name: "/nav1",
        component: Nav1
    }, {
        path: "/nav2",
        name: "/nav2",
        component: Nav2
    }
];

//路由器实例
var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});


new Vue({
    el: '#app',
    router,
    components: {
        'my-component': Favlist
    }
});