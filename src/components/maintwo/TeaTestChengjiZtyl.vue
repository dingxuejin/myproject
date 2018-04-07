<template>
  <div>
    <div>
      <div class=" flex-start">
        <div>
          <span class="nowrap">学生姓名：</span>
        </div>
        <div class="ztyl2">
          <el-input></el-input>
        </div>
        <div>
          <span class="nowrap">学生学号：</span>
        </div>
        <div class="ztyl2">
          <el-input></el-input>
        </div>
      </div>
    </div>
    <div class="flex-between">
      <div>
        <div class="flex-start ">
          <div class="flex-start ">
            <div>
              <span class="nowrap">班级：</span>
            </div>
            <div class="ztyl3">
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start ">
            <div>
              <span class="nowrap">模块选择：</span>
            </div>
            <div class="ztyl3">
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start">
            <div>
              <span class="nowrap">级别：</span>
            </div>
            <div class="ztyl3">
              <el-select>
              </el-select>
            </div>
          </div>
          <div>
          </div>
        </div>

      </div>

      <div class="btn-lan nowrap">
        <button>查询</button>
      </div>
    </div>

   
  
 
  
  </div>

</template>
<script>
export default {
  name: "TeaTestChengjiZtyl",
  data() {
    return {
   
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "练考赛进度与成绩", to: "" },
        { name: "练考赛成绩查询", to: "" },
        { name: "真题演练", to: "" }
      ],
      tabs: [
        { name: "专项能力测评", to: "/teatestchengjinlcp" },
        { name: "真题演练", to: "/teatestchengjiztyl" },
        { name: "竞赛平台", to: "/teatestchengjijingsai" }
      ]
    };
  },
  methods: {
  
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.ztyl2{
  width:200px;
   margin:10px 30px 10px 0;
}
.ztyl3{
  width:120px;
  margin:10px 30px 10px 0;
}
</style>
