function forData(data) {
    let tdNum = [];
    tdNum.push(data.slice(0));
    for (let i = 0; i <= 5; i++) {
        let arrChild = []
        tdNum[i].map((val) => {
            if (val.list) {
                arrChild = arrChild.concat(val.list)
            }
        })
        arrChild = arrChild.map((val) => {
            if (!val.count) {
                val.count = 1;
            }
            val.menu = JSON.parse(val.menu)
            return val;
        })
        tdNum.push(arrChild);
    }
    tdNum = tdNum.filter((val) => {
        return val.length > 0
    })
    tdNum = tdNum.slice(1);
    return tdNum;

};
// data为数组类型
function getData(data) {
    let newData = forData(data);
    let results = newData.map(val => {
        let newArr = [];
        val.map(val => {
            let count = val.count;
            let length = count - 1;

            let newChild = [];
            newChild.length = length;
            newChild.fill({
                count: 0,
                menu: {}
            });
            newArr = newArr.concat(val);
            newArr = newArr.concat(newChild);
        })
        return newArr;

    })
    let opo = {};
    results.map(val => {

        let menuLevel = val[0].menu.menuLevel;
        opo[menuLevel] = val;


    })
    return opo;
}

export default getData