<template>
  <div>
    <!-- 成绩统计 -->
    <div class="flex-between">
      <div class="flex-start cjtj1">
        <div class="flex-start">
          <div>
            <span class="nowrap">班级:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start ">
          <div>
            <span class="nowrap">模块选择</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start ">
          <div>
            <span class="nowrap">内容选择:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
        <div class="flex-start ">
          <div>
            <span class="nowrap">级别:</span>
          </div>
          <div>
            <el-select></el-select>
          </div>
        </div>
      </div>
      <div class="btn-lan">
        <button>查询</button>
        <button>导出EXCEL</button>
      </div>
    </div>
    <div>
      <table class="table1">
        <thead>
          <tr>
            <th rowspan="2">编号</th>
            <th rowspan="2">班级总人数</th>
            <th rowspan="2">缺考人数</th>
            <th rowspan="2">最高得分率(%)</th>
            <th rowspan="2">最低得分率(%)</th>
            <th rowspan="2">平均得分率(%)</th>
            <th colspan="2">优秀(90%-100%)</th>
            <th colspan="2">良好(80%-90%)</th>
            <th colspan="2">中等(70%-80%)</th>
            <th colspan="2">及格(60%-70%)</th>
            <th colspan="2">不及格(60%以下)</th>
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
            <td>20</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex-between canvas1">
      <div id="container" style="width:1000px;height:400px;">

      </div>
      <div class="canvas2">
        <img src="../../assets/teaspe/teaspeqiehuan.png" alt="" @click=" qiehuan(isQiehuan)">
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "TeaTestChengjitongji",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "练考赛成绩统计", to: "" }
      ],
      tabs: [
        { name: "练考赛进度查询", to: "/teatestjindu" },
        { name: "练考赛成绩查询", to: "/teatestchengji" },
        { name: "练考赛成绩统计", to: "/teatestchengjitongji" },
        { name: "成绩结果分析", to: "/teatestchengjijieguo" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 2;
    this.$emit("getData", { tabs, breadcrumb, n });
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let el = document.getElementById("container");
      if (el) {
        this.isQiehuan = true;
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
            itemGap: 22,
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
            data: [
              "优秀(90%-100%得分率)",
              "良好(80%-90%得分率)",
              "中等(70%-80%得分率)",
              "及格(60%-70%得分率)",
              "不及格(60%得分率以下)"
            ]
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
                { value: 335, name: "优秀(90%-100%得分率)" },
                { value: 310, name: "良好(80%-90%得分率)" },
                { value: 234, name: "中等(70%-80%得分率)" },
                { value: 135, name: "及格(60%-70%得分率)" },
                { value: 1548, name: "不及格(60%得分率以下)" }
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
.cjtj1 > div {
  width: 15%;
}
.cjtj1 > div,
.cjtj1 > div > div {
  margin: 5px;
}
.canvas1 {
  height: 500px;
  border: 1px solid #cde7fc;
  margin: 30px auto;
}
.canvas2 {
  align-self: flex-start;
  margin: 10px;
}
</style>
