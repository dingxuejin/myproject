import { fetch } from "./fetch"; //引用fetch.js


let ax = {};
ax.get = function (url, data = null) {
    return fetch({
        headers: { 'Content-Type': 'application/json' },
        url: url,
        method: 'get',//请求方法
        params: data //传过去的参数
        
    })
}
ax.post = function (url, data = null) {
    return fetch({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: url,
        method: 'post',//请求方法
        data: data
    })
}
export default ax
