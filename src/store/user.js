import $axios from '../axios/api'
const user = {
    state: {
        user: {
            userid: 1,
            name: 'aaa'
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    mutations: {},
    actions: {}
}
export default user