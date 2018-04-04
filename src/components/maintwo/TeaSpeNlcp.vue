<template>
  <div>
    <!-- 这是能力测评页面 -->
    <div class="inputTabTable">

      <div class="flex-between">
        <div class="chaxunCj flex-start">
          <div>
            <span>班级：</span>
            <el-select></el-select>
          </div>
          <div>
            <span>试卷名称：</span>
            <el-select></el-select>
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
              <th>编号</th>
              <th>试卷名称</th>
              <th colspan="2">状态</th>
              <th>开始时间</th>
              <th>结束时间</th>
              <th colspan="2">答案设置</th>
              <th colspan="2">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>能力测评试卷一</td>
              <td>
                <div class="flex-center">
                  <el-radio v-model="radio1" label="1">开放</el-radio>
                </div>

              </td>
              <td>
                <div class="flex-center">
                  <el-radio v-model="radio1" label="2">关闭</el-radio>
                </div>

              </td>
              <td>2017-12-07 14:06</td>
              <td>2017-12-07 14:06</td>
              <td>
                <div class="flex-center">
                  <el-radio v-model="radio2" label="1">开放</el-radio>

                </div>

              </td>
              <td>
                <div class="flex-center">
                  <el-radio v-model="radio2" label="2">关闭</el-radio>

                </div>

              </td>
              <td :class=" {'btn-lv':testProp=='开启考试','btn-hong':testProp=='结束','btn-hui':testProp=='已结束'}">
                <button @click="test()" style="width:90px;height:40px;">{{testProp}}</button>
              </td>
              <td class="btn-lv">
                <button @click="reset()" style="width:90px;height:40px;"> 清空作答</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
    <el-dialog :visible.sync="dialogVisible">
      <div class="tanchu2">
        <div>
          <img src="../../assets/tanchu/tishi.png" alt="">
        </div>
        <div>
          <span>{{tiShi}}</span>
        </div>
      </div>
      <div class="flex-center tanchu1 tanchu2">
        <div class="btn-lan">
          <button @click="toNext()">确定</button>
        </div>
        <div class="btn-hui">
          <button @click="dialogVisible=false">取消</button>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="isStartTest" width='450px'>
      <div class="tanchu3">
        <table>
          <tr>
            <td>
              <span>班级</span>
              <span>*</span>
            </td>
            <td class="tanchu4">
              <el-select></el-select>
            </td>
          </tr>
          <tr>
            <td>
              <span>开始时间</span>
              <span>*</span>
            </td>
            <td class="tanchu4">
              <div>
                <el-date-picker prefix-icon="el-icon-date" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>结束时间</span>
              <span>*</span>
            </td>
            <td class="tanchu4">
              <div>
                <el-date-picker prefix-icon="el-icon-date" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex-center tanchu5">
        <div class="btn-lan">
          <button style="width:105px; height:45px;">再次添加</button>
        </div>
        <div class="btn-lan">
          <button style="width:105px; height:45px;" @click=" startTest()">保存</button>
        </div>
        <div class="btn-hui">
          <button style="width:105px; height:45px;" @click="isStartTest=false">关闭</button>
        </div>
      </div>

    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "TeaSpeNlcp",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "能力测评设置", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspeting" },
        { name: "说一说", to: "/teaspeshuo" },
        { name: "能力测评设置", to: "/teaspenlcp" },
        { name: "成绩权重设置", to: "/teaspecjqz" }
      ],
      testProp: "开启考试",
      isStartTest: false,
      isReset: false,
      radio1: "1",
      radio2: "1",
      dialogVisible: false,
      tiShi: "你要开启本场考试吗？",
      html: ""
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
  },
  methods: {
    test() {
      let testProp = this.testProp;
      if (testProp === "开启考试") {
        this.isStartTest = true;
      } else if (testProp === "结束") {
        this.dialogVisible = true;
        this.tiShi = "你要结束本场考试吗？";
      } else if (testProp === "") {
        this.dialogVisible = true;
        this.tiShi = "你要结束本场考试吗？";
      } else {
        this.dialogVisible = true;
        this.tiShi = "本场考试已结束";
      }
    },
    reset() {
      this.dialogVisible = true;
      this.isReset = true;
      this.tiShi = "你要清空本场考试吗？";
    },
    startTest() {
      this.isStartTest = false;
      this.testProp = "结束";
    },
    toNext() {
      if (this.isReset) {
        this.testProp = "开启考试";
        this.isReset = false;
        this.dialogVisible = false;
      } else {
        this.dialogVisible = false;
        this.testProp = "已结束";
      }
    }
  }
};
</script>
<style scoped>
.tanchu1 {
  border-top: 1px solid #e3e3e3;
}
.tanchu2 {
  padding: 20px;
}
.tanchu1 button{
  width:105px;
  height: 40px;
}
.tanchu3 {
  padding: 20px 40px;
}
.tanchu3 tr > td:first-child {
  text-align: right;
}
.tanchu3 tr > td:first-child > span:last-child {
  color: #f00;
}
.tanchu3 > table {
  width: 100%;
  border: none;
}
.tanchu3 > table td {
  border: none;
  padding: 5px 10px;
}
.tanchu3 .tanchu4 {
  width: 230px;
}
.tanchu5 {
  border-top: 1px solid #e3e3e3;
  padding: 10px 0;
}
</style>
