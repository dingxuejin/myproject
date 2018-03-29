<template>
  <div>
     判断题
  </div>
</template>
<script>
export default {
  name: "TeaTestPanduan",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "判断题", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>