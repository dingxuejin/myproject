<template>
  <div>
    <!-- 这是成绩权重设置页面 -->
    <div>
    </div>
    <div>
      <div class="flex-between">
        <div>
          <span>班级：</span>
          <el-select></el-select>
        </div>
        <div class="btn-lan">
          <button>保存</button>
          <button>课程重置</button>
          <button>全部课程重置</button>
        </div>
      </div>
      <div class="cjqz" style="marginTop:10px;">
        <table>
          <tr>
            <td rowspan="14" style="width:15%;"></td>
            <td rowspan="14">
              <span>听一听（单位：%）</span>
              <el-select></el-select>

            </td>
            <td rowspan="14">
              <span> 走进日本（单位：%）</span>
              <el-select></el-select>
            </td>
            <td rowspan="4">机场（单位：%）
              <el-select></el-select>
            </td>
            <td>单项名称</td>
            <td>分值占比(%)</td>
          </tr>
          <tr>

            <td class="nowrap">入国手续</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">安检与登记</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">免税店></td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td rowspan="2">机场（单位：%）
              <el-select></el-select>
            </td>
            <td class="nowrap">电车出行</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">新干线出行</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td rowspan="3">机场（单位：%）
              <el-select></el-select>
            </td>
            <td class="nowrap">预约</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">入住</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">退房</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td rowspan="3">机场（单位：%）
              <el-select></el-select>
            </td>
            <td class="nowrap">预约</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">用餐</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">结算</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td rowspan="2">机场（单位：%）
              <el-select></el-select>
            </td>
            <td class="nowrap">观光</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>
          <tr>

            <td class="nowrap">规划旅行</td>
            <td>
              <el-select></el-select>
            </td>
          </tr>

        </table>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeCjqz",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "成绩权重设置", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspeting" },
        { name: "说一说", to: "/teaspeshuo" },
        { name: "能力测评设置", to: "/teaspenlcp" },
        { name: "成绩权重设置", to: "/teaspecjqz" }
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
.cjqz td {
  padding: 5px 10px;
}
</style>


