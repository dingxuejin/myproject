<template>
  <div>
    <!-- 课程结果分析页面 -->
    <div id="container" style="width:600px; height:400px;">

    </div>
  </div>
</template>
<script>
export default {
  name: "TeaSpeKcjg",

  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("container"));
      // 绘制图表
      var app = {};
      var option = null;
      app.title = "环形图";

      option = {
        color: ["#119CFC", "#FEDE00", "#FF9701", "#F9003B", "#00D06C"],
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
            radius: ["60%", "70%"],
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
};
</script>
<style scoped>

</style>


