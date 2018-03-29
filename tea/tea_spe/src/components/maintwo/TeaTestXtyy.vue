<template>
  <div>
      这是系统语言设置页面
  </div>
</template>
<script>
export default {
  name: "TeaTestXtyy",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teaspe" },
        { name: "系统语言设置", to: "" }
      ],
      tabs: [
        { name: "互动信息管理", to: "/teatesthdxx" },
   
        { name: "系统语言设置", to: "/teatestxtyy" }
      ]
    };
  },
  mounted() {
    let tabs = this.tabs;
    let breadcrumb = this.breadcrumb;
    let n = 1;
    this.$emit("getData", { tabs, breadcrumb, n });
  }
};
</script>