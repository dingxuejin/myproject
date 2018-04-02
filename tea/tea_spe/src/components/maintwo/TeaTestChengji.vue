<template>
  <div>
    <!-- 练考赛成绩查询 -->
    <div class="flex-start zxnl1">
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
    <div class="flex-between">
      <div class="flex-start">
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">班级:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">模块选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">内容选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">快别:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="flex-end btn-lan">
        <button class="nowrap">查询</button>
        <button class="nowrap">导出EXCEL</button>
      </div>
    </div>

    <div>
      <table class='table1'>
        <thead>
          <tr>
            <th>编号</th>
            <th>学号</th>
            <th>姓名</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>内容模块</th>
            <th>测试最新时间</th>
            <th>成绩一</th>
            <th>成绩二</th>
            <th>最新成绩</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>101</td>
            <td>stu01</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>语法</td>
            <td>2017/10/7</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td class="btn-lv">
              <button>查看明细</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>102</td>
            <td>stu02</td>
            <td>能力考</td>
            <td>N1</td>
            <td>语法</td>
            <td>2017/10/7</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td class="btn-lv">
              <button>查看明细</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestChengji",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "练考赛成绩查询", to: "" }
      ],
      tabs: [
        { name: "练考赛进度查询", to: "/teatestjindu" },
        { name: "练考赛成绩查询", to: "/teatestchengji" },
        { name: "练考赛成绩统计", to: "/teatestchengjitongji" },
        { name: "成绩结果分析", to: "/teatestchengjijieguo" }
      ]
    };
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
.zxnl1 > div,
.zxnl1 > div > div {
  margin: 5px;
}
.zxnl2 {
  width: 22%;
}
</style>
