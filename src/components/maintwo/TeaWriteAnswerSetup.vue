<template>
  <div>
      这是答案设置页面！
  </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "答案设置", to: "" }
            ],

            tabs: [
                { name: "关卡开启", to: "/teawritecheckpoint" },
                { name: "答案设置", to: "/teawriteanswersetup" },
                { name: "分值设置", to: "/teawritepointsetup" }
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