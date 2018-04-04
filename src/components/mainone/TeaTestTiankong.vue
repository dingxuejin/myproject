<template>
  <div>
      填空题页面
  </div>
</template>
<script>
export default {
  name: "TeaTestTiankong",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "填空题", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>