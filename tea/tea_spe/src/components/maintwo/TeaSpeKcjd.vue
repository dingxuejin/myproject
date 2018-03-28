<template>
  <div>
    <!-- 课程进度查询页面 -->
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
            <td style="width:30%;">
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
              <button @click="toMingxi()">查看明细</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeKcjd",
  mounted(){
    // let val=document.querySelector('.el-progress-bar__innerText').innerHTML;
    // document.querySelectorAll('.el-progress-bar__innerText').innerHTML=val.replace('%',"");

    // console.log(val);
  },
  methods:{
    toMingxi(){
      this.$router.push({
        name:'TeaSpeKcjdMx'
      })
    }
  }
};
</script>

<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
</style>



