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
            headers: options.headers,

            url: options.url,

            // `method` 是创建请求时使用的方法
            method: options.method, // 默认是 get

            // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
            // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
            // baseURL: '/api/',
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
                    message: response.data.message,
                    type: "success"
                });
                resolve(response);//把请求到的数据发到引用请求的地方
            })
            .catch(error => {
                loading.close();


                if (error.response) {
                    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.headers);
                    Message.warning({
                        showClose: true,
                        message: "操作失败",
                        type: "error"
                    });
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error', error.message);
                    Message.warning({
                        showClose: true,
                        message: error.data.message,
                        type: "error"
                    });
                }
                console.error(error.config);
                reject(error);
            });
    });
}