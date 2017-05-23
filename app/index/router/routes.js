import Nav1 from '../components/Nav1.vue'
import Nav2 from '../components/Nav2.vue'
import Child1 from '../components/Child1.vue'
import Child2 from '../components/Child2.vue'
//路由映射
var routes = [
    {
        path: "/nav1",
        name: "/nav1",
        component: Nav1,
        beforeEnter: (to, from, next) => {
            //TODO
            next();
        },
        children: [{
            path: "child1",
            component: Child1
        }, {
            path: "child2",
            component: Child2
        }]
    }, {
        path: "/nav2",
        name: "/nav2",
        component: Nav2
    }
];

module.exports = routes;