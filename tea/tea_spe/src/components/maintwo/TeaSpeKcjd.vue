<template>
  <div>
    <!-- 课程进度查询页面 -->
    <div class="flex-between">
      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级</span>
          </div>
          <div>
            <el-input></el-input>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">学生姓名</span>
          </div>
          <div>
            <el-input></el-input>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">学生学号</span>
          </div>
          <div>
            <el-input></el-input>
          </div>
        </div>

      </div>
      <div class="btn-lan nowrap">
        <button>查询</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class='table1'>
        <thead>
          <tr>
            <th>编号</th>
            <th>学号</th>
            <th>学生姓名</th>
            <th>进度情况</th>
            <th>完成率</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2017020301</td>
            <td>sunhongjiang</td>
            <td style="width:40%;">
              <div class="flex-center">
                <div style="margin:5px;">0</div>
                <div style="width:80%;">
                  <el-progress :text-inside="true" :stroke-width="12" :percentage="60" status="success"></el-progress>
                </div>
                <div style="margin:5px;">100</div>
              </div>

            </td>
            <td>50</td>
            <td class="btn-lv">
              <button @click="toMingxi()">查看明细</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeKcjd",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课程进度查询", to: "" }
      ],
      tabs: [
        { name: "课程进度查询", to: "/teaspekcjd" },
        { name: "课程成绩查询", to: "/teaspekccj" },
        { name: "课程结果分析", to: "/teaspekcjg" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 0;
    this.$emit("getData", { tabs, breadcrumb, n });
  },
  methods: {
    toMingxi() {
      this.$router.push({
        name: "TeaSpeKcjdMx"
      });
    }
  }
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>



