<template>
  <div>
    <div>
      <div class=" flex-start">
        <div>
          <span class="nowrap">学生姓名：</span>
        </div>
        <div class="ztyl2">
          <el-input></el-input>
        </div>
        <div>
          <span class="nowrap">学生学号：</span>
        </div>
        <div class="ztyl2">
          <el-input></el-input>
        </div>
      </div>
    </div>
    <div class="flex-between">
      <div>
        <div class="flex-start ">
          <div class="flex-start ">
            <div>
              <span class="nowrap">班级：</span>
            </div>
            <div class="ztyl3">
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start ">
            <div>
              <span class="nowrap">模块选择：</span>
            </div>
            <div class="ztyl3">
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start">
            <div>
              <span class="nowrap">级别：</span>
            </div>
            <div class="ztyl3">
              <el-select>
              </el-select>
            </div>
          </div>
          <div>
          </div>
        </div>

      </div>

      <div class="btn-lan nowrap">
        <button>查询</button>
      </div>
    </div>

    <div>
      <table class="table1">
        <thead>
          <tr>
            <th>NO</th>
            <th>学号</th>
            <th>姓名</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>试卷名称</th>
            <th>考试时间</th>
            <th>试卷时长</th>
            <th>状态</th>
            <th>操作</th>
            <th>语法题作答进度</th>
            <th>词汇题作答进度</th>
            <th>听力题作答进度</th>
            <th>问答题作答进度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>101</td>
            <td>stu01</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>试卷四</td>
            <td>2017/12/7 14:45</td>
            <td>120</td>
            <td>进行中</td>
            <td class="btn-lv">
              <button @click="isTanchu=true">回复作答</button>
              <button>查看作答</button>
            </td>
            <td>2/9</td>
            <td>2/9</td>
            <td>0/10</td>
            <td>4/13</td>

          </tr>
        </tbody>
      </table>
    </div>
    <el-dialog :visible.sync="isTanchu" :title="信息确认" width='600px'>
      <div class="tanchu2">
        <div>
          <img src="../../assets/tanchu/tishi.png" alt="">
        </div>
        <div>
          <span>你确定要将该学生的已提交状态修改为继续作答吗？</span>
        </div>
      </div>
      <div class="flex-center tanchu1 tanchu2">
        <div class="btn-lan">
          <button>确定</button>
        </div>
        <div class="btn-hui">
          <button @click="isTanchu=false">取消</button>
        </div>
      </div>
    </el-dialog>
  </div>

</template>
<script>
export default {
  name: "TeaTestChengjiZtyl",
  data() {
    return {
      isTanchu: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "练考赛进度与成绩", to: "" },
        { name: "练考赛成绩查询", to: "" },
        { name: "真题演练", to: "" }
      ],
      tabs: [
        { name: "专项能力测评", to: "/teatestchengjinlcp" },
        { name: "真题演练", to: "/teatestchengjiztyl" },
        { name: "竞赛平台", to: "/teatestchengjijingsai" }
      ]
    };
  },
  methods: {},
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.ztyl2 {
  width: 200px;
  margin: 5px 30px 5px 0;
}
.ztyl3 {
  width: 120px;
  margin: 5px 30px 5px 0;
}

.tanchu1 {
  border-top: 1px solid #e3e3e3;
}
.tanchu2 {
  padding: 20px;
}
.tanchu1 button {
  width: 105px;
  height: 40px;
}
</style>
