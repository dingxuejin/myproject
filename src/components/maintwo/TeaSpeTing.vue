<template>
  <div>
    <!-- 这是听一听页面 -->
    <div class="flex-between">
      <div class="flex-start">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级名称</span>
          </div>
          <div class="ting1">
            <el-select v-model="valClass" @change="getList()">
              <el-option v-for="item in classList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- <div class="flex-start ting1">
          <div>
            <span class="nowrap">内容模块</span>
          </div>
          <div class="ting1">
            <el-select></el-select>
          </div>
        </div> -->
      </div>

      <div class="btn-lan nowrap">
        <button @click="setTableData()">保存</button>
        <button>课程重置</button>
        <button>全部课程重置</button>
      </div>
    </div>
    <div style="marginTop:10px;">
      <table class="table1">
        <thead>
          <tr>
            <th>关卡模块</th>
            <th>场景模块</th>
            <th colspan="2">关卡名称</th>
            <th colspan="2">快卡启用</th>
            <th colspan="2">答案设置</th>
            <th>分值设定(单位:%)</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th class="btn-lv">
              <button @click="setAllVal(true)">全选择</button>
            </th>
            <th class="btn-lv">
              <button @click="setAllVal(false)">全取消</button>
            </th>
            <th class="btn-lv">
              <button @click="setAllTaskOpened('1')">全开放</button>
            </th>
            <th class="btn-lv">
              <button @click="setAllTaskOpened('0')">全关闭</button>
            </th>
            <th class="btn-lv">
              <button @click="setAllAnswerOpened('1')">全开放</button>
            </th>
            <th class="btn-lv">
              <button @click="setAllAnswerOpened('0')">全关闭</button>
            </th>
            <th></th>
          </tr>

        </thead>
        <tbody v-if="isTableData">
          <tr>
            <td colspan="9" class="tishi">
              请选择正确的班级后查询
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="(item,index) in tableData[2]" :key="index">
            <td :rowspan="tableData[1][index].count" v-if="tableData[1]&&tableData[1][index].count!==0">{{tableData[1][index].menu.menuName}}</td>
            <td :rowspan="tableData[2][index].count" v-if="tableData[2]&&tableData[2][index].count!==0">{{tableData[2][index].menu.menuName}}</td>
            <td :rowspan="tableData[3][index].count" v-if="tableData[3]&&tableData[3][index].count!==0">{{tableData[3][index].menu.menuName}}</td>
            <td colspan="2" v-if="tableData[4]&&tableData[4][index].count!==0">
              <div style="text-align:left;margin:0 auto;max-width:120px;">
                <el-checkbox v-model="tableData[4][index].value">
                  {{tableData[4][index].menu.menuName}}
                </el-checkbox>
              </div>
            </td>
            <td v-if="tableData[4]&&tableData[4][index].count!==0">
              <div>
                <el-radio v-model="tableData[4][index].set.taskOpened" label="1">开放</el-radio>
              </div>
            </td>
            <td v-if="tableData[4]&&tableData[4][index].count!==0">
              <div>
                <el-radio v-model="tableData[4][index].set.taskOpened" label="0">关闭</el-radio>
              </div>
            </td>
            <td v-if="tableData[4]&&tableData[4][index].count!==0">
              <div>
                <el-radio v-model="tableData[4][index].set.answerOpened" label="1">开放</el-radio>

              </div>
            </td>
            <td v-if="tableData[4]&&tableData[4][index].count!==0">
              <div>
                <el-radio v-model="tableData[4][index].set.answerOpened" label="0">关闭</el-radio>

              </div>
            </td>
            <td v-if="tableData[4]&&tableData[4][index].count!==0">
              <div>
                <el-select v-model="tableData[4][index].setDetail.resultRatio">
                  <el-option v-for="item in resultRatio" :key="item.value" :label="item.label" :value="item">
                  </el-option>
                </el-select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import getData from "../public/setTableData";
export default {
  name: "TeaSpeTing",
  data() {
    return {
      resultRatio: [
        { value: 0, label: "0%" },
        { value: 5, label: "5%" },
        { value: 10, label: "10%" },
        { value: 15, label: "15%" },
        { value: 20, label: "20%" },
        { value: 25, label: "25%" },
        { value: 30, label: "30%" },
        { value: 35, label: "35%" },
        { value: 40, label: "40%" },
        { value: 45, label: "45%" },
        { value: 50, label: "50%" },
        { value: 55, label: "55%" },
        { value: 60, label: "60%" },
        { value: 65, label: "65%" },
        { value: 70, label: "70%" },
        { value: 75, label: "75%" },
        { value: 80, label: "80%" },
        { value: 85, label: "85%" },
        { value: 90, label: "90%" },
        { value: 95, label: "95%" },
        { value: 100, label: "100%" }
      ],
      valClass: "请选择班级",
      tableData: [],
      classList: [{ value: null, label: "加载失败" }],
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "口语平台", to: "/teaspe" },
        { name: "听一听", to: "" }
      ],
      tabs: [
        { name: "听一听", to: "/teaspeting" },
        { name: "说一说", to: "/teaspeshuo" },
        { name: "能力测评设置", to: "/teaspenlcp" },
        { name: "成绩权重设置", to: "/teaspecjqz" }
      ]
    };
  },
  computed: {
    isTableData() {
      if (this.tableData) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    setAllAnswerOpened( str) {
      let tableData = this.tableData;
      tableData[4].map((val, i, arr) => {
        arr[i].set.answerOpened = str;
      });
    },
    setAllTaskOpened( str) {
      let tableData = this.tableData;
      tableData[4].map((val, i, arr) => {
        arr[i].set.taskOpened = str;
      });
    },
    setAllVal( str) {
      let tableData = this.tableData;
      tableData[4].map((val, i, arr) => {
        arr[i].value = str;
      });
    },
    setTableData() {
      let tableData = this.tableData;
      let settableData = tableData[4].map((val) => {
        if (val.value === true) {
          let setData = {
            xueid: val.menu.xueid,
            taskOpened: val.set.taskOpened,
            answerOpened: val.set.answerOpened
          };
          return setData;
        }
      });
      let resultRatio = tableData[4].map((val) => {
        if (val.value === true) {
          let setData = {
            xueid:val.menu.xueid,
            resultRatio: val.setDetail.resultRatio
          };
          return setData;
        }
      });
      settableData = settableData.filter(val => {
        return val !== undefined;
      });
      resultRatio = resultRatio.filter(val => {
        return val !== undefined;
      });
      console.log(settableData);
      console.log(resultRatio);
    },
    getList() {
      this.$axios
        .get("/busjapspe/tea/set/set/setList", {
          // 听一听menuNo.2
          menuNo: 2,
          teaId: 1,
          classId: this.valClass
        })
        .then(res => {
          let data = getData(res.data.results);

          data[4].map(val => {
            val.value = false;
            val.set = JSON.parse(val.set);
            val.setDetail = JSON.parse(val.setDetail);
          });
          this.tableData = data;
          console.log(data);
        });
    }
  },
  created() {
    this.$axios.get("busjapsys/tea/classes/class/classList").then(res => {
      let classList = res.data.results.classList;
      classList = classList.map((val, i) => {
        let itemList = {
          value: val.xueid,
          label: val.className
        };
        return itemList;
      });
      this.classList = classList;
    });
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
.ting1 {
  margin: 0 10px;
}
.tishi {
  height: 300px;
  font-size: 30px;
  font-weight: 600;
}
</style>


