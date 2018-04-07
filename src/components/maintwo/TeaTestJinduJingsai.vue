<template>
  <div>
    <div>
      <div class="jingsai1 flex-center">
        <div>
          <span class="nowrap">竞赛时间:</span>
        </div>
        <div>
          <el-input></el-input>
        </div>
        <div>
          <span>-</span>
        </div>
        <div>
          <el-input></el-input>
        </div>

        <div>
          <span class="nowrap">竞赛名称:</span>
        </div>
        <div>
          <el-input></el-input>
        </div>
      </div>
    </div>
    <div class="flex-between">
      <div>
        <div class="flex-start jingsai2">
          <div class="flex-start jingsai3">
            <div>
              <span class="nowrap">班级:</span>
            </div>
            <div>
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start jingsai3">
            <div>
              <span class="nowrap">模块选择:</span>
            </div>
            <div>
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start jingsai3">
            <div>
              <span class="nowrap">内容选择:</span>
            </div>
            <div>
              <el-select>

              </el-select>
            </div>
          </div>
          <div class="flex-start jingsai3">
            <div>
              <span class="nowrap">级别:</span>
            </div>
            <div>
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
        <button>开始竞赛</button>
      </div>
    </div>

    <table class="table1" style="marginTop:10px;">
      <thead>
        <tr>
          <th>编号</th>
          <th>模块名称</th>
          <th>级别</th>
          <th>试卷名称</th>
          <th>竞赛时间</th>
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
          <td>2017/02/22 19:14:34</td>
          <td>进行中</td>
          <td class="btn-lv nowrap">
            <button @click="isShezhi=true">设置</button>
            <button @click="tanchu('暂停')">暂停</button>
            <button @click="isYanchang=true">延长时间</button>
            <button @click="tanchu('结束')">结束</button>
            <button @click="isChakan=true">查看</button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>能力考</td>
          <td>N1</td>
          <td>试卷三</td>
          <td>2017/02/22 19:14:34</td>
          <td>已结束</td>
          <td class="btn-lv nowrap">
            <button @click="isChakan=true">查看</button>
            <button @click="isShezhi=true">设置</button>
            <button @click="tanchu('删除')">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <el-dialog width='700px' :visible.sync="isChakan" title="查看竞赛信息">
      <div style="padding:30px 80px;">
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>模块名称:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
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
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>开始时间:</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>竞赛时长(分钟):</span>
          </el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>试卷类型:</span>
          </el-col>
          <el-col :span="16" class="jingsai6">
            <span>中文</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>是否开放分数:</span>
          </el-col>
          <el-col :span="16" class="jingsai6">
            <span>是</span>
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
    <el-dialog width='700px' :visible.sync="isShezhi" title='竞赛设置'>
      <div style="padding:30px 80px;">
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>模块名称:</span>
          </el-col>
          <el-col :span="16">
            <el-select style="width:100%;"></el-select>
          </el-col>
        </el-row>
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
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>开始时间</span>
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
            <span>竞赛时长(分钟)</span>
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
        <el-row type="flex" justify="start" align="middle" class="jingsai4" :gutter="30">
          <el-col :span="8" class="jingsai5">
            <span>试卷类型:</span>
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
            <span>是否开放分数:</span>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>是</el-radio>
          </el-col>
          <el-col :span="4" class="jingsai6">
            <el-radio>否</el-radio>
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
    <el-dialog width='700px' :visible.sync="isYanchang" title="延长竞赛时间">
      <div style="padding:30px 80px;">
        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>模块名称:</span>
          </el-col>
          <el-col :span="16">
            <el-select style="width:100%;"></el-select>
          </el-col>
        </el-row>
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

        <el-row type="flex" justify="center" align="middle" class="jingsai4" :gutter="20">
          <el-col :span="8" class="jingsai5">
            <span>竞赛时长(分钟)</span>
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

      </div>
      <div class=" jingsai7 flex-center">
        <div class="btn-lan">
          <button>保存</button>
        </div>
        <div class="btn-hui">
          <button @click="isYanchang=false">关闭</button>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="isTanchu" :title="tanchuTitle">
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
  name: "TeaTestJinduJingsai",
  data() {
    return {
      tanchuTitle: "",
      isTanchu: false,
      isZanting: false,
      isShanchu: false,
      isJieshu: false,
      isYanchang: false,
      isChakan: false,
      isShezhi: false,
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "练考赛进度与成绩", to: "" },
        { name: "练考赛进度查询", to: "" },
        { name: "竞赛设置", to: "" }
      ],
      tabs: [
        { name: "专项能力测评", to: "/teatestjingdunlcp" },
        { name: "真题演练", to: "/teatestjingduztyl" },
        { name: "竞赛平台", to: "/teatestjingdujingsai" }
      ]
    };
  },
  methods: {
    tanchu(res) {
      console.log(111);
      this.isTanchu = true;
      if (res === "结束") {
        this.tanchuTitle = "结束";
      } else if (res === "删除") {
        this.tanchuTitle = "删除";
      } else {
        this.tanchuTitle = "暂停";
      }
    }
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>
<style scoped>
.jingsai1 {
  width: 50%;
}
.jingsai1 > div {
  margin: 5px;
}
.jingsai2 > div,
.jingsai2 > div > div {
  margin: 5px;
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
