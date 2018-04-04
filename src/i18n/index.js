import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '../lang/zh'
import ja from '../lang/ja'

Vue.use(VueI18n)

let i18n = new VueI18n({
    locale:'ja',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh': zh,   // 中文语言包
      'ja':ja    // 日文语言包
    }
  })

  export default i18n