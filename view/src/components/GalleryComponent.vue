<template>
  <div class="works">
    <div class="rr">
      <div class="works-header">
        <h2 class="works-title">精選案例</h2>
        <div class="divider"></div>
        <p class="works-subtitle">打造企業品牌形象&amp;提供精緻的包裝禮盒</p>
      </div>
      <div class="bb">
        <div class="works-row">
          <img src="../assets/android_banner/banner_index_no_shadow.svg" />
          <router-link id="works-btn-1" to="/detail/4"
            ><img src="../assets/android_banner/more.svg"
          /></router-link>
          <router-link id="works-btn-2" to="/detail/5"
            ><img src="../assets/android_banner/more.svg"
          /></router-link>
          <router-link id="works-btn-3" to="/detail/2"
            ><img src="../assets/android_banner/more.svg"
          /></router-link>
          <router-link id="works-btn-4" to="/detail/8"
            ><img src="../assets/android_banner/more.svg"
          /></router-link>
          <router-link id="works-btn-5" to="/detail/7"
            ><img src="../assets/android_banner/more.svg"
          /></router-link>
          <!-- <router-link to="/detail/4"
          ><img src="../assets/topItem/Rectangle 31.png"/></router-link
        >&emsp;
        <router-link to="/detail/5"
          ><img src="../assets/topItem/Rectangle 32.png"/></router-link
        >&emsp;
        <router-link to="/detail/2"
          ><img src="../assets/topItem/Rectangle 33.png"
        /></router-link> -->

          <!-- <div class="works-row">
        <div class="works-item" v-for="(item, index) in items" :key="index">
          <div class="works-item-image">
            <img :src="item.image" alt="" />
          </div>
          <button class="read-more">查看更多</button>
        </div>
      </div> -->
        </div>
      </div>
      <div class="bb">
        <div class="works-row1">
          <!-- <router-link to="/detail/8"
          ><img src="../assets/topItem/Rectangle 35.png"/></router-link
        >&emsp;
        <router-link to="/detail/7"
          ><img src="../assets/topItem/Rectangle 34.png"
        /></router-link> -->
        </div>
      </div>
      <div>
        <h2 class="works-title">合作客戶</h2>
        <div class="divider"></div>
        <p class="works-subtitle">
          持續創新、致力於解決客戶包裝的疑難雜症
        </p>
      </div>
      <div class="works-footer">
        <div class="partner-row">
          <img src="../assets/logos/MANDARIN 1.svg" />
          <img src="../assets/logos/logo-1 1.png" />
          <img src="../assets/logos/logo-1 2-1.png" />
          <img src="../assets/logos/logo-1 2.png" />
          <img src="../assets/logos/logo-1 3.png" />
          <img src="../assets/logos/logo-2 1-1.png" />
          <img src="../assets/logos/logo-2 1.png" />
          <img src="../assets/logos/義美.svg" />

          <!-- <img
          v-for="(item, index) in partners.slice(0, 8)"
          :key="index"
          :src="item.image"
          alt=""
        /> -->
        </div>

        <div class="partner-row">
          <img src="../assets/logos/logo3 2.png" />
          <img src="../assets/logos/logo3 3.png" />
          <img src="../assets/logos/logo3 4.png" />
          <img src="../assets/logos/logo3 5.png" />
          <img src="../assets/logos/logo3 6.png" />
          <img src="../assets/logos/logo3 1.png" />
          <img src="../assets/logos/logo-2 2.png" />
          <img src="../assets/logos/老爺酒店 1.svg" />
          <!-- <div class="partner-row"> -->
          <!-- <img
          v-for="(item, index) in partners.slice(8, 16)"
          :key="index"
          :src="item.image"
          alt=""
        /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.works {
  margin: 0 15%;
  margin-top: 15px;
  text-align: center;
}

.works-header {
  margin-bottom: 50px;
}

.divider {
  border-top: 1px solid #eae6e5;
  margin: 10px 0;
}

.works-title {
  margin-top: 50px;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.works-subtitle {
  font-size: 18px;
  color: #999;
  margin-bottom: 30px;
}

.works-row {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
}

.works-item {
  display: flex;
  width: 30%;
  height: 265px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: #eae6e5;
  align-items: center;
  justify-content: center;
}

.works-item2 {
  display: flex;
  width: 46%;
  height: 299px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: #eae6e5;
  align-items: center;
  justify-content: center;
}

.works-item:last-child {
  margin-right: 0;
}

.works-item-image {
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.read-more {
  position: relative;
  border-radius: 10px;
  background-color: #de7b3b;
  color: #ffffff;
  border: 1px solid #de7b3b7f;
  padding: 10px 30px;

  font-family: "Noto Sans";
  font-style: normal;
  font-size: 20px;
  align-items: center;
  letter-spacing: 0.2em;
}

.works-item-image img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.works-item-more a {
  display: block;
  margin-top: 10px;
  color: #fff;
  background-color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.works-item-more a:hover {
  background-color: #666;
}

.works-footer {
}

.works-partners {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.works-partner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
}

.partner-row img {
  margin: 0 15px;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.partner-img:hover {
  filter: grayscale(0);
}
.works-row {
  display: flex;
  align-content: stretch;
}
.works-row1 {
  margin-top: 10px;
  display: flex;
  align-content: stretch;
}
.bb {
  display: flex;
  /* 水平置中 */
  justify-content: center;
  /* 垂直置中 */
  align-items: center;
}

#works-btn-1 {
  display: flex;
  position: absolute;
  margin-top: 210px;
  margin-left: 30px;
}
#works-btn-2 {
  display: flex;
  position: absolute;
  margin-top: 210px;
  margin-left: 335px;
}
#works-btn-3 {
  display: flex;
  position: absolute;
  margin-top: 210px;
  margin-left: 645px;
}
#works-btn-4 {
  display: flex;
  position: absolute;

  margin-top: 530px;
  margin-left: 300px;
}
#works-btn-5 {
  display: flex;
  position: absolute;

  margin-top: 530px;
  margin-left: 750px;
}
</style>
