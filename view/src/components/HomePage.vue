<template>
  <div id="home-page">
    <!-- <slider-component /> -->

    <div class="marquee-system">
      <div class="left-div"></div>
      <div class="right-div"></div>
      <div class="center-div">
        <div class="center-div2">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <router-link to="/detail/8"
                ><img class="marquee-svg" src="../assets/marquee/banner-1.svg"
              /></router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/detail/4">
                <img class="marquee-svg" src="../assets/marquee/banner-2.svg" />
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/detail/7">
                <img class="marquee-svg" src="../assets/marquee/banner-3.svg" />
              </router-link>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->

            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          </swiper>
        </div>
      </div>
    </div>

    <gallery-component />
    <!-- <about-component /> -->
    <!-- <conact-component /> -->
    <div>
      <div class="phone-img">
        <img
          class="phone-svg"
          src="../assets/android_banner/app_banner_02.svg"
        />
        <img
          class="phone-android"
          src="../assets/android_banner/zh-tw-play-badge 2.svg"
        />
        <img
          class="phone-apple"
          src="../assets/android_banner/app_store_badge 1.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import SliderComponent from "./SliderComponent.vue";
import GalleryComponent from "./GalleryComponent.vue";
import AboutComponent from "./AboutComponent.vue";
// import ConactComponent from "./ConactComponent.vue";

export default {
  name: "HelloWorld",
  components: {
    SliderComponent,
    GalleryComponent,
    AboutComponent
    // ConactComponent
  },
  async created() {
    var mySwiper = new Swiper(".swiper", {
      autoplay: true
    });
    // mySwiper.autoplay.start();
  },
  mounted() {},
  data() {
    return {
      // name: "carrousel",
      idx: 0,
      msg: "Welcome to Your Vue.js App",
      showImgURL: "../assets/marquee/banner-1.svg",
      showMoreURL: "",
      imgs: [
        "../assets/marquee/banner-1.svg",
        "../assets/marquee/banner-2.svg",
        "../assets/marquee/banner-3.svg"
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        // slidesPerView: "auto",
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    wait(milliseconds) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.marquee-svg {
}

.swiper-button-next {
  --swiper-navigation-color: #333; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.swiper-button-prev {
  --swiper-navigation-color: #333; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}

.left-div {
  float: left;
  width: 50%;
  height: 680px;
  background-color: #faf5f1;
}
.right-div {
  float: left;
  width: 50%;
  height: 680px;
  background-color: #eae6e5;
  margin-bottom: 50px;
}
.center-div {
  width: 100%;
  height: 680px;
  display: flex;
  position: absolute;
  justify-content: center;

  /* margin-top: 60px;
  margin-left: -645px; */
}

.marquee-system {
}

.center-div2 {
  width: 1280px;
  height: 680px;
  display: flex;
  position: absolute;
  justify-content: center;

  /* margin-top: 60px;
  margin-left: -645px; */
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.phone-img {
  width: 100%;
  height: 400px;
  background-color: #faf4f1;
  margin-top: 100px;
  margin-bottom: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-svg {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
}
.phone-android {
  display: flex;
  position: absolute;
  margin-top: 60px;
  margin-left: -645px;
}
.phone-apple {
  display: flex;
  position: absolute;
  margin-top: 60px;
  margin-left: -330px;
}
</style>
