<template>
  <div>
      卷组管理
  </div>
</template>
<script>
export default {
  name: "TeaTestJuanzu",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "卷组管理", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>