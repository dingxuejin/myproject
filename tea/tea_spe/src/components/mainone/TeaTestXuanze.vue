<template>
  <div>
    选择题页面
  </div>
</template>
<script>
export default {
  name: "TeaTestXuanze",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "选择题", to: "" }
      ]
    };
  },
  mounted() {
    this.$emit("getData", this.breadcrumb);
  }
};
</script>