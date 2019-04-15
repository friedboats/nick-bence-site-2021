import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinkIsHovered: false,
        lightsAreRunning: true,
        currentPageName: '',
        currentActiveColor: ''
    },
    mutations: {
        navLinkOverHandler(state) {
            state.navLinkIsHovered = true;
        },
        navLinkOutHandler(state) {
            state.navLinkIsHovered = false;
        },
        navLinkClickHandler(state, payload) {            
            // if the page name is blank then assume that lights are running (lights should not be on while page is loaded)
            if(!state.currentPageName) {
                state.lightsAreRunning = !state.lightsAreRunning;
            }

            state.currentPageName = payload.id;
            state.currentActiveColor = getComputedStyle(payload.el).borderTopColor;
        },
        nameClickHandler(state) {
            state.lightsAreRunning = true;
            state.currentPageName = '';
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