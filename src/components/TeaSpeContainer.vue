<template>
  <div id="teaspe">
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
  name: "TeaSpeContainer",
  data() {
    return {
      nav: [
        {
          navIcon: require("../assets/nav/banjiguanli.png"),
          navTitle: "首页",
          to: "/teaspe",
          navArray: []
        },
        {
          navIcon: require("../assets/nav/banjiguanli.png"),
          navTitle: "班级管理",
          to: "/teaspeclassmag",
          navArray: [
            {
              liName: "班级管理",
              goto: {
                name: "TeaSpeClassMag"
              }
            },
            {
              liName: "学生管理",
              goto: {
                name: "TeaSpeStuMag"
              }
            }
          ]
        },

        {
          navIcon: require("../assets/nav/kechengshezhi.png"),
          navTitle: "课程设置",
          to: "/teaspeting",
          navArray: [
            {
              liName: "课程模块设置",
              goto: {
                name: "TeaSpeTing"
              }
            }
       
          ]
        },
        {
          navIcon: require("../assets/nav/kechengchengji.png"),
          navTitle: "课程成绩与分析",
          to: "/teaspekcjdTing",
          navArray: [
            {
              liName: "课程进度查询",
              goto: {
                name: "TeaSpeKcjdTing"
              }
            },
            {
              liName: "课程成绩查询",
              goto: {
                name: "TeaSpeKccjcxTing"
              }
            },
            {
              liName: "课程结果分析",
              goto: {
                name: "TeaSpeKcjg"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/yinshipinguanli.png"),
          navTitle: "音视频管理",
          to: "/teasperadio",
          navArray: [
            {
              liName: "音频管理",
              goto: {
                name: "TeaSpeRadio"
              }
            },
            {
              liName: "配音视频管理",
              goto: {
                name: "TeaSpeRVMag"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/jiaoxueziyuan.png"),
          navTitle: "教学资源管理",
          to: "/teaspesource",
          navArray: [
            {
              liName: "教学资源管理",
              goto: {
                name: "TeaSpeSource"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/keneizhishitianjiao.png"),
          navTitle: "课内知识添加管理",
          to: "/teaspeaddKnle",
          navArray: [
            {
              liName: "课内资源添加",
              goto: {
                name: "TeaSpeAddKnle"
              }
            },
            {
              liName: "课内习题添加",
              goto: {
                name: "TeaSpeFbnk"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/hudongxinxi.png"),
          navTitle: "互动信息管理",
          to: "/teaspetongzhi",
          navArray: [
            {
              liName: "通知公告",
              goto: {
                name: "TeaSpeTongzhi"
              }
            },
            {
              liName: "留言管理",
              goto: {
                name: "TeaSpeLiuyan"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/shixunguanli.png"),
          navTitle: "实训管理",
          to: "/teaspeshixun",
          navArray: [
            {
              liName: "实训作业",
              goto: {
                name: "TeaSpeShixun"
              }
            },
            {
              liName: "学生实训作业",
              goto: {
                name: "TeaSpeStushixun"
              }
            },
            {
              liName: "最优推送",
              goto: {
                name: "TeaSpeYou"
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
#teaspe .el-dialog__header {
  background-image: url(../assets/header/pg.png);
  background-size: 100% 100%;
  height: 55px;
}
#teaspe .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}

.el-container {
  background: url(../assets/rongqi/teaspebg.png);
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
