<template>
  <div id="myDialog" :class="{visible:isShow}">
    <div class="myDialog1" :style="{width:width}">
      <div class="myDialog2" @click="close()"></div>
      <div>
        <slot></slot>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "MyDialog",
  data() {
    return {};
  },
  computed: {
    isShow() {
      return !this.visible;
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width:{
      type:String
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("changeVisible");
    }
  }
};
</script>
<style scoped>
.visible {
  display: none;
}
#myDialog {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
.myDialog1 {
  margin: 80px auto;
  background: #fff;
  position: relative;
  min-height: 100px;
  border-radius: 10px;
  overflow: auto;
  max-height: 90%;
}
.myDialog2 {
  z-index: 9;
  position: absolute;
  right: 15px;
  top: 0;
  font-size: 60px;
  color: #555;
}
.myDialog2::before {
  content: "×";
}
</style>




 