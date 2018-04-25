const quanzhong = {
    state: {
        quanzhong: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    },
    getters: {

        getQuanzhong(state) {

            return state.quanzhong.map(val => {
                return `${val}%`
            })
        }
    }
}
export default quanzhong