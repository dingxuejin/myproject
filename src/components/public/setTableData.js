function forData(data) {
    let tdNum = [];
    // 循环data
    data.map((val1, i1) => {
        // 如果data的val存在list
        if (val1.list) {
            // 继续循环list里的值
            let tdNumChild = val1.list.map((val2, i2) => {
                let list, count,mymenu;
                if (val2.list) {
                    list = val2.list;
                    count = val2.count;
                    mymenu = {
                        menu: JSON.parse(val2.menu),
                        count,
                        list
                    }
                } else {
                    list = [];
                    count = 1;
                    mymenu = {
                        menu: val2,
                        count,
                        list
                    }
                }
                return mymenu;
            });
            // 将新数组重新加入tdNum
            tdNum = tdNum.concat(tdNumChild);
        }
    });
    console.log(tdNum);
    let num = [];
    // 循环tdNum
    tdNum.map((val, i, arr) => {
        let count = val.count;
        let newArr = [];
        newArr.length = count - 1;
        let newEl = {
            menu: JSON.stringify({ menuName: null, menuJpName: null }),
            count: 0
        };
        newArr.fill(newEl);
        // 将val与新的空数组加入到num中
        num = num.concat(val, newArr);
    });

    return num;
};
function getData(data) {
    let firstData = forData(data);
    let totalData = [];
    totalData.push(firstData);
    // 假定表格数据最多有8列
    for (let i = 0; i < 8; i++) {
        // 如果数组第i个存在值
        if (totalData[i].length > 0) {
            // 调用forData
            firstData = forData(totalData[i]);
            // 将转换的firstData插进totalData
            totalData.push(firstData);
        } else {
            break;
        }
    }
    totalData.length--;
    return totalData;
}
export default getData