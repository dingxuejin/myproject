import Vue from 'vue'
import Router from 'vue-router'
// 公用部分
import TeaMainOne from '@/components/TeaMainOne'
import TeaMainTwo from '@/components/TeaMainTwo'

// 口语平台部分
import TeaSpeContainer from '@/components/TeaSpeContainer'
import TeaSpeMain from '@/components/TeaSpeMain'
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
import TeaSpeKcjdMx from '@/components/maintwo/TeaSpeKcjdMx'
import TeaSpeKccj from '@/components/maintwo/TeaSpeKccj'
import TeaSpeKcjg from '@/components/maintwo/TeaSpeKcjg'
import TeaSpeRadio from '@/components/mainone/TeaSpeRadio'
import TeaSpeRVMag from '@/components/mainone/TeaSpeRVMag'
import TeaSpeTongzhi from '@/components/maintwo/TeaSpeTongzhi'
import TeaSpeLiuyan from '@/components/maintwo/TeaSpeLiuyan'
import TeaSpeShixun from '@/components/maintwo/TeaSpeShixun'
import TeaSpeStushixun from '@/components/maintwo/TeaSpeStushixun'
import TeaSpeYou from '@/components/maintwo/TeaSpeYou'
// 亿测吧部分
import TeaTestContainer from '@/components/TeaTestContainer'
import TeaTestClassMag from '@/components/mainone/TeaTestClassMag'
import TeaTestStuMag from '@/components/mainone/TeaTestStuMag'
import TeaTestFanyi from '@/components/mainone/TeaTestFanyi'
import TeaTestPanduan from '@/components/mainone/TeaTestPanduan'
import TeaTestTiankong from '@/components/mainone/TeaTestTiankong'
import TeaTestXuanze from '@/components/mainone/TeaTestXuanze'
import TeaTestJuanzu from '@/components/mainone/TeaTestJuanzu'
import TeaTestHdxx from '@/components/maintwo/TeaTestHdxx'
import TeaTestJingsai from '@/components/maintwo/TeaTestJingsai'
import TeaTestXtyy from '@/components/maintwo/TeaTestXtyy'
import TeaTestZtyl from '@/components/maintwo/TeaTestZtyl'
import TeaTestChengji from '@/components/maintwo/TeaTestChengji'
import TeaTestChengjijieguo from '@/components/maintwo/TeaTestChengjijieguo'
import TeaTestChengjitongji from '@/components/maintwo/TeaTestChengjitongji'
import TeaTestJindu from '@/components/maintwo/TeaTestJindu'
import TeaTestZxnl from '@/components/maintwo/TeaTestZxnl'



Vue.use(Router)

export default new Router({
  routes: [
     // 亿测吧部分
     {
      path: '/teatestcontainer', name: 'TeaTestContainer', component: TeaTestContainer,children:[
        {
          path: '/mainone', name: 'TeaMainOne', component: TeaMainOne, children:[
            { path: '/teatestclassmag', name: 'TeaTestClassMag', component: TeaTestClassMag },
            { path: '/teatestxtyy', name: 'TeaTestXtyy', component: TeaTestXtyy },
          
            { path: '/teatestfanyi', name: 'TeaTestFanyi', component: TeaTestFanyi },
            { path: '/teatestpanduan', name: 'TeaTestPanduan', component: TeaTestPanduan },
            { path: '/teatesttiankong', name: 'TeaTestTiankong', component: TeaTestTiankong },
            { path: '/teatestxuanze', name: 'TeaTestXuanze', component: TeaTestXuanze },
           
            { path: '/teatestjuanzu', name: 'TeaTestJuanzu', component: TeaTestJuanzu },
            { path: '/teateststumag', name: 'TeaTestStuMag', component: TeaTestStuMag }
          ] 
        },
        {
          path: '/maintwo', name: 'TeaMainTwo', component: TeaMainTwo, children:[
            { path: '/teatesthdxx', name: 'TeaTestHdxx', component: TeaTestHdxx },
            { path: '/teatestchengjitongji', name: 'TeaTestChengjitongji', component: TeaTestChengjitongji },
            { path: '/teatestchengjijieguo', name: 'TeaTestChengjijieguo', component: TeaTestChengjijieguo },
            { path: '/teatestjindu', name: 'TeaTestJindu', component: TeaTestJindu },
            { path: '/teatestchengji', name: 'TeaTestChengji', component: TeaTestChengji },
            { path: '/teatestzxnl', name: 'TeaTestZxnl', component: TeaTestZxnl },
            { path: '/teatestztyl', name: 'TeaTestZtyl', component: TeaTestZtyl },
            { path: '/teatestjingsai', name: 'TeaTestJingsai', component: TeaTestJingsai }
          ] 
        }
      ]
    },
    // 口语平台部分
 
    {
      path: '/teaspecontainer', name: 'TeaSpeContainer', component: TeaSpeContainer, children: [
        { path: '/teaspe', name: 'TeaSpeMain', component: TeaSpeMain },
        {
          path: '/mainone', name: 'TeaMainOne', component: TeaMainOne, children: [
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
          path: '/maintwo', name: 'TeaMainTwo', component: TeaMainTwo, children: [
            { path: '/teaspeting', name: 'TeaSpeTing', component: TeaSpeTing },
            { path: '/teaspeshuo', name: 'TeaSpeShuo', component: TeaSpeShuo },
            { path: '/teaspenlcp', name: 'TeaSpeNlcp', component: TeaSpeNlcp },
            { path: '/teaspecjqz', name: 'TeaSpeCjqz', component: TeaSpeCjqz },
            { path: '/teaspekcjd', name: 'TeaSpeKcjd', component: TeaSpeKcjd },
            { path: '/teaspekcjdmx', name: 'TeaSpeKcjdMx', component: TeaSpeKcjdMx },
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
    }
  ]
})
