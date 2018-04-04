<template>
  <div>
    <!-- 卷组管理 -->
    <div class="flex-between">
      <div class="flex-start zxnl1">
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
            <span class="nowrap">试卷名称:</span>
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

      </div>
      <div class="flex-end btn-lan">
        <button>查询</button>
        <button>组卷</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th>NO</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>试卷名称</th>
            <th>试卷信息</th>
            <th>分数</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>试卷一</td>
            <td>词汇（20）、句式（12）、听力题（18）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>能力考</td>
            <td>N1</td>
            <td>试卷一</td>
            <td>词汇（20）、句式（20）、听力题（18）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>商务礼仪</td>
            <td>2级</td>
            <td>试卷一</td>
            <td>词汇（20）、句式（52）、听力题（30）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestJuanzu",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "卷组管理", to: "" }
      ]
    };
  },
  mounted() {
    this.$emit("getData", this.breadcrumb);
  }
};
</script>
<style scoped>
.zxnl1 > div,
.zxnl1 > div > div {
  margin: 5px;
}
.zxnl1 > div {
  width: 20%;
}
</style>