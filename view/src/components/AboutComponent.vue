<template>
  <div class="about-us">
    <h2 class="about-us-title">關於我們</h2>
          <div class="divider"></div>
    <div class="about-us-info">
      <div class="about-us-box">
        <img :src="require('@/assets/about1.png')" alt="">
        <h2>一站式的<br>客製化服務諮詢</h2>
        <h3>找到最適合的設計方案 </h3>
        <h4>關於更多</h4>
      </div>
      <div class="about-us-box">
        <img :src="require('@/assets/about2.png')" alt="">
        <h2>自有工廠<br>設計、開模製造</h2>
        <h3>解決所有包裝的疑難雜症</h3>
        <h4>關於更多</h4>
      </div>
      <div class="about-us-box">
        <img :src="require('@/assets/about3.png')" alt="">
        <h2>手工打造<br>專屬客製彩盒</h2>
        <h3>打造品牌形象包裝設計</h3>
        <h4>關於更多</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 空的data
    }
  }
}
</script>
<style>
.about-us {
  margin-top: 95px;
  margin-left: 200px;
  margin-right: 200px;
}

.about-us-title {
  text-align: center;
}

.divider {
  border-top: 1px solid #EAE6E5;
  margin: 10px 0;
}

.about-us-info {
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
}

.about-us-box {
margin: 0 20px;
  text-align: center;
  width: 25%;
  text-align: left;
}

.about-us-box h2 {
  ont-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vw;
  line-height: 30px;
  /* or 150% */

  letter-spacing: 2px;

  /* style-black */

  color: #171614;
}

.about-us-box h3 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 100;
  font-size: 0.8vw;
  line-height: 25px;
  /* identical to box height, or 179% */

  text-align: left;
  letter-spacing: 2px;

  /* oher/gray02 */

  color: #9A9999;
}

.about-us-box h4 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 100;
  font-size: 0.8vw;
  line-height: 25px;
  /* identical to box height, or 179% */

  text-align: left;
  letter-spacing: 2px;

  color: #171614;
}

.about-us-box img {
  width: 280px;
  height: 265px;
}

</style>