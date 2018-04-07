<template>
    <div>
        <div class="myDialog3">
            <div class="myDialog4 flex-center">
                <span>{{title}}</span>
            </div>
            <div class="myDialog5 flex-center">
                <span>{{content}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "tanchukongjian",
  props: {
    title: [String,Number],

    content:[String,Number]
  }
};
</script>
<style scoped>
.myDialog3 {
  background-image: url(../../assets/dialog/tckkj.png);
  background-size: 100% 100%;
  border: 1px solid #aee0fa;
  border-radius: 3px;
  width: 160px;
  height: 80px;
  margin: 10px;
}
.myDialog4 {
  height: 40%;
  text-align: center;
  color: #fff;
  font-size: 16px;
}

.myDialog5 {
  height: 60%;
  text-align: center;
  color: #43befe;
  font-size: 16px;
}
</style>


