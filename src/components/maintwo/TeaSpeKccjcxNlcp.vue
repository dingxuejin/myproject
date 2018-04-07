<template>
  <div id="kccj">
    <!-- 课程成绩查询页面 -->
    <div class="flex-between">

      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级名称</span>
          </div>
          <div>
            <el-select></el-select>
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
      <div class="btn-lan nowrap flex-end">
        <button>查询</button>
        <button>导出EXCEL</button>
      </div>

    </div>

    <div style="marginTop:10px;" class="table0">
      <table class="table1">
        <thead>
          <tr>
            <th rowspan="2"></th>
            <th rowspan="2">学生姓名</th>
            <th rowspan="2">学号</th>
            <th colspan="2">试卷一(100%)</th>
            <th colspan="2">试卷二(100%)</th>
            <th colspan="2">试卷三(100%)</th>
            <th rowspan="2">操作</th>
          </tr>
          <tr>
            <th>最高分</th>
            <th>作答次数</th>
            <th>最高分</th>
            <th>作答次数</th>
            <th>最高分</th>
            <th>作答次数</th>
          
          </tr>
        </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td class="btn-lv">
             <button @click="visible=true">查看明细</button>
           </td>
         </tr>
       </tbody>

      </table>
    </div>
    <my-dialog :visible.sync="visible" @changeVisible="visible=false" width='1200px'>
      <div class="flex-center dialog8">

        <tan-chu-kong-jian title="班级" content="class01"></tan-chu-kong-jian>
        <tan-chu-kong-jian title="姓名" content="宏江"></tan-chu-kong-jian>
        <tan-chu-kong-jian title="学号" content="001"></tan-chu-kong-jian>
        <tan-chu-kong-jian title="总分" content="100"></tan-chu-kong-jian>
        <div class="btn-lan dialog9">
          <button>最新成绩全部重置</button>
        </div>

      </div>
      <div class="dialog8">

        <table class="table1">
          <thead>
            <tr>
              <th>序号</th>
              <th>试卷名称</th>
              <th>试卷总分</th>
              <th>得分</th>
              <th>答题次数</th>
              <th>top1</th>
              <th>top2</th>
              <th>top3</th>
              <th>最新成绩</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
           <tr>
             <td>1</td>
             <td>试卷一(100%)</td>
             <td>100</td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
             <td>78</td>
             <td class="btn-lv">
               <button>更多</button>
             </td>
           </tr>
          </tbody>
        </table>
      </div>
<div class="btn-hui close">
  <button @click="visible=false">关闭</button>
</div>
    </my-dialog>

  </div>
</template>
<script>
import TanChuKongJian from "../public/tanchukongjian.vue";
import MyDialog from "../public/MyDialog.vue";
export default {
  name: "TeaSpeKccjcxNlcp",
  data() {
    return {
      visible: false,
      isMx: true,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "课程成绩查询", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspekccjcxting" },
        { name: "说一说", to: "/teaspekccjcxshuo" },
        { name: "能力测评", to: "/teaspekccjcxnlcp" },
        { name: "课程成绩", to: "/teaspekccjcxkccj" }
      ]
    };
  },
  methods:{
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
  },
  components: { TanChuKongJian, MyDialog }
};
</script>
<style scoped>
.table0 table td {
  min-width: 100px;
}
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
.rv1 {
  width: 600px;
}
.close{
  padding: 20px;
}
.close>button{
  width:105px;
  height: 40px;
}
.dialog8{
  padding: 20px;
}
.dialog9{
  padding: 30px;
}
</style>


