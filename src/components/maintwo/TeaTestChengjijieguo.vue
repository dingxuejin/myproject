<template>
  <div>

    <div class="flex-between">
      <div class="cjjg1 flex-start">
        <div class="flex-start">
          <div>
            <span class="nowrap">模块选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">级别:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">试卷名称:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="flex-end">
        <div class="btn-lan">
          <button>搜索</button>
        </div>
        <div class="btn-zi">
          <button>难易度</button>
        </div>
        <div class="btn-zi">
          <button>干扰项</button>
        </div>
      </div>
    </div>

    <div>
      <div>
        <div>

        </div>

        <table class="table1">
          <thead>
            <tr>
              <th>编号</th>
              <th>模块名称</th>
              <th>级别</th>
              <th>试卷名称</th>
              <th>题目ID</th>
              <th>题号</th>
              <th>题型</th>
              <th>平均分</th>
              <th>分值</th>
              <th>难易指数</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>J-test</td>
              <td>A-D</td>
              <td>试卷一</td>
              <td>x0001</td>
              <td>1</td>
              <td>选择题</td>
              <td>70</td>
              <td></td>
              <td></td>
              <td class="btn-lv">
                <button>预览</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestChengjijieguo",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "成绩结果分析", to: "" }
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
    let n = 3;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.cjjg1 > div,
.cjjg1 > div > div {
  margin:5px;
}
.cjjg1>div{
  width:25%;
}
</style>



