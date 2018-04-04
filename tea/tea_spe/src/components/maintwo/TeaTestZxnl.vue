<template>
  <div>
    <!-- 专线能力设置 -->
    <div class="flex-between">
      <div class="flex-start zxnl1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">模块选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">内容选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start">
          <div>
            <span class="nowrap">级别:</span>
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

            <th>NO</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>内容模块</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>1</td>
            <td>J-test</td>
            <td>A-D</td>
            <td>语法</td>
            <td class="btn-lv">
              <button @click="isShezhi=true">设置</button>
              <button @click="isChakan=true">查看</button>
            </td>
          </tr>
          <tr>

            <td>2</td>
            <td>能力考</td>
            <td>N1</td>
            <td>词汇</td>
            <td class="btn-lv">
              <button @click="isShezhi=true">设置</button>
              <button @click="isChakan=true">查看</button>
            </td>
          </tr>
          <tr>

            <td>3</td>
            <td>商务口语</td>
            <td></td>
            <td>就职</td>
            <td class="btn-lv">
              <button @click="isShezhi=true">设置</button>
              <button @click="isChakan=true">查看</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     <el-dialog width='700px' :visible.sync="isChakan" title="查看训练信息">
      <div style="padding:30px 80px;">
       
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>班级:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>试卷:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
    
    
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>试卷语言:</span>
          </el-col>
          <el-col :span="16" class="jingsai6">
            <span>中文</span>
          </el-col>
        </el-row>
      
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>是否开放答案解析:</span>
          </el-col>
          <el-col :span="16" class="jingsai6">
            <span>是</span>
          </el-col>
        </el-row>
      </div>
      <div class="btn-hui jingsai7">
        <button @click="isChakan=false">关闭</button>
      </div>
    </el-dialog>
     <el-dialog width='700px' :visible.sync="isShezhi" title='训练设置'>
      <div style="padding:30px 80px;">
     
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>班级</span>
            <span class="red">*</span>
            <span>:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
            <div class="jingsai8">
              <span class="red">此处内容不可为空</span>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>试卷:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
       
        <el-row type="flex" justify="start" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>试卷语言:</span>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>中文</el-radio>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>英文</el-radio>
          </el-col>
        </el-row>
       
        <el-row type="flex" justify="start" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>是否开放答案解析:</span>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>是</el-radio>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>否</el-radio>
          </el-col>
        </el-row>
      </div>
      <div class=" jingsai7 flex-center">
        <div class="btn-lan">
          <button>保存</button>
        </div>
        <div class="btn-hui">
          <button @click="isShezhi=false">关闭</button>
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
      isChakan:false,
      isShezhi:false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "专线能力设置", to: "" }
      ],
      tabs: [
        { name: "专线能力设置", to: "/teatestzxnl" },
        { name: "真题演练设置", to: "/teatestztyl" },
        { name: "竞赛设置", to: "/teatestjingsai" }
      ]
    };
  },
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
.zxnl1 > div {
  width: 20%;
}
.jingsai3 {
  width: 20%;
}
.jingsai4 {
  margin: 15px;
}
.jingsai5 {
  text-align: right;
}
.jingsai6 {
  text-align: left;
}
.jingsai7 {
  border-top: 1px solid #e7e7e7;
  padding: 20px;
}
.jingsai7 button {
  width: 105px;
  height: 40px;
}
.jingsai8 {
  font-size: 10px;
  text-align: left;
}
.red {
  color: #f00;
}
</style>



