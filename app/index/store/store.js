import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//Vuex实例
const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: 'A', done: true},
            {id: 2, text: 'B', done: false}
        ]
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    }
});

store.commit("increment", 20);

module.exports = store