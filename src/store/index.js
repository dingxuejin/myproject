import Vue from 'vue'
import Vuex from 'vueX'
import zrzh from './zrzh'
import menu from './menu'
import user from './user'
import classList from './classList'
import quanzhong from './quanzhong'


Vue.use(Vuex)

let store = new Vuex.Store({
    modules:{zrzh,menu,user,classList,quanzhong}
  
})
export default store