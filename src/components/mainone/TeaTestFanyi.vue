<template>
  <div>
      翻译题页面
  </div>
</template>
<script>
export default {
  name: "TeaTestFanyi",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "翻译题", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>
