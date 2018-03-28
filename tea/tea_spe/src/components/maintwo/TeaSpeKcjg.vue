<template>
  <div>
    <!-- 课程结果分析页面 -->
    <div>
      <div class="flex-between">
        <div class="flex-start rv1">
          <div class="flex-start">
            <div>
              <span class="nowrap">班级名称</span>
            </div>
            <div>
              <el-select v-model="classVal">
                <el-option v-for='item in option' :key="item" :label="item" :value="item"></el-option>
              </el-select>

            </div>
          </div>
        </div>
        <div class="btn-lan nowrap">
          <button>导出EXCEL</button>
        </div>
      </div>
      <div style="marginTop:10px;">
        <table class="table1">
          <thead>
            <tr>
              <th rowspan="2">序号</th>
              <th rowspan="2">场景</th>
              <th rowspan="2">关卡名称</th>
              <th rowspan="2">关卡任务</th>
              <th rowspan="2">最高分</th>
              <th rowspan="2">最低分</th>
              <th rowspan="2">平均分</th>
              <th colspan="2">优秀(90-100)</th>
              <th colspan="2">良好(80-89)</th>
              <th colspan="2">中等(70-79)</th>
              <th colspan="2">及格(60-69)</th>
              <th colspan="2">不及格(60以下)</th>
              <th rowspan="2">操作</th>
            </tr>
            <tr>
              <th>人数</th>
              <th>占比(%)</th>
              <th>人数</th>
              <th>占比(%)</th>
              <th>人数</th>
              <th>占比(%)</th>
              <th>人数</th>
              <th>占比(%)</th>
              <th>人数</th>
              <th>占比(%)</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td rowspan="8">机场</td>
              <td rowspan="3">入国检查</td>
              <td>入国检查</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>2</td>

              <td>关税检查</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>3</td>

              <td>外币兑换</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>4</td>

              <td rowspan="3">安检与登记</td>
              <td>登记机牌</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>5</td>

              <td>过安检</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>6</td>

              <td>机内广播</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>7</td>

              <td rowspan="3">免税店</td>
              <td>购物</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
            <tr>
              <td>8</td>

              <td>文化差异</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td class="btn-lv">
                <button @click="isDialog()">查看报表</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width='960px'>
      <div class="canvas1 flex-between">
        <div id="container" style="width:800px;height:400px;">
        </div>
        <div class="canvas2">
          <img src="../../assets/teaspe/teaspeqiehuan.png" alt="">
        </div>
      </div>

    </el-dialog>

  </div>
</template>
<script>
export default {
  name: "TeaSpeKcjg",
  data() {
    return {
      dialogVisible: false,
      isEl: null,
      classVal: "",
      option: [1, 2, 3]
    };
  },
  mounted() {},
  watch: {},
  methods: {
    isDialog() {
      let that = this;
      this.dialogVisible = true;
      setTimeout(function() {
        let isEl = document.getElementById("container");
        if (isEl) {
          that.isEl = isEl;
          that.drawLine();
        } else {
          that.isDialog();
        }
      }, 300);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let el = this.isEl;
      if (el) {
        let myChart = this.$echarts.init(el);
        // 绘制图表
        var app = {};
        var option = null;
        app.title = "环形图";

        option = {
          color: [
            "#119CFC",
            "#FEDE00",
            "#FF9701",
            "#F9003B",
            "#00D06C",
            "#FFE680"
          ],
          title: {
            padding: [10, 30],
            left: "center",
            top: "center",

            borderRadius: 5,
            text: "得分率",
            textStyle: {
              color: "#fff",
              fontSize: "30"
            },
            backgroundColor: "#06D26E"
          },
          tooltip: {
            padding: [5, 15],
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} <br/>({d}%)"
          },
          legend: {
            borderRadius: 5,
            itemWidth: 18,
            itemHeight: 18,
            textStyle: {
              fontSize: 18
            },
            orient: "left",
            left: "right",
            top: "center",
            x: "right",
            data: ["优秀", "差", "很差", "太差", "非常差"]
          },
          series: [
            {
              name: "孙洪江班",
              type: "pie",
              radius: ["62%", "70%"],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: "center"
                },
                emphasis: {
                  // show: true,
                  textStyle: {
                    fontSize: "50",
                    fontWeight: "bold"
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: "优秀" },
                { value: 310, name: "差" },
                { value: 234, name: "很差" },
                { value: 135, name: "太差" },
                { value: 1548, name: "非常差" }
              ]
            }
          ]
        };
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    }
  }
};
</script>
<style scoped>
.rv1 > div,
.rv1 > div > div {
  margin: 0 5px;
}
.canvas1{
  width:900px;

  border:1px solid #E5EDF3;
  margin: 30px auto;
}
.canvas2{
 align-self: flex-start;
 margin: 10px;

}
</style>


