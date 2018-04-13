import Vue from 'vue'
import Vuex from 'vueX'
import zrzh from './zrzh'
import menu from './menu'


Vue.use(Vuex)

let store = new Vuex.Store({
    modules:{zrzh,menu}
  
})
export default store