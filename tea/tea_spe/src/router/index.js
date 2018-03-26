import Vue from 'vue'
import Router from 'vue-router'
import TeaSpeHeader from '@/components/TeaSpeHeader'
import TeaSpeMain from '@/components/TeaSpeMain'
import TeaSpeMainOne from '@/components/TeaSpeMainOne'
import TeaSpeMainTwo from '@/components/TeaSpeMainTwo'
import TeaSpeClassMag from '@/components/mainone/TeaSpeClassMag'
import TeaSpeAddKnle from '@/components/mainone/TeaSpeAddKnle'
import TeaSpeFbnk from '@/components/mainone/TeaSpeFbnk'
import TeaSpeStuMag from '@/components/mainone/TeaSpeStuMag'
import TeaSpeRol from '@/components/mainone/TeaSpeRol'
import TeaSpeSource from '@/components/mainone/TeaSpeSource'
import TeaSpeTing from '@/components/maintwo/TeaSpeTing'
import TeaSpeShuo from '@/components/maintwo/TeaSpeShuo'
import TeaSpeNlcp from '@/components/maintwo/TeaSpeNlcp'
import TeaSpeCjqz from '@/components/maintwo/TeaSpeCjqz'
import TeaSpeKcjd from '@/components/maintwo/TeaSpeKcjd'
import TeaSpeKccj from '@/components/maintwo/TeaSpeKccj'
import TeaSpeKcjg from '@/components/maintwo/TeaSpeKcjg'
import TeaSpeRadio from '@/components/mainone/TeaSpeRadio'
import TeaSpeRVMag from '@/components/mainone/TeaSpeRVMag'
import TeaSpeTongzhi from '@/components/maintwo/TeaSpeTongzhi'
import TeaSpeLiuyan from '@/components/maintwo/TeaSpeLiuyan'
import TeaSpeShixun from '@/components/maintwo/TeaSpeShixun'
import TeaSpeStushixun from '@/components/maintwo/TeaSpeStushixun'
import TeaSpeYou from '@/components/maintwo/TeaSpeYou'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/header', name: 'TeaSpeHeader', component: TeaSpeHeader },
    { path: '/teaspe', name: 'TeaSpeMain', component: TeaSpeMain },
    {
      path: '/mainone', name: 'TeaSpeMainOne', component: TeaSpeMainOne, children: [
        { path: '/teaspeclassmag', name: 'TeaSpeClassMag', component: TeaSpeClassMag },
        { path: '/teaspeaddknle', name: 'TeaSpeAddKnle', component: TeaSpeAddKnle },
        { path: '/teaspefbnk', name: 'TeaSpeFbnk', component: TeaSpeFbnk },
        { path: '/teasperol', name: 'TeaSpeRol', component: TeaSpeRol },
        { path: '/teaspesource', name: 'TeaSpeSource', component: TeaSpeSource },
        { path: '/teaspestumag', name: 'TeaSpeStuMag', component: TeaSpeStuMag },
        { path: '/teasperadio', name: 'TeaSpeRadio', component: TeaSpeRadio },
        { path: '/teaspervmag', name: 'TeaSpeRVMag', component: TeaSpeRVMag }
      ]
    },
    {
      path: '/maintwo', name: 'TeaSpeMainTwo', component: TeaSpeMainTwo, children: [
        { path: '/teaspeting', name: 'TeaSpeTing', component: TeaSpeTing },
        { path: '/teaspeshuo', name: 'TeaSpeShuo', component: TeaSpeShuo },
        { path: '/teaspenlcp', name: 'TeaSpeNlcp', component: TeaSpeNlcp },
        { path: '/teaspecjqz', name: 'TeaSpeCjqz', component: TeaSpeCjqz },
        { path: '/teaspekcjd', name: 'TeaSpeKcjd', component: TeaSpeKcjd },
        { path: '/teaspekccj', name: 'TeaSpeKccj', component: TeaSpeKccj },
        { path: '/teaspekcjg', name: 'TeaSpeKcjg', component: TeaSpeKcjg },
        { path: '/teaspetongzhi', name: 'TeaSpeTongzhi', component: TeaSpeTongzhi },
        { path: '/teaspeliuyan', name: 'TeaSpeLiuyan', component: TeaSpeLiuyan },
        { path: '/teaspeshixun', name: 'TeaSpeShixun', component: TeaSpeShixun },
        { path: '/teaspestushixun', name: 'TeaSpeStushixun', component: TeaSpeStushixun },
        { path: '/teaspeyou', name: 'TeaSpeYou', component: TeaSpeYou }

      ]
    }
  ]
})
