<template>
    <div id="teawrite">
        <el-container>
            <el-header height='90px'>
                <tea-header/>
            </el-header>
            <el-container>
                <el-aside width="230px">
                    <div class="aside1">
                        <tea-nav :nav='nav'></tea-nav>
                        <div class="aside2">
                            <div class="aside3">

                            </div>
                        </div>
                    </div>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import TeaHeader from "./TeaHeader.vue";
import TeaNav from "./TeaNav.vue";
export default {
    name: "TeaSpeContainer",
    data() {
        return {
            nav: [
                {
                    navIcon: require("../assets/nav/teawrite/banjiguanli.png"),
                    navTitle: "班级管理",
                    navArray: [
                        {
                            liName: "班级管理",
                            goto: {
                                name: "TeaWriteClassManage"
                            }
                        },
                        {
                            liName: "学生管理",
                            goto: {
                                name: "TeaWriteStudentManage"
                            }
                        }
                    ]
                },

                {
                    navIcon: require("../assets/nav/teawrite/liankaosai.png"),
                    navTitle: "实战演练设置",
                    navArray: [
                        {
                            liName: "关卡开启",
                            goto: {
                                name: "TeaWriteCheckPoint"
                            }
                        },
                        {
                            liName: "答案设置",
                            goto: {
                                name: "TeaWriteAnswerSetup"
                            }
                        },
                        {
                            liName: "分值设置",
                            goto: {
                                name: "TeaWritePointSetup"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/kechengchengji.png"),
                    navTitle: "成绩与分析",
                    navArray: [
                        {
                            liName: "进度查询",
                            goto: {
                                name: "TeaWriteProgressQuery"
                            }
                        },
                        {
                            liName: "成绩查询",
                            goto: {
                                name: "TeaWriteGradeQuery"
                            }
                        },
                        {
                            liName: "结果分析",
                            goto: {
                                name: "TeaWriteResultAnalysis"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/kechengshezhi.png"),
                    navTitle: "能力测评管理",
                    navArray: [
                        {
                            liName: "能力测评报告",
                            goto: {
                                name: "TeaWriteAbilityEvaluationReport"
                            }
                        },
                        {
                            liName: "学生作答详情",
                            goto: {
                                name: "TeaWriteAnswer"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/jiaoxueziyuan.png"),
                    navTitle: "教学资源管理",
                    navArray: [
                        {
                            liName: "范例资源上传",
                            goto: {
                                name: "TeaWriteExampleUpload"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/guanli.png"),
                    navTitle: "管理中心",
                    navArray: [
                        {
                            liName: "互动资源管理",
                            goto: {
                                name: "TeaWriteInteractiveInfoManage"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/juanzu.png"),
                    navTitle: "教师批改管理",
                    navArray: [
                        {
                            liName: "单句翻译批改",
                            goto: {
                                name: "TeaWriteCorrectByTeacher"
                            }
                        },
                        {
                            liName: "写作实践批改",
                            goto: {
                                name: "TeaWritePracticeCorrect"
                            }
                        }
                    ]
                },
                {
                    navIcon: require("../assets/nav/teawrite/yunxingtiku.png"),
                    navTitle: "运行题库管理",
                    navArray: [
                        {
                            liName: "完形填空",
                            goto: {
                                name: "TeaWriteFillBlank"
                            }
                        },
                        {
                            liName: "单句翻译",
                            goto: {
                                name: "TeaWriteTranslate"
                            }
                        },
                        {
                            liName: "写作实践",
                            goto: {
                                name: "TeaWritePractice"
                            }
                        }
                    ]
                }
            ]
        };
    },
    components: { TeaHeader, TeaNav }
};
</script>
<style>
/* .el-dialog__header{
  background-image: url(../assets/header/pg.png);
  background-size: 100% 100%;
} */
@import '../../static/table.css';
@import "../../static/button.css";
.el-dialog__header {
  background-image: url(../assets/header/pg.png);
  background-size: 100% 100%;
  height: 55px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}


.el-container {
    background: url(../assets/rongqi/bg.png);
    background-size: 100% 100%;
}
.el-aside {
    text-align: center;
    min-height: 985px;
    padding: 10px;
}

.el-main {
    color: #333;
    text-align: center;
    min-height: 985px;
}
.aside1 {
    position: relative;
    border: #4affff solid 1px;
    box-sizing: border-box;
    height: 100%;
    border-radius: 10px;
    background: #fff;
}

.aside2,
.aside3 {
    border-bottom: #4affff solid 1px;
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
