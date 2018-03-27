<template>
  <div>
    <!-- 学生实训页面 -->
    <div class="flex-between">
      <div class="flex-start rv1">
        <div class="flex-start">
          <div>
            <span>班级</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span>学生姓名</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span>作业任务</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>

      </div>
      <div class="btn-lan">
        <button>查询</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>编号</th>
            <th>班级</th>
            <th>学生</th>
            <th>作业任务</th>
            <th>推送时间</th>
            <th>推送资料</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

            <td>1</td>
            <td>class02</td>
            <td>张三</td>
            <td>实训报告1</td>
            <td>
              <span>2017-05-12</span>
              <span>12:12:32</span>
            </td>
            <td>实训作业.xls</td>

            <td class="btn-lv">
              <button>下载</button>
              <button>取消推送</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeStushixun"
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>
