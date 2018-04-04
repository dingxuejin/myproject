<template>
  <div>
    <div id="mainOne1">
      <div class="mainOne2 flex-start">
        <el-breadcrumb separator='>>'>
          <el-breadcrumb-item :to="item.to" v-for="(item,index) in  breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="mainOne3">
        <div>
          <div class="mainOne6">

            <div class="xtyy1">
              系统内语言
            </div>
            <div class="flex-center">
              <div class="xtyy2 flex-center" @click="active=false">
                <img  v-if='active' src="../../assets/teatestxtyy/teatestzw.png" alt="">
                <img  v-if='!active' src="../../assets/teatestxtyy/teatestzwactive.png" alt="">
              </div>
              <div class="xtyy2 flex-center" @click="active=true">
                <img  v-if='!active' src="../../assets/teatestxtyy/teatestrw.png" alt="">
                <img  v-if='active' src="../../assets/teatestxtyy/teatestrwactive.png" alt="">
              </div>
            </div>
            <div class="btn-lan">
              <button>保存</button>
            </div>

          </div>
        </div>
        <div class="aside2">
          <div class="aside3">
          </div>
        </div>
      </div>
    </div>
    <!-- 这是系统语言设置页面 -->

  </div>
</template>
<script>
export default {
  name: "TeaTestXtyy",
  data() {
    return {
      active:false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "系统语言设置", to: "" }
      ]
    };
  },
  mounted() {}
};
</script>
<style scoped>
#mainOne1 {
  min-width: 800px;
}
#mainOne1 .mainOne2 {
  height: 50px;
  min-width: 500px;
}
#mainOne1 .mainOne3 {
  min-height: 915px;
  border: #4affff solid 1px;
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  background-image: url(../../assets/teatestxtyy/teatestxtyybg.png);
  background-size: 100% 100%;
}
#mainOne1 .mainOne4 {
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e0ddd9;
  box-sizing: border-box;
}

.aside2,
.aside3 {
  border-bottom: #4affff solid 1px;
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}
.xtyy1 {
  color: #fff;
  padding: 20px;
  font-size: 18px;
}
.xtyy2{
  width:200px;
  height: 200px;
  overflow: hidden;
  margin:200px 80px 120px;
}
.xtyy2>img{
  width:100%;
  height: 100%;
}
</style>
