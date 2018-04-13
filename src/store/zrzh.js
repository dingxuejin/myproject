import ja from '../lang/ja'
import zh from '../lang/zh'

const zrzh = {
    state: {
        locale: 'menuName',    // 语言标识
    },
    getters: {
        getLanguage(state) {
            return state.locale
        }
    },
    mutations: {
        changeLanguage(store, data) {
            store.locale = data
        }
    },
    actions: {
        setLanguage(context, data) {
            console.log(222222222222222);
            let language
            if (data) {
                language = 'menuName';
            } else {
                language = 'menuJpName';
            }
            context.commit('changeLanguage', language)
        }
    }
}
export default zrzh;