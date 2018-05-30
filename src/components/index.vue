<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="index-container">
        <div class="center admwelcome">
          <img src="../assets/main/teaspe.png" alt="" srcset="">
        </div>
        <div class="center admtitle2">
          <img src="../assets/main/teaspe2.png" alt="" srcset="">
        </div>
        <div>
          <el-carousel :interval="4000" type="card" height="460px" @change="changeCarousel">
            <el-carousel-item v-for="(item,index) in carousel" :key="index" class="carousel-item-container">
              <div :class=" {active:(index==active),carouselPrev:isTransform[active-1+carousel.length]==index,carouselNext:isTransform[active+1+carousel.length]==index}" class="carousel-item ">
                <div class="banner-container">
                  <div>
                    <img class="carousel-img" :src="item.imgpng" alt="" srcset="">
                  </div>
                  <div class="carousel-title">
                    <span>{{item.imgtitle}}</span>
                  </div>
                </div>

              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import Header from "./TeaHeader";
export default {
  name: "Index",
  data() {
    return {
      active: 0,
      carousel: [
        {
          imgtitle: "考试平台",
          imgpng: require("../assets/index/index1.jpg")
        },
        {
          imgtitle: "口语平台",
          imgpng: require("../assets/index/index2.jpg")
        },
        {
          imgtitle: "写作平台",
          imgpng: require("../assets/index/index3.jpg")
        }
      ]
    };
  },
  computed: {
    isTransform() {
      let length = this.carousel.length;
      let arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(i);
      }
      arr = arr.concat(arr);
      arr = arr.concat(arr);
      return arr;
    }
  },
  methods: {
    changeCarousel(m) {
      this.active = m;
    }
  },
  components: { Header }
};
</script>

<style>
.main {
  background-image: url("../assets/rongqi/bg.png");
  background-size: 100% 100%;
  height: calc(100vh - 90px);
}
.main::before {
  content: "";
  display: table;
}
.index-container {
  width: 1250px;
  margin: 100px auto 0;
}
.center {
  text-align: center;
}
.admtitle2 {
  margin: 5px auto 30px;
}
.admimg1 {
  height: 350px;
  border-radius: 6px;
  background-size: 100% 100%;
  overflow: hidden;
}
.carousel-item-container {
  perspective: 201px;
}
.carousel-item {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px #000;
  margin: 20px;
  color: #29a5fd;
}
.carouselPrev {
  transform-origin: 100% 50%;
  transform: rotateY(-5deg);
}
.carouselNext {
  transform-origin: 0 50%;
  transform: rotateY(5deg);
}
.banner-container {
  padding: 10px;
  background: #fff;
}
.carousel-img {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
.carousel-title {
  padding: 10px;
  text-align: center;
  font-size: 30px;
}
.active {
  border-bottom: 10px solid #f00;
  color: #f00;
  transition: 800ms linear;
}
</style>