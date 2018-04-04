<template>
  <div id="header">
    <div class="flex header1">
      <div class="flex-inline header2">
        <img src="../assets/header/logo.png" alt="">
        <span class="header3">|</span>
        <span class="header4">日语教育平台</span>
      </div>
      <div class="flex-inline header5 nowrap">
        <span>欢迎top1</span>
        <span>当前在线用户：1</span>
        <img src="../assets/header/fanhui.png" alt="">
        <img src="../assets/header/shouye.png" alt="">
        <img src="../assets/header/yonghu.png" alt="">
        <img src="../assets/header/mima.png" alt="">
        <img src="../assets/header/tuichu.png" alt="">
      </div>
    </div>
  </div>

</template>
<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
.flex-inline {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
.header1 {
    background: url(../assets/header/pg.png);
    height: 90px;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 5px solid #1b62d4;
    overflow: hidden;
}
.header2 {
    width: 350px;
    min-width: 350px;
}
.header3 {
    font-size: 36px;
}
.header4 {
    font-size: 26px;
}
.header5 {
    font-size: 14px;
}
.header5>span,.header5>img {
 
    margin: 0 5px;
}
</style>
<script>
export default {
    name: "TeaSpeHeader",
    mounted: function() {
        console.log(this.$route.params);
    }
};
</script>