<template>
  <div>
    <!-- 这是互动信息管理页面 -->
    <div class="flex-between">
      <div class="flex-start hdxx1">
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
            <span class="nowrap">启用标识:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="flex-end btn-lan">
        <button>查询</button>
        <button>新增</button>
        <button>删除</button>
        <button>启用</button>
        <button>禁用</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>编号</th>
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
            <td>1</td>
            <td>调课</td>
            <td>周三日语课调课</td>
            <td>启用</td>
            <td class="btn-lv">
              <button>修改</button>
              <button>查看</button>
            </td>
          </tr>
          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>
            <td>2</td>
            <td>调课</td>
            <td>周三日语课调课</td>
            <td>启用</td>
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
  name: "TeaTestHdxx",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "互动信息管理", to: "" }
      ]
    };
  },
  mounted() {
    this.$emit("getData",this.breadcrumb );
  }
};
</script>
<style scoped>
.hdxx1>div,.hdxx1>div>div{
  margin: 5px;
}
.hdxx1>div{
  width:30%;
}
</style>
