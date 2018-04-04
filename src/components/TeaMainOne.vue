<template>
  <div id="mainOne1">
    <button @click="aaa()">获取数据</button>
    <ul>
      <li v-for='(item,index) in data' :key="index">{{item.xueid}}</li>
    </ul>
    <div class="mainOne2 flex-start">
      <el-breadcrumb separator='>>'>
        <el-breadcrumb-item :to="item.to" v-for="(item,index) in  breadcrumb" :key="index">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mainOne3">
      <div>
        <!-- 查询 -->
        <div class="mainOne4">
          <cha-xun></cha-xun>
        </div>
        <!-- end查询 -->
        <div class="mainOne6">
          <!-- 表格及按钮 -->
          <router-view @getData='getData'></router-view>
          <!-- 表格及按钮end -->
        </div>
      </div>
      <div class="aside2">
        <div class="aside3">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import ChaXun from "./public/chaxun";
export default {
  name: "TeaSpeMainOne",
  data() {
    return {
      breadcrumb: [],
      data: null
    };
  },
  mounted() {},
  methods: {
    aaa() {
      let that = this;
      console.log(this);
      this.$axios
        .get("/busjapedu/busjapspe/tea/module/menu/menuList")
        .then(function(res) {
          let data = res.data.results.menus;

          that.data = data;
        });
    },
    getData(data) {
      this.breadcrumb = data;
    }
  },
  components: { ChaXun }
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
  background: #fff;
}
#mainOne1 .mainOne4 {
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e0ddd9;
  box-sizing: border-box;
}

#mainOne1 .mainOne6 {
  padding: 5px 20px 50px;
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
</style>


