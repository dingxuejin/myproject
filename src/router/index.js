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
// 123
// 亿测吧部分
import TeaTestContainer from '@/components/TeaTestContainer'
import TeaTestMain from '@/components/TeaTestMain'
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

// 写作部分 start
import TeaWriteContainer from '@/components/TeaWriteContainer'
import TeaWriteMain from '@/components/TeaWriteMain'
import TeaWriteClassManage from '@/components/mainone/TeaWriteClassManage'
import TeaWriteMultiSelectManage from '@/components/mainone/TeaWriteMultiSelectManage'
import TeaWriteTranslate from '@/components/mainone/TeaWriteTranslate'
import TeaWriteInteractiveInfoManage from '@/components/mainone/TeaWriteInteractiveInfoManage'
import TeaWriteCommentEachOther from '@/components/maintwo/TeaWriteCommentEachOther'
import TeaWriteCorrectByTeacher from '@/components/maintwo/TeaWriteCorrectByTeacher'
import TeaWriteTeachResourceManage from '@/components/mainone/TeaWriteTeachResourceManage'
import TeaWriteGradeQuery from '@/components/maintwo/TeaWriteGradeQuery'
import TeaWriteAddTest from '@/components/mainone/TeaWriteAddTest'
import TeaWriteAddKnowledge from '@/components/mainone/TeaWriteAddKnowledge'
import TeaWriteMessageManage from '@/components/maintwo/TeaWriteMessageManage'
import TeaWriteTrueFalse from '@/components/mainone/TeaWriteTrueFalse'
import TeaWriteFillBlank from '@/components/mainone/TeaWriteFillBlank'
import TeaWritePractice from '@/components/mainone/TeaWritePractice'
import TeaWriteStudentManage from '@/components/mainone/TeaWriteStudentManage'
import TeaWriteStudentUpload from '@/components/maintwo/TeaWriteStudentUpload'
import TeaWritePush from '@/components/maintwo/TeaWritePush'
import TeaWritePracticeManage from '@/components/maintwo/TeaWritePracticeManage'
import TeaWritePractice1 from '@/components/maintwo/TeaWritePractice1'
import TeaWriteResultAnalysis from '@/components/maintwo/TeaWriteResultAnalysis'
import TeaWriteCheckPoint from '@/components/maintwo/TeaWriteCheckPoint'
import TeaWriteAnswerSetup from '@/components/maintwo/TeaWriteAnswerSetup'
import TeaWritePointSetup from '@/components/maintwo/TeaWritePointSetup'
import TeaWriteProgressQuery from '@/components/maintwo/TeaWriteProgressQuery'
import TeaWriteAbilityEvaluationReport from '@/components/maintwo/TeaWriteAbilityEvaluationReport'
import TeaWriteAnswer from '@/components/maintwo/TeaWriteAnswer'
import TeaWriteExampleUpload from '@/components/mainone/TeaWriteExampleUpload'
import TeaWritePracticeCorrect from '@/components/maintwo/TeaWritePracticeCorrect'
import TeaWriteLessonSetup from '@/components/maintwo/TeaWriteLessonSetup'
import TeaWriteLessonSetup_nlcp from '@/components/maintwo/TeaWriteLessonSetup_nlcp'
import TeaWriteLessonSetup_szyl from '@/components/maintwo/TeaWriteLessonSetup_szyl'
// 写作部分 end

Vue.use(Router)

