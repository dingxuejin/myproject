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
          <button @click="isXuanze=true">难易度</button>
        </div>
        <div class="btn-zi">
          <button @click="isXuanze=false">干扰项</button>
        </div>
      </div>
    </div>

    <div>
      <div v-if="isXuanze">
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
      <div v-else-if="aaa===1"></div>
      <div v-else>
        <table class="table1">
          <thead>
            <tr>
              <th rowspan="2">NO</th>
              <th rowspan="2">模块名称</th>
              <th rowspan="2">级别</th>
              <th rowspan="2">试卷名称</th>
              <th rowspan="2">题目ID</th>
              <th rowspan="2">题号</th>
              <th rowspan="2">题型</th>
              <th rowspan="2">答题人数</th>
              <th colspan="4">各项选项人数</th>
              <th colspan="4">干扰项占比</th>
              <th rowspan="2">操作</th>
            </tr>
            <tr>
              <th>选项A</th>
              <th>选项B</th>
              <th>选项C</th>
              <th>选项D</th>
              <th>选项A</th>
              <th>选项B</th>
              <th>选项C</th>
              <th>选项D</th>

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
              <td>30</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestChengjijieguoZtyl",
  data() {
    return {
      isXuanze:true,
    breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "练考赛进度与成绩", to: "" },
        { name: "练考赛成绩统计", to: "" },
        { name: "真题演练", to: "" }
      ],
      tabs: [
        { name: "专项能力测评", to: "/teatestchengjijieguonlcp" },
        { name: "真题演练", to: "/teatestchengjijieguoztyl" },
        { name: "竞赛平台", to: "/teatestchengjijieguojspt" }
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
.cjjg1 > div,
.cjjg1 > div > div {
  margin: 5px;
}
.cjjg1 > div {
  width: 25%;
}
</style>



