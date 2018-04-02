<template>
  <div>
      这是范例资源上传页面！
  </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumb: [
                { name: "首页", to: "/" },
                { name: "写作平台", to: "/teawritemain" },
                { name: "范例资源上传", to: "" }
            ]
        };
    },

    mounted(){
        this.$emit('getData', this.breadcrumb)
    }
};
</script>