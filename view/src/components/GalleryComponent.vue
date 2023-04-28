<template>
  <div class="works">
    <div class="works-header">
      <h2 class="works-title">作品集展示</h2>
      <div class="divider"></div>
      <p class="works-subtitle">打造企業品牌形象&amp;提供精緻的包裝禮盒</p>
    </div>
    <div class="works-content">
      <router-link to="/detail/4"
        ><img src="../assets/topItem/Rectangle 31.png"/></router-link
      >&emsp;
      <router-link to="/detail/5"
        ><img src="../assets/topItem/Rectangle 32.png"/></router-link
      >&emsp;
      <router-link to="/detail/2"
        ><img src="../assets/topItem/Rectangle 33.png"/></router-link
      ><br /><br />

      <!-- <div class="works-row">
        <div class="works-item" v-for="(item, index) in items" :key="index">
          <div class="works-item-image">
            <img :src="item.image" alt="" />
          </div>
          <button class="read-more">查看更多</button>
        </div>
      </div> -->
      <div class="works-row">
        <router-link to="/detail/8"
          ><img src="../assets/topItem/Rectangle 35.png"/></router-link
        >&emsp;
        <router-link to="/detail/7"
          ><img src="../assets/topItem/Rectangle 34.png"
        /></router-link>
      </div>
    </div>

    <div class="works-header">
      <h2 class="works-title">合作客戶</h2>
      <div class="divider"></div>
      <p class="works-subtitle">
        持續創新&amp;致力於解決客戶包裝的疑難雜症&amp;
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
</template>

<script scoped>
import portfolio1Src from "@/assets/portfolio1.png";
import portfolio2Src from "@/assets/portfolio2.png";
import portfolio3Src from "@/assets/portfolio3.png";
import portfolio4Src from "@/assets/portfolio4.png";
import portfolio5Src from "@/assets/portfolio5.png";
import partner1Src from "@/assets/partner1.png";
import partner2Src from "@/assets/partner2.png";
import partner3Src from "@/assets/partner3.png";
import partner4Src from "@/assets/partner4.png";
import partner5Src from "@/assets/partner5.png";
import partner6Src from "@/assets/partner6.png";
import partner7Src from "@/assets/partner7.png";
import partner8Src from "@/assets/partner8.png";
import partner9Src from "@/assets/partner9.png";
import partner10Src from "@/assets/partner10.png";
import partner11Src from "@/assets/partner11.png";
import partner12Src from "@/assets/partner12.png";
import partner13Src from "@/assets/partner13.png";
import partner14Src from "@/assets/partner14.png";
import partner15Src from "@/assets/partner15.png";
import partner16Src from "@/assets/partner16.png";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "作品1",
          image: portfolio1Src
        },
        {
          id: 2,
          title: "作品2",
          image: portfolio2Src
        },
        {
          id: 3,
          title: "作品3",
          image: portfolio3Src
        }
      ],
      items2: [
        {
          id: 4,
          title: "作品4",
          image: portfolio4Src
        },
        {
          id: 5,
          title: "作品5",
          image: portfolio5Src
        }
      ],
      partners: [
        {
          id: 1,
          image: partner1Src
        },
        {
          id: 2,
          image: partner2Src
        },
        {
          id: 3,
          image: partner3Src
        },
        {
          id: 4,
          image: partner4Src
        },
        {
          id: 5,
          image: partner5Src
        },
        {
          id: 6,
          image: partner6Src
        },
        {
          id: 7,
          image: partner7Src
        },
        {
          id: 8,
          image: partner8Src
        },
        {
          id: 9,
          image: partner9Src
        },
        {
          id: 10,
          image: partner10Src
        },
        {
          id: 11,
          image: partner11Src
        },
        {
          id: 12,
          image: partner12Src
        },
        {
          id: 13,
          image: partner13Src
        },
        {
          id: 14,
          image: partner14Src
        },
        {
          id: 15,
          image: partner15Src
        },
        {
          id: 16,
          image: partner16Src
        }
      ]
    };
  },
  methods: {
    showMore() {
      // Implement the function to show more works
      console.log("Show more works");
    }
  }
};
</script>

<style>
.works {
  margin: 0 15%;
  text-align: center;
}

.works-header {
  margin-bottom: 50px;
}

.works-header h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 2vw;
  line-height: 48px;
  text-align: center;
  letter-spacing: 5px;
  color: #171614;
}

.works-header p {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 200;
  font-size: 1vw;
  line-height: 20px;
  text-align: center;
  letter-spacing: 5px;

  color: #6b6968;
}

.divider {
  border-top: 1px solid #eae6e5;
  margin: 10px 0;
}

.works-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.works-subtitle {
  font-size: 18px;
  color: #999;
}

.works-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  /* height: 80px; */
  /* width: 80px; */
  margin: 0 15px;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.partner-img:hover {
  filter: grayscale(0);
}
</style>
