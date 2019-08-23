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
                client: "Starbucks",
                name: "Starbucks For Life",
                goal: "Give My Starbucks Rewards® Members an exclusive experience to further amplify loyalty, increase incremental transaction during the holiday season, and spread holiday cheer!",
                solution: [
                    "Surprise and delight most loyal members with the opportunity to collect 3 unique game pieces in one row for a chance to win Starbucks for Life, Starbucks for a Year, Starbucks for a Month, Starbucks for a Week and over 1 million bonus stars to be won instantly.",
                    "Integrate with My Starbucks Rewards® authentication to give the user a simple process of logging into their account and be redirected back to the Starbucks for Life program.",
                    "Allow the user to share the promotion and/or their game pieces and stars to social media. Sending reminder emails along the way to keep the user engaged.",
                    "Show the user a feed, showcasing who is winning across the US and Canada and stats, showing total number of winners, shares and players, to engage the user and entice.",
                    "The client wanted to add a New Partner Engagement that allowed parters of Starbucks, who were My Starbucks Rewards® members, the chance to win Starbucks for Life.",
                    "Allow MSR Members to earn one game play every time they pay with their Starbucks card or app, up to two per day. Collect 3 unique game pieces in one row to win that particular prize category.  There are also over one million bonus stars to be won instantly!"],
                results: "Starbucks became a main client running this campaign every year afterwards, going on for X years now."
            },
            {
                client: "Schwans",
                name: "Tailgate At Your Place",
                goal: "",
                solution: ``,
                results: `` 
            },
            {
                client: "Nathans",
                name: "Ticket To Fun",
                solution: ``,
                results: `` 
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
            console.log("page change");
            
            state.currentPageName = payload.page_id;
            console.log(state.currentPageName);
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