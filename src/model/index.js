import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import HomeModules from './Home/index';


const store = new Vuex.Store({
    modules : {
        HomeModules
    }
})

export default store;