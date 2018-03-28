<template>
  <div id="app">
  <el-container>
  <el-header height='90px'>
    <tea-spe-header></tea-spe-header>
  </el-header>
  <el-container>
    <el-aside width="230px">
      <div class="aside1">
        <tea-spe-nav></tea-spe-nav>
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
import TeaSpeHeader from "./components/TeaSpeHeader.vue";
import TeaSpeNav from "./components/TeaSpeNav.vue";
export default {
  name: "App",
  components: { TeaSpeHeader, TeaSpeNav }
};
</script>


<style>
.el-container{
  background: url(assets/rongqi/bg.png);
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
.aside1{
  position: relative;
  border: #4affff solid 1px;
  box-sizing: border-box;
  height: 100%;
  border-radius: 10px;
  background: #fff;
}

.aside2,.aside3{
  border-bottom:#4affff solid 1px;
  position: absolute;
  bottom:5px;
  width:100%;
  height: 20px;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>

