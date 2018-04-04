<template>
  <div>
    <!-- 卷组管理 -->
    <div class="flex-between">
      <div class="flex-start zxnl1">
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
            <span class="nowrap">试卷名称:</span>
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
        <button @click="isShow=true">组卷</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th>NO</th>
            <th>模块名称</th>
            <th>级别</th>
            <th>试卷名称</th>
            <th>试卷信息</th>
            <th>分数</th>
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
            <td>词汇（20）、句式（12）、听力题（18）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>能力考</td>
            <td>N1</td>
            <td>试卷一</td>
            <td>词汇（20）、句式（20）、听力题（18）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>商务礼仪</td>
            <td>2级</td>
            <td>试卷一</td>
            <td>词汇（20）、句式（52）、听力题（30）、阅读题（10）</td>
            <td>100</td>
            <td>已发布</td>
            <td class="btn-lv">
              <button>预览</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-dialog width="1050px" title="组卷" :visible.sync="isShow">
      <div class="zujuan1">
        <el-row gutter="20" class="zujuan2" type="flex" align="middle">
          <el-col :span="3" class="zujuan3">
            <span>试卷名称</span>
            <span class="red">*</span>
            <span>:</span>
          </el-col>
          <el-col :span="8">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row gutter="20" class="zujuan2">
          <el-col :span="3" class="zujuan3">
            <span>题目难度</span>
            <span>:</span>
          </el-col>
          <el-col :span="3">
            <el-checkbox>简单</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>中等</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>困难</el-checkbox>
          </el-col>
        </el-row>
        <el-row gutter="20" class="zujuan2">
          <el-col :span="3" class="zujuan3">
            <span>知识点</span>
            <span>:</span>
          </el-col>
          <el-col :span="3">
            <el-checkbox>J-TEST</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>JLPT</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>商务口语</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>商务写作</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>外贸实务</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>商务礼仪</el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-checkbox>通关士</el-checkbox>
          </el-col>
        </el-row>
        <el-row gutter="20" class="zujuan2">
          <el-col :span="3" class="zujuan3">
            <span>题目类型</span>
            <span>:</span>
          </el-col>
          <el-col :span="5">
            <el-checkbox>单选题</el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-checkbox>多选题</el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-checkbox>判断题</el-checkbox>
          </el-col>

        </el-row>
        <el-row gutter="20" class="zujuan2">
          <el-col :span="5" offset='3'>
            <el-checkbox>填空题</el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-checkbox>连线题</el-checkbox>
          </el-col>
          <el-col :span="5">
            <el-checkbox>翻译题</el-checkbox>
          </el-col>

        </el-row>
        <el-row gutter="20" class="zujuan2" type="flex" align="middle">
          <el-col :span="3">
            <span>试卷类型:</span>
          </el-col>
          <el-col :span="8">
            <el-select style="width:100%;"></el-select>
          </el-col>

        </el-row>
        <el-row gutter="20" class="zujuan2" type="flex" align="middle">
          <el-col :span="3">
            <span>是否过滤已在组件中的题目:</span>
          </el-col>
          <el-col :span="2">
            <el-radio>是</el-radio>
          </el-col>
          <el-col :span="2">
            <el-radio>否</el-radio>
          </el-col>

        </el-row>
        <el-row gutter="20" class="zujuan2" type="flex" align="middle">
          <el-col :span="10" :offset="3" class="zujuan4">
            <span>当前符合条件的题目共</span>
            <span class="red">【0】</span>
            <span>题</span>
          </el-col>
        </el-row>
      </div>
      <div class=" jingsai7 flex-center">
        <div class="btn-lan">
          <button>保存</button>
        </div>
        <div class="btn-hui">
          <button @click="isShow=false">关闭</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "TeaTestJuanzu",
  data() {
    return {
      isShow: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "卷组管理", to: "" }
      ]
    };
  },
  mounted() {
    this.$emit("getData", this.breadcrumb);
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
.red {
  color: red;
}
.zujuan1 {
  padding: 20px 50px;
}
.zujuan2 {
  margin: 20px;
}
.zujuan3 {
  text-align: right;
}
.zujuan4 {
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
</style>