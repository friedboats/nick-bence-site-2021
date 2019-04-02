import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinkIsHovered: false
    },
    mutations: {
        navLinkOverHandler(state) {
            state.navLinkIsHovered = true;
        },
        navLinkOutHandler(state) {
            state.navLinkIsHovered = false;
        },
    },
    actions: {
        navLinkOver(store) {
            return store.commit('navLinkOverHandler');
        },
        navLinkOut(store) {
            return store.commit('navLinkOutHandler');
        },
    }
})
