<template>
  <div>
      这是学生作答详情页面！
  </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "学生作答详情", to: "" }
            ],

            tabs: [
                { name: "能力测评报告", to: "/teawriteabilityevaluationreport" },
                { name: "学生作答详情", to: "/teawriteanswer" }
            ]
        };
    },

    mounted(){
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 1;

        this.$emit('getData', {breadcrumb, tabs, n})
    }
};
</script>