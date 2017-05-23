import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由规则
import routes from './routes'
Vue.use(VueRouter);

//路由实例
var router = new VueRouter({
    routes,
    mode: 'history'
});


/**
 * 全局路由钩子,路由跳转之前执行
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 * * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
 * * next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
 * * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
 */
router.beforeEach((to, from, next) => {
    //TODO
    next();
});

/**
 * 全局路由钩子,路由跳转之后执行
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
router.afterEach((to, from) => {
    //TODO
});

module.exports = router;