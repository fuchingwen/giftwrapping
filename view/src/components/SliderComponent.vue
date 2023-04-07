<template>
  <div class="slider">
    <div class="left">
      <div class="text-container">
        <h2>Holi Art<br> Design Production</h2>
        <h3>好禮設計</h3>
        <h4>平面設計  |  禮盒生產  |  精緻包裝</h4>
      </div>
    </div>
    <div class="right">
      <div class="image-container">
        <img :src="images[currentImageIndex]" />
        <button class="read-more">看更多</button>
      </div>
      <div class="dots-container">
        <div v-for="(dot, index) in dots" :key="index" :class="{ active: index === currentImageIndex }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marquee1Src from '@/assets/marquee1.png'
import marquee2Src from '@/assets/marquee2.png'
import marquee3Src from '@/assets/marquee3.png'
export default {
  data() {
    return {
      images: [
        marquee1Src,
        marquee2Src,
        marquee3Src
      ],
      currentImageIndex: 0,
      intervalId: null
    };
  },
  computed: {
    dots() {
      return new Array(this.images.length).fill('');
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  height: 680px;
  width: 100%;
  display: flex;
  background-color: #eae6e5;
}

.left {
  position: absolute;
  width: 50%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  z-index: 0;
}

.text-container {
  position: absolute;
  top: 24%;
  text-align: left;
}

.text-container h2 {
  font-family: 'Noto Sans';
  font-size: 3vw;
  line-height: 150%;
  letter-spacing: 3px;

  color: #171614;
}

.text-container h3 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 2vw;
  letter-spacing: 15px;

  color: rgba(23, 22, 20, 0.6);
}

.text-container h4 {
  font-family: 'Noto Sans';
  font-weight: 200;
  font-size: 1vw;
  line-height: 20px;
  letter-spacing: 5px;

  color: #6B6968;
  margin-top: 10%;
}

.right {
  position: absolute;
  width: 60%;
  height: 100%;
  top: 0;
  right: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.read-more {
  position: absolute;
  right: 25%;
  top: 70%;
  width: 16%;
  border-radius: 10%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff5c;
  padding: 10px 20px;
  font-size: 1vw;
}

.dots-container {
  position: absolute;
  top: 50%;
  right: 1.6%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.dots-container .active {
  width: 8px;
  height: 8px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: #00000000;
  margin-bottom: 10px;
}

.dots-container div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000000;
  margin-bottom: 10px;
  cursor: pointer;
}

.dots-container div:hover {
  background-color: #000000;
}
</style>
