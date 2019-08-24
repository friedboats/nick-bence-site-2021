import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinkIsHovered: false,
        lightsAreRunning: true,
        currentPageName: 'home'
    },
    mutations: {
        navLinkOverHandler(state) {
            state.navLinkIsHovered = true;
        },
        navLinkOutHandler(state) {
            state.navLinkIsHovered = false;
        },
        navLinkClickHandler(state, payload) {  
            state.currentPageName = payload.page_id;
        },
        nameClickHandler(state) {
            state.lightsAreRunning = true;
            state.currentPageName = 'home';
        }
    },
    actions: {
        navLinkOver(store) {
            return store.commit('navLinkOverHandler');
        },
        navLinkOut(store) {
            return store.commit('navLinkOutHandler');
        },
        navLinkClick(store, payload) {
            return store.commit('navLinkClickHandler', payload);
        },
        nameClick(store) {
            return store.commit('nameClickHandler');
        }
    }
})