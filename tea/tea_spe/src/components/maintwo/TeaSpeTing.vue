<template>
  <div>
    <!-- 这是听一听页面 -->
    <div class="flex-between">
      <div class="flex-start">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级名称</span>
          </div>
          <div class="ting1">
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start ting1">
          <div>
            <span class="nowrap">内容模块</span>
          </div>
          <div class="ting1">
            <el-select></el-select>
          </div>
        </div>
      </div>

      <div class="btn-lan">
        <button>保存</button>
        <button>课程重置</button>
        <button>全部课程重置</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th>序号</th>
            <th>关卡模块</th>
            <th>场景模块</th>
            <th colspan="2">关卡名称</th>
            <th colspan="2">快卡启用</th>
            <th colspan="2">答案设置</th>
            <th>分值设定(单位:%)</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th class="btn-lv">
              <button>全选择</button>
            </th>
            <th class="btn-lv">
              <button>全取消</button>
            </th>
            <th class="btn-lv">
              <button>全开放</button>
            </th>
            <th class="btn-lv">
              <button>全关闭</button>
            </th>
            <th class="btn-lv">
              <button>全开放</button>
            </th>
            <th class="btn-lv">
              <button>全关闭</button>
            </th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td rowspan="8">影子跟读</td>
            <td rowspan="3">机场</td>
            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>入国检查</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>

            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>安检与登机</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>

            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>免税店</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>

            <td rowspan="2">交通</td>
            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>电车出行</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>

            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>新干线出行</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>5</td>

            <td rowspan="3">酒店</td>
            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>预约</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>6</td>

            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>入住</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
          <tr>
            <td>7</td>

            <td colspan="2">
              <div>
                <el-checkbox></el-checkbox>
                <span>退房</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>开放</span>
              </div>
            </td>
            <td>
              <div>
                <el-radio></el-radio>
                <span>关闭</span>
              </div>
            </td>
            <td>
              <div>
                <el-select></el-select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeTing",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "听一听", to: "" }
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
    let n = 0;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.ting1 {
  margin: 0 10px;
}
</style>


