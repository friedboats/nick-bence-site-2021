import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navLinkIsHovered: false,
        lightsAreRunning: true,
        currentPageName: 'home',
        jsonTestData: [
            {
                name: "Starbucks For Life",
                client: "Starbucks",
                headline: "Lorem ipsum dolor sit amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et eros gravida, convallis ipsum id, gravida lacus. Proin at odio congue arcu ultricies consequat. Duis id cursus tortor. Aliquam suscipit erat in pulvinar lacinia. Integer dignissim neque sit amet justo pulvinar, mattis molestie velit pharetra. Aliquam accumsan venenatis placerat. Cras tempor odio vitae elit pretium mattis sed vitae quam. In rutrum tellus leo, non ultricies nisl venenatis non. Curabitur et nulla sit amet nisi egestas bibendum. Nunc ullamcorper mattis nisi a faucibus. Mauris ultricies nec arcu at pulvinar. Aenean at elit odio. Integer cursus tempus mi vitae aliquet. Morbi ac est mi. Ut commodo mi eu leo consequat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            },
            {
                name: "Tailgate",
                client: "Schwans",
                headline: "Lorem ipsum dolor sit amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et eros gravida, convallis ipsum id, gravida lacus. Proin at odio congue arcu ultricies consequat. Duis id cursus tortor. Aliquam suscipit erat in pulvinar lacinia. Integer dignissim neque sit amet justo pulvinar, mattis molestie velit pharetra. Aliquam accumsan venenatis placerat. Cras tempor odio vitae elit pretium mattis sed vitae quam. In rutrum tellus leo, non ultricies nisl venenatis non. Curabitur et nulla sit amet nisi egestas bibendum. Nunc ullamcorper mattis nisi a faucibus. Mauris ultricies nec arcu at pulvinar. Aenean at elit odio. Integer cursus tempus mi vitae aliquet. Morbi ac est mi. Ut commodo mi eu leo consequat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            },
            {
                name: "Enter Holiday",
                client: "AARP",
                headline: "Lorem ipsum dolor sit amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et eros gravida, convallis ipsum id, gravida lacus. Proin at odio congue arcu ultricies consequat. Duis id cursus tortor. Aliquam suscipit erat in pulvinar lacinia. Integer dignissim neque sit amet justo pulvinar, mattis molestie velit pharetra. Aliquam accumsan venenatis placerat. Cras tempor odio vitae elit pretium mattis sed vitae quam. In rutrum tellus leo, non ultricies nisl venenatis non. Curabitur et nulla sit amet nisi egestas bibendum. Nunc ullamcorper mattis nisi a faucibus. Mauris ultricies nec arcu at pulvinar. Aenean at elit odio. Integer cursus tempus mi vitae aliquet. Morbi ac est mi. Ut commodo mi eu leo consequat bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            }           
        ]
    },
    mutations: {
        navLinkOverHandler(state) {
            state.navLinkIsHovered = true;
        },
        navLinkOutHandler(state) {
            state.navLinkIsHovered = false;
        },
        navLinkClickHandler(state, payload) {  
            console.log(payload.page_id);
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