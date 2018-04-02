<template>
  <div>
    <!-- 通知公告页面 -->
    <div class="flex-between">
      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">启用标识</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="btn-lan nowrap">
        <button>查询</button>
        <button>新增</button>
        <button>删除</button>
        <button>启用</button>
        <button>禁用</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>班级</th>
            <th>标题</th>
            <th>内容</th>
           
            <th>使用标识</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

            <td>class01</td>
            <td>调课</td>
            <td>周三日语调课</td>

            <td>
              启用
            </td>

            <td class="btn-lv">
              <button>修改</button>
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
  name: "TeaSpeTongzhi",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "通知公告", to: "" }
      ],
      tabs: [
        { name: "通知公告", to: "/teaspetongzhi" },
        { name: "留言管理", to: "/teaspeliuyan" }
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
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>
