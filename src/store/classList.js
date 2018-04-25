import $axios from '../axios/api'
const classList = {
    state: {
        classList: [{
            value: null, label: ""
        }]
    },
    getters: {
        getClassList(state) {
            return state.classList
        }
    },
    mutations: {
        setClassList(state, data) {
            state.classList = data
        }
    },
    actions: {
        setClassList({ commit }) {
            $axios.get("busjapsys/tea/classes/class/classList?teacherId=1")
                .then(res => {
                    let classList = res.data.results.classList;
                    console.log(res);
                    classList = classList.map((val, i) => {
                        let itemList = {
                            value: val.xueid,
                            label: val.className
                        };
                        return itemList;
                        
                    });
                    commit('setClassList', classList)
                });
        }
    }
}
export default classList