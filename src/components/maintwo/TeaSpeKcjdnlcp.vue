<template>
  <div>
    <!-- 课程进度查询页面 -->
    <div v-if="isToMx">

      <div class="flex-between">
        <div class="flex-start rv1">
          <div class="flex-start">
            <div>
              <span class="nowrap">班级</span>
            </div>
            <div>
              <el-input></el-input>
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
        <div class="btn-lan nowrap">
          <button>查询</button>
        </div>
      </div>
      <div style="marginTop:10px;">
        <table class='table1'>
          <thead>
            <tr>
              <th>编号</th>
              <th>学号</th>
              <th>学生姓名</th>
              <th>进度情况</th>
              <th>完成率</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2017020301</td>
              <td>sunhongjiang</td>
              <td style="width:40%;">
                <div class="flex-center">
                  <div style="margin:5px;">0</div>
                  <div style="width:80%;">
                    <el-progress :text-inside="true" :stroke-width="12" :percentage="60" status="success"></el-progress>
                  </div>
                  <div style="margin:5px;">100</div>
                </div>

              </td>
              <td>50</td>
              <td class="btn-lv">
                <button @click="isToMx=false">查看明细</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
    <div v-else>
      <div class="flex-between">
        <div class="flex-start rv1">
          <div class="flex-start">
            <div>
              <span class="nowrap">班级</span>
            </div>
            <div>
              <el-input></el-input>
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
          <div class="flex-start">
            <div>
              <span class="nowrap">总分</span>
            </div>
            <div style="max-width:80px;">
              <el-input></el-input>
            </div>
          </div>

        </div>
        <div class="btn-lan nowrap">
          <button @click=" isToMx=true">返回</button>
        </div>
      </div>
      <div style="marginTop:10px;">
        <table class='table1'>
          <thead>
            <tr>
              <th>场景</th>
              <th>关卡名称</th>
              <th>关卡任务</th>
              <th>场景分数</th>
              <th>关卡名称分数</th>
              <th>关卡任务分数</th>
              <th>答题次数</th>
              <th>Top1</th>
              <th>Top2</th>
              <th>Top3</th>
              <th>最新成绩</th>
              <th>作答时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="8">机场(20%)</td>
              <td rowspan="3">入国手续(40%)</td>
              <td>入国检查(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td>关税检查(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td>兑换外币(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td rowspan="3">安检与登机(40%)</td>
              <td>登换机牌(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td>过安检(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td>机内广播(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td rowspan="2">免税店(40%)</td>
              <td>购物(60%)</td>
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
                <button>查看明细</button>
              </td>
            </tr>
            <tr>

              <td>文化差异(60%)</td>
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
                <button>查看明细</button>
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
  name: "TeaSpeKcjdNlcp",
  data() {
    return {
      isToMx: true,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课程进度查询", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspekcjdting" },
        { name: "说一说", to: "/teaspekcjdshuo" },
        { name: "能力测评", to: "/teaspekcjdnlcp" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
  },
  methods: {}
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>



