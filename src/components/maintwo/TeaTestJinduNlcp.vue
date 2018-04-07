<template>
  <div>
    <!-- 练考赛进度查询 -->
    <div class="flex-start zxnl1">
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
    <div class="flex-between">
      <div class="flex-start">
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">班级:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">模块选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">内容选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start zxnl1 zxnl2">
          <div>
            <span class="nowrap">快别:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="flex-end btn-lan">
        <button>查询</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th>编号</th>
            <th>学号</th>
            <th>姓名</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>内容模块</th>
            <th>状态</th>
            <th>操作</th>
            <th>答题进度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>101</td>
            <td>stu01</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>语法</td>
            <td>已提交</td>
            <td class="btn-lv">
              <button @click="isHfzd=true">恢复作答</button>
              <button>查看作答</button>
            </td>
            <td>70/100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>103</td>
            <td>stu01</td>
            <td>能力考</td>
            <td>N1</td>
            <td>语法</td>
            <td>已提交</td>
            <td class="btn-lv">
              <button @click="isHfzd=true">恢复作答</button>
              <button>查看作答</button>
            </td>
            <td>70/100</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <el-dialog :visible.sync="isHfzd">
        <div class="tanchu2">
          <div>
            <img src="../../assets/tanchu/tishi.png" alt="">
          </div>
          <div>
            <span>确定要将该学生的已提交状态修改为继续作答吗？</span>
          </div>
        </div>
        <div class="flex-center tanchu1 tanchu2">
          <div class="btn-lan">
            <button>确定</button>
          </div>
          <div class="btn-hui">
            <button @click="isHfzd=false">取消</button>
          </div>
        </div>

      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeaTestJingduNlcp",
  data() {
    return {
      isHfzd: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "练考赛进度与成绩", to: "" },
        { name: "练考赛进度查询", to: "" },
        { name: "专项能力测评练", to: "" }
      ],
      tabs: [
        { name: "专项能力测评", to: "/teatestjingdunlcp" },
        { name: "真题演练", to: "/teatestjingduztyl" },
        { name: "竞赛平台", to: "/teatestjingdujingsai" }
      ]
    };
  },
  computed: {},
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 0;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.zxnl1 > div,
.zxnl1 > div > div {
  margin: 5px;
}
.zxnl2 {
  width: 20%;
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