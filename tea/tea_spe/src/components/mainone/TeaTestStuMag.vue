<template>
<div>
 这是亿测吧学生管理页面
</div>
   
</template>
<script>
export default {
  name: "TeaTestStuMag",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "学生管理", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>