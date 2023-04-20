<template>
  <div class="list-parent">
    <div id="list">
      <div class="list-title">
        <router-link :to="'/'">首頁</router-link> /
        <router-link :to="'/list'">好禮作品集</router-link>
      </div>
      <div class="list-category">
        <template v-for="category in categoryList">
          <h3 class="category-title">{{ category.categoryTitle }}</h3>

          <!-- 單選按鈕:0 -->
          <template v-if="category.type == 0">
            <label class="sel-lab"
              >全部<input
                class="sel"
                type="radio"
                :name="category.categoryID"
                value="全部"
                v-on:click="clickInput($event)"
                checked/><span class="checkmark"></span></label
            ><br />
            <template v-for="content in category.content">
              <label class="sel-lab"
                >{{ content
                }}<input
                  class="sel"
                  type="radio"
                  :name="category.categoryID"
                  :value="content"
                  v-on:click="clickInput($event)"
                  checked/><span class="checkmark"></span></label
              ><br />
            </template>
          </template>

          <!-- 複選按鈕:1 -->
          <template v-else="category.type == 1">
            <label class="sel-lab"
              >全部<input
                class="sel"
                type="checkbox"
                :name="category.categoryID"
                value="全部"
                v-on:click="clickInput($event)"
                checked/><span class="checkmark"></span></label
            ><br />
            <template v-for="(content, cIdx) in category.content">
              <label class="sel-lab"
                >{{ content
                }}<input
                  class="sel"
                  type="checkbox"
                  :name="category.categoryID"
                  :value="content"
                  v-on:click="clickInput($event)"
                  checked/><span class="checkmark"></span></label
              ><br />
            </template>
          </template>
        </template>
        <br /><br />
        <a class="reset" href="#" v-on:click="clickResetSel()">重設篩選條件</a>
      </div>
      <div class="list-content">
        <template v-if="itemList.length > 0">
          <template v-for="item in itemList">
            <router-link :to="'/detail/' + item.id">
              <div class="nwrapper">
                <div class="ncard">
                  <img :src="item.image[0].url" />
                  <h3 class="ntitle">{{ item.name }}</h3>
                  <h4 class="nsubtitle">{{ item.subtitle }}</h4>
                  <h5 class="ncontent">{{ item.detail.content }}</h5>
                </div>
              </div>
            </router-link>
          </template>
        </template>
        <template v-else>
          <div class="no-item">
            <img src="../assets/no-item.png" />
            <br />
          </div>
          <br />
          <h6 class="no-item-txt">尚無相關作品</h6>
        </template>
      </div>
      <div class="list-paging">
        <ul>
          <li class="list-paging-li-type3">
            <button
              class="list-paging-inner"
              value="0"
              v-on:click="clickPaging($event)"
            >
              &lt;
            </button>
          </li>
          <li class="list-paging-li-type2">
            <button
              class="list-paging-inner"
              value="1"
              v-on:click="clickPaging($event)"
            >
              1
            </button>
          </li>
          <li class="list-paging-li-type1">
            <button
              class="list-paging-inner"
              value="2"
              v-on:click="clickPaging($event)"
            >
              2
            </button>
          </li>
          <li class="list-paging-li-type1">
            <button
              class="list-paging-inner"
              value="3"
              v-on:click="clickPaging($event)"
            >
              3
            </button>
          </li>
          <li class="list-paging-li-type1">
            <button
              class="list-paging-inner"
              value="4"
              v-on:click="clickPaging($event)"
            >
              4
            </button>
          </li>
          <li class="list-paging-li-type1">
            <button
              class="list-paging-inner"
              value="5"
              v-on:click="clickPaging($event)"
            >
              5
            </button>
          </li>
          <li class="list-paging-li-type1">
            <button
              class="list-paging-inner"
              value="6"
              v-on:click="clickPaging($event)"
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
import axios from "axios";
import $ from "jquery";

