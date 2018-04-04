<template>
  <div id="teatest">
    <el-container>
      <el-header height='90px'>
        <tea-header></tea-header>
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
  name: "TeaTestContainer",
  data() {
    return {
      nav: [
        {
          navIcon: require("../assets/nav/banjiguanli.png"),
          navTitle: "班级管理",
          navArray: [
            {
              liName: "班级管理",
              goto: {
                name: "TeaTestClassMag"
              }
            },
            {
              liName: "学生管理",
              goto: {
                name: "TeaTestStuMag"
              }
            }
          ]
        },

        {
          navIcon: require("../assets/nav/liankaosai.png"),
          navTitle: "练考赛设置",
          navArray: [
            {
              liName: "专线能力设置",
              goto: {
                name: "TeaTestZxnl"
              }
            },
            {
              liName: "真题演练设置",
              goto: {
                name: "TeaTestZtyl"
              }
            },
            {
              liName: "竞赛设置",
              goto: {
                name: "TeaTestJingsai"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/jindu.png"),
          navTitle: "练考赛进度与成绩",
          navArray: [
            {
              liName: "练考赛进度查询",
              goto: {
                name: "TeaTestJindu"
              }
            },
            {
              liName: "练考赛成绩查询",
              goto: {
                name: "TeaTestChengji"
              }
            },
            {
              liName: "练考赛成绩统计",
              goto: {
                name: "TeaTestChengjitongji"
              }
            },
            {
              liName: "成绩结果分析",
              goto: {
                name: "TeaTestChengjijieguo"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/guanli.png"),
          navTitle: "管理中心",
          navArray: [
            {
              liName: "互动信息管理",
              goto: {
                name: "TeaTestHdxx"
              }
            },
            {
              liName: "系统语言设置",
              goto: {
                name: "TeaTestXtyy"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/yunxingtiku.png"),
          navTitle: "运行题库管理",
          navArray: [
            {
              liName: "选择题",
              goto: {
                name: "TeaTestXuanze"
              }
            },
            {
              liName: "判断题",
              goto: {
                name: "TeaTestPanduan"
              }
            },
            {
              liName: "翻译题",
              goto: {
                name: "TeaTestFanyi"
              }
            },
            {
              liName: "填空题",
              goto: {
                name: "TeaTestTiankong"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/juanzu.png"),
          navTitle: "组卷管理",
          navArray: [
            {
              liName: "卷组管理",
              goto: {
                name: "TeaTestJuanzu"
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

@import "../../static/teaspetable.css";
@import "../../static/button.css";
 #teatest .el-dialog__header {
  background-image: url(../assets/header/pg.png);
  background-size: 100% 100%;
  height: 55px;
}
#teatest .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
.el-container {
  background: url(../assets/rongqi/teatestbg.png);
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
