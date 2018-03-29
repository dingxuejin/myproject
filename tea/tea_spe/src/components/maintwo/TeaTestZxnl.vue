<template>
  <div>
      专线能力设置
  </div>
</template>
<script>
export default {
  name: "TeaTestZxnl",
  data() {
    return {
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
