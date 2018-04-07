<template>
  <div id="kccj">
    <!-- 课程成绩查询页面 -->
    <div class="flex-between">

      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级名称</span>
          </div>
          <div>
            <el-select></el-select>
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
      <div class="btn-lan nowrap flex-end">
        <button>查询</button>
        <button>导出EXCEL</button>
      </div>

    </div>

    <div style="marginTop:10px;" class="table0">
      <table class="table1">
        <thead>
          <tr>
            <th rowspan="2"></th>
            <th rowspan="2">学生姓名</th>
            <th rowspan="2">学号</th>
            <th rowspan="2">总分</th>
            <th>机场</th>
            <th>交通</th>
            <th> 餐厅</th>
            <th>酒店</th>
            <th>观光</th>
            <th>求职</th>
            <th>电话应对</th>
            <th>拜访</th>
            <th>客诉处理</th>
            <th rowspan="2">操作</th>
          </tr>
          <tr>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>
            <th>(10%)</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>张珊</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="btn-lv">
              <button>
                查看明细
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
    <el-dialog :visible.sync="isMx"></el-dialog>
  </div>
</template>
<script>
export default {
  name: "TeaSpeKccjcxTing",
  data() {
    return {
      isMx: true,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课程成绩查询", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspekccjcxting" },
        { name: "说一说", to: "/teaspekccjcxshuo" },
        { name: "能力测评", to: "/teaspekccjcxnlcp" },
        { name: "课程成绩", to: "/teaspekccjcxkccj" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 0;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>

.table0 table td {
  min-width: 100px;
}
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
.rv1 {
  width: 600px;
}
</style>


