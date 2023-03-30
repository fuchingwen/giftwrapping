<template>
  <div class="main-css">
    <div>
      div測試文字！div測試文字div測試文字div測試文字div測試文字div測試文字
    </div>
    <div>div測試文字！</div>
  </div>
</template>

<script>
import Fancybox from "./plugins/Fancybox.vue";

export default {
  data() {
    return {
      num: 1,
      prodList: [
        {
          img: require("@/assets/img/prod_1_s.png"),
          url:
            "https://achun1130.github.io/product-project/img/prod_1_s.f357d98f.png"
        },
        {
          img: require("@/assets/img/prod_2_s.png"),
          url:
            "https://achun1130.github.io/product-project/img/prod_2_s.55fdf7d1.png"
        },
        {
          img: require("@/assets/img/prod_3_s.png"),
          url:
            "https://achun1130.github.io/product-project/img/prod_3_s.524c7cc4.png"
        },
        {
          img: require("@/assets/img/prod_4_s.png"),
          url:
            "https://achun1130.github.io/product-project/img/prod_4_s.213d5738.png"
        }
      ],
      prodIndex: 0
    };
  },
  methods: {
    minusNum() {
      if (this.num > 1) this.num--;
    },
    addNum() {
      this.num++;
    }
  },
  components: {
    Fancybox
  }
};
</script>

<style scoped>
.main-css {
  width: 100%;
  /* background-color: rgb(73, 185, 39); */
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

div {
  width: 200px;
  border: 1px solid red;
  display: inline-block;
  /*display:inline;*/
}
</style>
