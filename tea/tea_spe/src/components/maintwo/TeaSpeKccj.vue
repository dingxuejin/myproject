<template>
  <div>
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
      <div class="btn-lan nowrap">
        <button>查询</button>
        <button>重新计算</button>
        <button>保存</button>
        <button>开放成绩端成绩</button>
        <button>导出EXCEL</button>
        <button>查看报表</button>
      </div>
    </div>
    <div style="marginTop:10px;" class="table0">
      <table class="table1">
        <thead>
          <tr>
            <th rowspan="2"></th>
            <th rowspan="2">学生姓名</th>
            <th rowspan="2">学号</th>
            <th rowspan="2">总分</th>
            <th colspan="3">课业成绩</th>
            <th colspan="2">附加成绩(10%)</th>
            <th rowspan="2">学生端成绩</th>
          </tr>
          <tr>
            <th>听一听(60%)</th>
            <th>说一说(40%)</th>
            <th>能力测评(0%)</th>
            <th>课堂表现(30%)</th>
            <th>作业(70%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>张珊</td>
            <td>123456</td>
            <td>100</td>
            <td>50</td>
            <td>30</td>
            <td>5</td>
            <td>
             5

            </td>
            <td>
              10

            </td>
            <td class="btn-lv">
              <button>
                关闭
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeKccj"
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
</style>


