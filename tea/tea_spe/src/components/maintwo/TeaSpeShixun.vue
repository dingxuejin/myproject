<template>
  <div>
    <!-- 实训作业页面 -->
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
      <div class="btn-lan flex-start">
        <button>查询</button>
        <button>新增</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th></th>
            <th>班级</th>
            <th>作业内容</th>
            <th>发布时间</th>
            <th>文件名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <el-checkbox></el-checkbox>
            </td>

     
            <td>日语一班</td>
            <td>实训报告1</td>
            <td>
              <span>2017-05-12</span>
              <span>12:12:32</span>
            </td>
            <td>实训作业.xls</td>

            <td class="btn-lv">
              <button>发布</button>
              <button>取消发布</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeShixun"
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>
