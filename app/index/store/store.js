import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//Vuex实例
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getter: {}
});

module.exports = store