export default new Router({
  routes: [
    // 亿测吧部分
    {
      path: '/teatestcontainer', name: 'TeaTestContainer', component: TeaTestContainer, children: [

        { path: '/teatest', name: 'TeaTestMain', component: TeaTestMain },
        { path: '/teatestxtyy', name: 'TeaTestXtyy', component: TeaTestXtyy },
        {
          path: '/mainone', name: 'TeaMainOne', component: TeaMainOne, children: [
            { path: '/teatestclassmag', name: 'TeaTestClassMag', component: TeaTestClassMag },
            { path: '/teatesthdxx', name: 'TeaTestHdxx', component: TeaTestHdxx },
            { path: '/teatestfanyi', name: 'TeaTestFanyi', component: TeaTestFanyi },
            { path: '/teatestpanduan', name: 'TeaTestPanduan', component: TeaTestPanduan },
            { path: '/teatesttiankong', name: 'TeaTestTiankong', component: TeaTestTiankong },
            { path: '/teatestxuanze', name: 'TeaTestXuanze', component: TeaTestXuanze },
            { path: '/teatestjuanzu', name: 'TeaTestJuanzu', component: TeaTestJuanzu },

            { path: '/teateststumag', name: 'TeaTestStuMag', component: TeaTestStuMag }
          ]
        },
        {
          path: '/maintwo', name: 'TeaMainTwo', component: TeaMainTwo, children: [

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
    },
    // 写作部分
    {
      path: '/teawritecontainer', name: 'TeaWriteContainer', component: TeaWriteContainer, children: [
        { path: '/teawritemain', name: 'TeaWriteMain', component: TeaWriteMain },
        {
          path: '/mainone', name: 'TeaMainOne', component: TeaMainOne, children: [
            { path: '/teawriteclassmanage', name: 'TeaWriteClassManage', component: TeaWriteClassManage },
            { path: '/teawritemultiselectmanage', name: 'TeaWriteMultiSelectManage', component: TeaWriteMultiSelectManage },
            { path: '/teawritetranslate', name: 'TeaWriteTranslate', component: TeaWriteTranslate },
            { path: '/teawriteteachresourcemanage', name: 'TeaWriteTeachResourceManage', component: TeaWriteTeachResourceManage },
            { path: '/teawriteaddtest', name: 'TeaWriteAddTest', component: TeaWriteAddTest },
            { path: '/teawriteaddknowledge', name: 'TeaWriteAddKnowledge', component: TeaWriteAddKnowledge },
            { path: '/teawritetruefalse', name: 'TeaWriteTrueFalse', component: TeaWriteTrueFalse },
            { path: '/teawritefillblank', name: 'TeaWriteFillBlank', component: TeaWriteFillBlank },
            { path: '/teawritepractice', name: 'TeaWritePractice', component: TeaWritePractice },
            { path: '/teawritestudentmanage', name: 'TeaWriteStudentManage', component: TeaWriteStudentManage },
            { path: '/teawriteexampleupload', name: 'TeaWriteExampleUpload', component: TeaWriteExampleUpload },
            { path: '/teawriteinteractiveinfomanage', name: 'TeaWriteInteractiveInfoManage', component: TeaWriteInteractiveInfoManage },
          ]
        },
        {
          path: '/maintwo', name: 'TeaMainTwo', component: TeaMainTwo, children: [
            { path: '/teawritecommenteachother', name: 'TeaWriteCommentEachOther', component: TeaWriteCommentEachOther },
            { path: '/teawritecorrectbyteacher', name: 'TeaWriteCorrectByTeacher', component: TeaWriteCorrectByTeacher },
            { path: '/teawritegradequery', name: 'TeaWriteGradeQuery', component: TeaWriteGradeQuery },
            { path: '/teawritemessagemanage', name: 'TeaWriteMessageManage', component: TeaWriteMessageManage },
            { path: '/teawritestudentupload', name: 'TeaWriteStudentUpload', component: TeaWriteStudentUpload },
            { path: '/teawritepush', name: 'TeaWritePush', component: TeaWritePush },
            { path: '/teawritepracticemanage', name: 'TeaWritePracticeManage', component: TeaWritePracticeManage },
            { path: '/teawritepractice1', name: 'TeaWritePractice1', component: TeaWritePractice1 },
            { path: '/teawriteresultanalysis', name: 'TeaWriteResultAnalysis', component: TeaWriteResultAnalysis },
            { path: '/teawritecheckpoint', name: 'TeaWriteCheckPoint', component: TeaWriteCheckPoint },
            { path: '/teawriteanswersetup', name: 'TeaWriteAnswerSetup', component: TeaWriteAnswerSetup },
            { path: '/teawritepointsetup', name: 'TeaWritePointSetup', component: TeaWritePointSetup },
            { path: '/teawriteprogressquery', name: 'TeaWriteProgressQuery', component: TeaWriteProgressQuery },
            { path: '/teawriteabilityevaluationreport', name: 'TeaWriteAbilityEvaluationReport', component: TeaWriteAbilityEvaluationReport },
            { path: '/teawriteanswer', name: 'TeaWriteAnswer', component: TeaWriteAnswer },
            { path: '/teawritepracticecorrect', name: 'TeaWritePracticeCorrect', component: TeaWritePracticeCorrect },
            { path: '/teawritelessonsetup', name: 'TeaWriteLessonSetup', component: TeaWriteLessonSetup },
            { path: '/teawritelessonsetup_nlcp', name: 'TeaWriteLessonSetup_nlcp', component: TeaWriteLessonSetup_nlcp },
            { path: '/teawritelessonsetup_szyl', name: 'TeaWriteLessonSetup_szyl', component: TeaWriteLessonSetup_szyl },
          ]
        }
      ]
    }
  ]
})
