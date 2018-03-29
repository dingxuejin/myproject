<template>
  <div>
    练考赛成绩查询
  </div>
</template>
<script>
export default {
  name: "TeaSpeKcjd",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "练考赛成绩查询", to: "" }
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
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  },
  methods: {
    toMingxi() {
      this.$router.push({
        name: "TeaSpeKcjdMx"
      });
    }
  }
};
</script>
