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
     
    };
  },
  computed:{
    nav(){
      let nav=  [
        {
          navIcon: require("../assets/nav/banjiguanli.png"),
          navTitle:this.$store.getters.getLanage.bjgl,
          navArray: [
            {
              liName: this.$store.getters.getLanage.bjgl,
              goto: {
                name: "TeaTestClassMag"
              }
            },
            {
              liName:this.$store.getters.getLanage.xsgl,
              goto: {
                name: "TeaTestStuMag"
              }
            }
          ]
        },

        {
          navIcon: require("../assets/nav/liankaosai.png"),
          navTitle: this.$store.getters.getLanage.lkssz,
          navArray: [
            {
              liName: this.$store.getters.getLanage.zxnlsz,
              goto: {
                name: "TeaTestZxnl"
              }
            },
            {
              liName: this.$store.getters.getLanage.ztylsz,
              goto: {
                name: "TeaTestZtyl"
              }
            },
            {
              liName:this.$store.getters.getLanage.jssz,
              goto: {
                name: "TeaTestJingsai"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/jindu.png"),
          navTitle: this.$store.getters.getLanage.lksjdycj,
          navArray: [
            {
              liName:this.$store.getters.getLanage.lksjdcx,
              goto: {
                name: "TeaTestJindu"
              }
            },
            {
              liName: this.$store.getters.getLanage.lkscjcx,
              goto: {
                name: "TeaTestChengji"
              }
            },
            {
              liName: this.$store.getters.getLanage.lkscjtj,
              goto: {
                name: "TeaTestChengjitongji"
              }
            },
            {
              liName: this.$store.getters.getLanage.cjjgfx,
              goto: {
                name: "TeaTestChengjijieguo"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/guanli.png"),
          navTitle: this.$store.getters.getLanage.glzx,
          navArray: [
            {
              liName: this.$store.getters.getLanage.hdxxgl,
              goto: {
                name: "TeaTestHdxx"
              }
            },
            {
              liName:this.$store.getters.getLanage.xtyysz,
              goto: {
                name: "TeaTestXtyy"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/yunxingtiku.png"),
          navTitle: this.$store.getters.getLanage.yxtkgl,
          navArray: [
            {
              liName: this.$store.getters.getLanage.xzt,
              goto: {
                name: "TeaTestXuanze"
              }
            },
            {
              liName: this.$store.getters.getLanage.pdt,
              goto: {
                name: "TeaTestPanduan"
              }
            },
            {
              liName:this.$store.getters.getLanage.fyt,
              goto: {
                name: "TeaTestFanyi"
              }
            },
            {
              liName:this.$store.getters.getLanage.tkt,
              goto: {
                name: "TeaTestTiankong"
              }
            }
          ]
        },
        {
          navIcon: require("../assets/nav/juanzu.png"),
          navTitle:this.$store.getters.getLanage.zjgl,
          navArray: [
            {
              liName: this.$store.getters.getLanage.zjgl,
              goto: {
                name: "TeaTestJuanzu"
              }
            }
          ]
        }
      ]
      return nav
    }
  },
  mounted(){
    
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
