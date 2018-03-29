<template>
  <div>
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
          navTitle: "班级管理",
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
          navArray: [
            {
              liName: "听一听",
              goto: {
                name: "TeaSpeTing"
              }
            },
            {
              liName: "说一说",
              goto: {
                name: "TeaSpeShuo"
              }
            },
            {
              liName: "能力测评设置",
              goto: {
                name: "TeaSpeNlcp"
              }
            },
            {
              liName: "成绩权重设置",
              goto: {
                name: "TeaSpeCjqz"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/kechengchengji.png"),
          navTitle: "课程成绩与分析",
          navArray: [
            {
              liName: "课程进度查询",
              goto: {
                name: "TeaSpeKcjd"
              }
            },
            {
              liName: "课程成绩查询",
              goto: {
                name: "TeaSpeKccj"
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
