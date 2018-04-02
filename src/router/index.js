import Vue from 'vue'
import Router from 'vue-router'
import TeaWriteContainer from '@/components/TeaWriteContainer'
import TeaWriteMain from '@/components/TeaWriteMain'
import TeaMainOne from '@/components/TeaMainOne'
import TeaTestGradeAnalysis from '@/components/maintwo/TeaTestGradeAnalysis'
import TeaMainTwo from '@/components/TeaMainTwo'


// 写作部分 start
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
    // { path: '/',name: 'TeaSpe',component: TeaSpe},
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
