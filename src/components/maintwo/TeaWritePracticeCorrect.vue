<template>
    <div>
        这是写作实践批改页面！
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "写作实践批改", to: "" }
            ],

            tabs: [
                { name: "单句翻译批改", to: "/teawritecorrectbyteacher" },
                { name: "写作实践批改", to: "/teawritepracticecorrect" }
            ]
        };
    },

    mounted() {
        let breadcrumb = this.breadcrumb;
        let tabs = this.tabs;
        let n = 1;

        this.$emit("getData", { breadcrumb, tabs, n });
    }
};
</script>