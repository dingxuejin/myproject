import axios from 'axios';//引入axios
import qs from 'qs'
import { Loading } from 'element-ui';
import { Message } from 'element-ui'

export function fetch(options) {
    const loading = Loading.service({
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
    });
    return new Promise((resolve, reject) => {
        const instance = axios.create({  //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
            //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
            headers:options.headers,

            url: options.url,

            // `method` 是创建请求时使用的方法
            method: options.method, // 默认是 get

            // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
            // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
            baseURL: '/api/',

            // `transformRequest` 允许在向服务器发送前，修改请求数据
            // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
            // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理

                return qs.stringify(data);
            }],

            timeout: 20 * 1000 // 30秒超时
        });
        instance(options)
            .then(response => { //then 请求成功之后进行什么操作
                loading.close();
                Message.success({
                    showClose: true,
<<<<<<< HEAD
                    message: "数据获取成功",
=======
                    message: "操作成功",
>>>>>>> 5038b4f02c0a39e3c9b20e944f920857c73ac1a3
                    type: "success"
                });
                resolve(response);//把请求到的数据发到引用请求的地方
            })
            .catch(error => {
                loading.close();
                Message.warning({
                    showClose: true,
<<<<<<< HEAD
                    message: "数据获取失败",
=======
                    message: "操作失败",
>>>>>>> 5038b4f02c0a39e3c9b20e944f920857c73ac1a3
                    type: "error"
                });
                console.log(options.url + '请求异常信息：' + error);
                reject(error);
            });
    });
}