import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lembretes: []
    },
    mutations: {
        criarLembretes(state, titulo) {
            state.lembretes.push(titulo.titulo)
        }
    },
    actions: {},
    modules: {}
})