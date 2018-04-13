import $axios from '../axios/api'
const menu = {
    state: {
        menu: []
    },
    getters: {
        getTeaSpeMeunList(state) {
            return state.menu
        }
    },
    mutations: {
        changeMenu(state, newMenu) {
            state.menu = newMenu
        }
    },
    actions: {
        getMeun(context, option) {
            $axios
                .post(option.url,option.data)
                .then(function (res) {
                    let menuList = res.data.results;
                    let menu = menuList.sort(function (a, b) {
                        return a.menuNum - b.menuNum;
                    });
    
                    context.commit('changeMenu', menu)
                })
        }
    }
}
export default menu