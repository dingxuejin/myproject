<template>
  <div class='nav'>
    <div v-for='(item1,index1)  in  nav' :key='index1'>
      <div class='flex-between nav1' v-on:click='active = index1;'>
        <div class='flex-start'>
          <img :src='item1.navIcon' alt='' class="icon">
          <span>{{JSON.parse(item1.onemenu)[getLanguage]}}</span>
        </div>
        <div>
          <img src='../assets/nav/xialasanjiaoxing.png' alt='' :class="{sanjiao:index1===active}">
        </div>
      </div>
      <transition-group name='navUl' tag='ul' :class='{ulbor:index1===active}'>
        <template v-if='index1===active'>
          <li @click="toMain(index2)" :class="{liActive:index2===liActive}" v-for='(item2,index2) in item1.twomenus' :key='index2' tag="li">
            {{item2[getLanguage]}}
          </li>
        </template>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "TeaSpeNav",
  data() {
    return {
      active: -1,
      liActive: -1
    };
  },
  props: {
    nav: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapGetters(["getLanguage"])
  },
  mounted() {
  
  },
  created() {
    this.setClassList();
  },
  methods: {
    ...mapActions(["setLanguage", "setClassList"]),
    toMain(n) {
      this.liActive = n;
      //   this.$router.push({
      //     name: name,
      //     params: { n }
      //   });
    }
  }
};
</script>
<style scoped>
@keyframes enter {
  0% {
    height: 0px;
    padding: 0px;
    opacity: 0;
  }

  100% {
    height: 38px;
    padding: 10px;
    opacity: 1;
  }
}
.icon {
  width: 22px;
  height: 22px;
}
.nav {
  border-radius: 10px;
}
.navUl-enter-active {
  animation: enter 0.3s linear;
}
.navUl-leave-active {
  animation: enter 0.3s linear reverse;
}

.nav span {
  color: #fff;
}
.nav ul {
  padding: 0;
  margin: 0;
  border: transparent solid 1px;
  border-radius: 10px;
}
.nav .ulbor {
  border: #4affff solid 1px;
}
.nav .sanjiao {
  transform: rotateX(180deg);
}
.nav li {
  height: 38px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  color: #2995fc;
}
.nav li:hover,
.liActive {
  background: #e6f4fd;
}
.nav1 {
  background: #009efd;
  padding: 0 20px;
  border-radius: 10px;
  height: 50px;
}
</style>



