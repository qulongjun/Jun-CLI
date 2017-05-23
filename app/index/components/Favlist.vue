<template id="template-home">
    <div class="col-md-10 col-md-offset-1">
        <h2 class="text-center"> WebPack+Vue框架搭建成功！</h2>
        <hr>
        <h3> 测试Vuex DEMO 1---计数器 {{count}}
            <button type="button" class="btn btn-info" @click="increment">增加</button>
            <button type="button" class="btn btn-warning" @click="add">延时增加</button>
        </h3>
        <h3> 测试Vuex DEMO 2</h3>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>id</th>
                <th>Text</th>
                <th>Done</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in todos">
                <th scope="row">{{item.id}}</th>
                <td>{{item.text}}</td>
                <td>{{item.done}}</td>
            </tr>
            </tbody>
        </table>
        <p>显示Done为True的记录，共{{doneTodosCount}}条</p>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>id</th>
                <th>Text</th>
                <th>Done</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in doneTodos">
                <th scope="row">{{item.id}}</th>
                <td>{{item.text}}</td>
                <td>{{item.done}}</td>
            </tr>
            </tbody>
        </table>
        <hr>
        <h3>测试Vue-Router</h3>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <span class="navbar-brand" >导航条</span>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link :to="{ path: '/nav1/child1' }">第一页（第一子页）</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/nav1/child2' }">第一页（第二子页）</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/nav2' }">第二页</router-link>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script type="es6">
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    module.exports = {
        computed: {
            ...mapState([
                // 映射 this.count 为 store.state.count
                'count',
                'todos'
            ]),
            ...mapGetters([
                'doneTodos',
                'doneTodosCount',
            ])
        },
        methods: {
            ...mapMutations([
                'increment' // 映射 this.increment() 为 this.$store.commit('increment')
            ]),
            ...mapActions({
                add: 'incrementAsync' // 映射 this.add() 为 this.$store.dispatch('increment')
            })
        }
    }
</script>
