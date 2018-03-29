<template>
<div>
 这是亿测吧班级管理页面
</div>
   
</template>
<script>
export default {
  name: "TeaTestClassMag",
  data() {
    return {
      breadcrumb: [
        { name: "首页", to: "/" },
        { name: "亿测吧", to: "/teatest" },
        { name: "班级管理", to: "" }
      ]
    };
  },
  mounted() {
     this.$emit("getData", this.breadcrumb);
  }
};
</script>