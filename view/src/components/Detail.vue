<template>
  <div class="mx-auto max-w-5xl py-4 px-4">
    <div class="detail-title">
      <router-link :to="'/'">首頁</router-link> /
      <router-link :to="'/list'">好禮作品集/</router-link>
      <a href="#">作品介紹</a>
    </div>

    <div class="grid gap-5 sm:grid-cols-12">
      <div class="grid gap-5 sm:col-span-6 lg:col-span-8 lg:grid-cols-8">
        <Fancybox
          class="flex flex-col justify-between overflow-hidden rounded-lg lg:order-last lg:col-span-6"
        >
          <template v-for="(prod, index) in prodList">
            <a
              data-fancybox="gallery"
              :href="prod.url"
              v-show="index === prodIndex"
              :key="index"
              class="h-full w-full"
            >
              <img :src="prod.url" class="h-full w-full object-cover" />
            </a>
          </template>
        </Fancybox>

        <div class="flex justify-between gap-5 lg:col-span-2 lg:flex-col">
          <a
            href="javascript: void()"
            @click.prevent="prodIndex = index"
            v-for="(prod, index) in prodList"
            :key="index"
          >
            <img :src="prod.url" class="w-full" />
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-4 sm:col-span-6 lg:col-span-4">
        <h2 class="text-2xl font-bold">{{ title }}</h2>

        <p class="text-sm text-muted-200">
          {{ content }}
        </p>

        <hr class="border-muted-100" />

        <div class="flex">
          <div class="flex" style="font-weight:bold;">單一尺寸：</div>
          <div class="ml-[6px] text-muted-200" v-html="size"></div>
        </div>

        <div class="flex">
          <div class="flex" style="font-weight:bold;">款式種類：</div>
          <div class="ml-[6px] text-muted-200" v-html="style"></div>
        </div>

        <div class="flex">
          <div class="flex" style="font-weight:bold;">價格區間：</div>
          <div class="ml-[6px] text-muted-200" v-html="cost"></div>
        </div>

        <div class="flex" style="font-weight:bold;">備註：</div>
        <div class="flex">
          <div class="ml-[6px] text-muted-200" v-html="remark"></div>
        </div>

        <!-- <span class="text-sm">誤差：±2mm為正常誤差值</span> -->

        <!-- <div class="flex gap-5">
          <div class="flex flex-1">
            <a
              href="javascript: void(0)"
              class="-mr-[2px] flex items-center justify-center rounded-l border-2 border-muted-100 px-2 duration-200 hover:bg-primary-100 hover:text-white"
              @click.prevent="minusNum()"
            >
              <i class="fa-solid fa-minus"></i>
            </a>
            <span
              class="flex w-full items-center justify-center border-2 border-muted-100"
            >
              {{ num }}
            </span>
            <a
              href="javascript: void(0)"
              class="-ml-[2px] flex items-center justify-center rounded-r border-2 border-muted-100 px-2 duration-200 hover:bg-primary-100 hover:text-white"
              @click.prevent="addNum()"
            >
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>

          <a
            href="javascript: void(0)"
            class="flex flex-1 items-center justify-center rounded bg-primary-100 py-[10px] text-white duration-200 hover:bg-primary-200"
          >
            購買
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script scoped>
import Fancybox from "@/components/plugins/Fancybox.vue";
import axios from "axios";
import $ from "jquery";

export default {
  setup() {
    $("html,body").animate({ scrollTop: 0 }, "fast");
  },
  async created() {
    console.log("詳細頁ID：", this.$route.params.id);
    let rs = await axios.get(
      "https://api.waproject-gift.store/api/v1/product/" +
        this.$route.params.id,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    let info = rs.data.context;

    this.title = info.name;
    this.content = info.detail.content;
    this.size = info.detail.size;
    this.style = info.detail.style;
    this.remark = info.detail.remark;
    this.cost = info.detail.cost;

    for (let index = 0; index < info.image.length; index++) {
      this.prodList[index].url = info.image[index].url;
    }

    console.log(info.image[0]);
  },
  data() {
    return {
      num: 1,
      title: "",
      content: "",
      cost: "",
      size: "",
      style: "",
      remark: "",
      prodList: [
        {
          img: require("@/assets/img/prod_1_s.png"),
          url: ""
        },
        {
          img: require("@/assets/img/prod_2_s.png"),
          url: ""
        },
        {
          img: require("@/assets/img/prod_3_s.png"),
          url: ""
        },
        {
          img: require("@/assets/img/prod_4_s.png"),
          url: ""
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

<style>
/* .mx-auto {
  margin-top: 100px;
} */

.detail-title {
  margin-top: 20px;
  margin-bottom: 15px;
}
.detail-title a {
  color: #171614;
}

.w-full {
  border-radius: 10px;
}
</style>
