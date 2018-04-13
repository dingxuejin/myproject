<template>
    <div id="teaspe">
        <el-container>
            <el-header height='90px'>
                <tea-header></tea-header>
            </el-header>
            <el-container>
                <el-aside width="230px">
                    <div class="aside1">
                        <tea-nav :nav='getTeaSpeMeunList'></tea-nav>
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
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import TeaHeader from "./TeaHeader.vue";
import TeaNav from "./TeaNav.vue";

export default {
  name: "TeaSpeContainer",
  data() {
    return {
      nav: []
    };
  },
  computed: {
    ...mapGetters(["getTeaSpeMeunList"])
  },
  methods: {
    ...mapActions(['getMeun'])
  },
  created() {
    let url = "busjapsys/tea/menu/menu/menuList";
    let data={menuType:1}
    this.getMeun({ url,data});
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
