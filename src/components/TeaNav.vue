<template>
  <div class='nav'>
    <div v-for='(item1,index1)  in  nav' :key='index1'>
      <div class='flex-between nav1' v-on:click='toggleUl(index1)'>
        <div class='flex-start'>
          <img :src='item1.navIcon' alt='' class="icon">
          <span>{{item1.menuName}}</span>
        </div>
        <div>
          <img src='../assets/nav/xialasanjiaoxing.png' alt='' :class="{sanjiao:index1===active}">
        </div>
      </div>
      <!-- <transition-group name='navUl' tag='ul' :class='{ulbor:index1===active}'>
        <template v-if='index1===active'>
          <li @click="toMain(index1,index2)" :class="{liActive:index2===liActive}" v-for='(item2,index2) in item1.navArray' :key='index2' tag="li">
            {{item2.liName}}
          </li>
        </template>
      </transition-group> -->
    </div>
  </div>
</template>
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
<script>
export default {
    name: "TeaSpeNav",
    data() {
        return {
            active: 0,
            liActive: 0
        };
    },
    props: {
        nav: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log(1, this.nav);
    },
    methods: {
        toggleUl: function(e) {
            this.active = e;
            let toLink = this.nav[e].to;
            if (toLink) {
                this.$router.push({ path: toLink });
            }
        },
        toMain(m, n) {
            let arr = this.nav[m].navArray;
            let name = arr[n].goto.name;
            this.liActive = n;
            this.$router.push({
                name: name,
                params: { n }
            });
        }
    }
};
</script>


