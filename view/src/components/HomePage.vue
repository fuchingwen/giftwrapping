<template>
  <div id="home-page">
    <slider-component />
    <div id="關於我們"><gallery-component /></div>
    <about-component />
    <!-- <div id="聯絡我們"><conact-component /></div> -->
  </div>
</template>

<script>
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
  created() {
    // $("html,body").animate({ scrollTop: 0 }, "fast");
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
