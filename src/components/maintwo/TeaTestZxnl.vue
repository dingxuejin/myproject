<template>
  <div>
    <!-- 专线能力设置 -->
    <div class="flex-between">
      <div class="flex-start zxnl1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
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
            <span class="nowrap">内容选择:</span>
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
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>

            <th>NO</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>内容模块</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>语法</td>
            <td class="btn-lv">
              <button>设置</button>
              <button>查看</button>
            </td>
          </tr>
          <tr>

            <td>2</td>
            <td>能力考</td>
            <td>N1</td>
            <td>词汇</td>
            <td class="btn-lv">
              <button>设置</button>
              <button>查看</button>
            </td>
          </tr>
          <tr>

            <td>3</td>
            <td>商务口语</td>
            <td></td>
            <td>就职</td>
            <td class="btn-lv">
              <button>设置</button>
              <button>查看</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestZxnl",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "专线能力设置", to: "" }
      ],
      tabs: [
        { name: "专线能力设置", to: "/teatestzxnl" },
        { name: "真题演练设置", to: "/teatestztyl" },
        { name: "竞赛设置", to: "/teatestjingsai" }
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
.zxnl1 > div,
.zxnl1 > div > div {
  margin: 5px;
}
.zxnl1 > div {
  width: 20%;
}
</style>