export default {
  name: "HelloWorld",
  data() {
    return {
      itemList: [],
      categoryList: null,
      seletInfo: {
        condition: [
          // { categoryID: 0, content: ["餐飲業", "建築業"] }, //content若為空陣列則代表全拿
          // { categoryID: 1, content: ["長方體"] }
        ]
      },
      curpaging: 1, //當前頁面
      pageSize: 10 //每一頁都是10個商品
    };
  },
  async created() {
    //取得分類清單的資料
    // let categoryRes = await axios.get("http://127.0.0.1:3000/category/");
    // this.categoryList = categoryRes.data.list;

    //fake server
    let _c = [
      {
        sort: 0,
        categoryID: 0,
        categoryTitle: "產業",
        type: 1,
        content: ["食品", "酒類", "金融", "飯店", "精品"]
      },
      {
        sort: 1,
        categoryID: 1,
        categoryTitle: "用途",
        type: 1,
        content: ["三節禮盒", "特殊節慶", "商品售賣", "紀念贈禮"]
      }
    ];

    this.categoryList = _c;

    // console.log("=>>", this.categoryList);

    //建立「全部」獲取的資料
    let condition = {
      condition: [],
      page: this.curpaging,
      pageSize: this.pageSize
    };
    this.categoryList.forEach(category => {
      condition.condition.push({
        categoryID: category.categoryID,
        content: [] //category.content
      });
    });

    console.log("=>>search", condition);

    let productRes = await axios.post(
      "https://api.waproject-gift.store/api/v1/product/search",
      condition,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("<<=search", productRes.data);
    this.itemList = productRes.data.list;
  },
  setup() {
    $("html,body").animate({ scrollTop: 0 }, "slow");

    return {};
  },
  mounted() {
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          if ($(".back-top").hasClass("hide")) {
            $(".back-top").toggleClass("hide");
          }
        } else {
          $(".back-top").addClass("hide");
        }
      });

      // 點擊按鈕回頂部
      $(".back-top").on("click", function(event) {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          500 // 回頂部時間為 500 毫秒
        );
      });
    });
  },
  methods: {
    clickResetSel() {
      $("input[type=radio]").each(function() {
        $(this).prop("checked", true);
      });
      $("input[type=checkbox]").each(function() {
        $(this).prop("checked", true);
      });
      console.log("點擊恢復預設值");
      this.showItems();
    },
    clickInput(event) {
      if (event.target.value == "全部") {
        if (event.target.checked) {
          //設為打勾時
          $("input[name=" + event.target.name + "]").each(function() {
            $(this).prop("checked", true);
          });
        } else {
          //設為取消打勾時
          $("input[name=" + event.target.name + "]").each(function() {
            $(this).prop("checked", false);
          });
        }
      } else {
        $("input[name=" + event.target.name + "][value=全部]").each(function() {
          $(this).prop("checked", false);
        });
      }

      this.showItems();
    },
    async showItems() {
      let condition = { condition: [] };

      let inputs = $(".sel:checked[value!=全部]");

      //把選項塞進rq
      this.categoryList.forEach(category => {
        // console.log(category);

        let arr = [];

        for (const sel of inputs) {
          if (sel.name == category.categoryID) {
            // console.log("=>>", sel);
            arr.push(sel.value);
          }
        }

        condition.condition.push({
          categoryID: category.categoryID,
          content: arr
        });
      });

      // console.log("condition=>>", condition);

      let allCount = 0;
      for (const category of condition.condition) {
        allCount += category.content.length;
      }

      if (allCount > 0) {
        //送出需求、取得回應

        console.log("=>>search", condition);

        let productRes = await axios.post(
          "https://api.waproject-gift.store/api/v1/product/search",
          condition,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log("<<=search", productRes.data);
        this.itemList = productRes.data.list;
      } else {
        this.itemList = [];
      }
    },
    clickPaging(event) {
      let idx = event.target.value; //點擊的編號
      console.log(idx);
    }
  }
};
</script>

<style scoped>
@import url("../style/app.9b6dd939.css");
@import url("../style/newItem.css");
@import url("../style/sel.css");
@import url("../style/list-paging.css");

.reset {
  text-decoration: underline;
  margin-bottom: 100px;
}
.no-item {
  margin-top: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.no-item-txt {
  text-align: center;
}

.no-item-btn {
  background-color: #000000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  width: 200px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
}

.list-parent {
  display: flex;
  justify-content: center;
}

#list {
  margin-top: 50px;
  width: 885px;
  display: grid;
  grid-template-columns: 130px 760px;
  grid-template-rows: 50px auto;
  grid-gap: 5px;
}

.list-title {
  grid-column: 1 / 2;
  grid-row: 1;
}
.list-category {
  grid-column: 1;
  grid-row: 2 / 2;
}
.list-content {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
}

.category-title {
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
}
</style>
