<template>
  <div>
    <div class="flex-start">
      <div>试卷名称：</div>
      <div class="ztyl3">
        <el-input></el-input>
      </div>
    </div>
    <div class="flex-between">
      <div class="flex-start ztyl1">
        <div>
          <span class="nowrap">类型:</span>
        </div>
        <div class="ztyl2">
          <el-select></el-select>
        </div>
        <div>
          <span class="nowrap">班级:</span>
        </div>
        <div class="ztyl2">
          <el-select></el-select>
        </div>

        <div>
          <span class="nowrap">模块选择:</span>
        </div>
        <div class="ztyl2">
          <el-select></el-select>
        </div>
        <div>
          <span class="nowrap">级别:</span>
        </div>
        <div class="ztyl2">
          <el-select></el-select>
        </div>
        <div>
          <span class="nowrap">类型:</span>
        </div>
        <div class="ztyl2">
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
            <th>模块名称</th>
            <th>级别</th>
            <th>试卷名称</th>
            <th>班级</th>
            <th>开考时间</th>
            <th>考试时间(分钟)</th>
            <th>类型</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>试卷一</td>
            <td>class01</td>
            <td>2017/02/22 19:14:34</td>
            <td>120</td>
            <td>考试</td>
            <td>开放</td>
            <td class="btn-lv">
              <button @click="isShezhi=true">考试设置</button>
              <button @click="tanchuTitle='关闭';isTanchu=true">关闭</button>
              <button @click="tanchuTitle='清空作答';isTanchu=true">清空作答</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>能力考</td>
            <td>N1</td>
            <td>试卷一</td>
            <td>class01</td>
            <td>2017/02/22 19:14:34</td>
            <td>120</td>
            <td>考试</td>
            <td>开放</td>
            <td class="btn-lv">
              <button @click="isShezhi=true">考试设置</button>
              <button @click="tanchuTitle='关闭';isTanchu=true">关闭</button>
              <button @click="tanchuTitle='清空作答';isTanchu=true">清空作答</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-dialog :title='修改考试设置' :visible.sync="isShezhi" width='900px'>
      <div class="kssz1">
        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">类型:</el-col>
          <el-col :span="3">
            <el-radio>练习</el-radio>
          </el-col>
          <el-col :span="3">
            <el-radio>考试</el-radio>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">考试时间：</el-col>
          <el-col :span="12">
            <el-input></el-input>
          </el-col>

        </el-row>
        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">考试时长(分钟)：</el-col>
          <el-col :span="12">
            <el-input></el-input>
          </el-col>

        </el-row>

        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">使用试卷：</el-col>
          <el-col :span="12">
            <div class="flex-between" style="border:1px solid #D9D9D9; width:100%;border-radius:5px;">
              <input v-model="daoruVal" placeholder="未选择任何文件" readonly='true' type="text" style="height:90%;margin:0 5px;width:400px;border:none;">
              <el-upload action="https://" :on-change="daoruChange" :auto-upload="false">
                <el-button slot="trigger" type="info">试卷预览</el-button>

              </el-upload>
            </div>
          </el-col>

        </el-row>
        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">分配班级：</el-col>
          <el-col :span="12">
            <el-input></el-input>
          </el-col>

        </el-row>
        <el-row type="flex" align="middle" justify="start" :gutter="20" class="kssz3">
          <el-col :span="4" :offset="4">开放状态：</el-col>
          <el-col :span="3">
            <el-radio>中文</el-radio>
          </el-col>
          <el-col :span="3">
            <el-radio>英文</el-radio>
          </el-col>

        </el-row>
      </div>
      <div class="btn-lan kssz2" >
        <button>保存</button>
        <button @click="isShezhi=false">关闭</button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="isTanchu" :title="tanchuTitle" width="700px">
      <div class="tanchu2">
        <div>
          <img src="../../assets/tanchu/tishi.png" alt="">
        </div>
        <div>
          <span>{{'你确定要'+ tanchuTitle+'本场竞赛吗？'}}</span>
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
  name: "TeaTestZxnl",
  data() {
    return {
      daoruVal: "",
      isTanchu: false,
      isShezhi: false,
      tanchuTitle: "",
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "真题演练设置", to: "" }
      ],
      tabs: [
        { name: "专线能力设置", to: "/teatestzxnl" },
        { name: "真题演练设置", to: "/teatestztyl" },
        { name: "竞赛设置", to: "/teatestjingsai" }
      ]
    };
  },
  methods: {
    daoruChange(file, fileList) {
      this.daoruVal = file.name;
    }
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.ztyl1 > div {
  margin: 5px;
}
.ztyl2 {
  width: 120px;
}
.ztyl3 {
  width: 250px;
  margin: 10px;
}
.tanchu1 {
  border-top: 1px solid #e3e3e3;
}
.tanchu2 {
  padding: 20px;
}
.kssz1 {
  margin: 0 auto;
}
.kssz2 {
  padding:20px;
  border-top:1px solid #E7E6E3;
}
.kssz3{
  padding:10px;
}
</style>
