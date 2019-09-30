import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import HomeModules from './Home/index';

// 数据持久化
import createPersistedState from "vuex-persistedstate"
// vue-logger 调试工具
import createLogger from 'vuex/dist/logger'

const store = new Vuex.Store({
    modules : {
        HomeModules
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            reducer(val) {
                return {
                    HomeModules: val.HomeModules
                }
            }
        }),
        createLogger()
    ]
})

export default store;