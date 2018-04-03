import Vue from 'vue'
import Vuex from 'vueX'
import ja from '../lang/ja'
import zh from '../lang/zh'


Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        locale: 'zh',    // 语言标识
        ja,
        zh
    },
    getters: {
        getLanage(state) {
            let locale=state.locale;
            let lanage=state[locale];
            return lanage
        }
    },
    mutations: {
        setLanage(state, data) {
            state.locale = data;
        },
        changeLanage(store, data) {
            if (data) {
                store.locale = 'ja';
            } else {
                store.locale = 'zh';
            }
        }
    },
    action: {}
})
export default store