import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)
const $axios = axios.create({
    baseURL: 'http://42.51.44.208:8888/busjapedu/',
    timeout: 1000
  });

  export default $axios