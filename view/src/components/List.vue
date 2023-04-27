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
        <!-- <div class="spinner"></div> -->
        <div v-if="loading" class="overlay">
          <div class="spinner"></div>
        </div>
        <div v-else>
          <!-- 页面内容 -->

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
              <img src="../assets/icon_empty_state.svg" />
              <br />
            </div>
            <br />
            <h6 class="no-item-txt">尚無相關作品</h6>
          </template>
        </div>
      </div>
      <div class="list-paging">
        <ul>
          <li :class="page.leftClass">
            <button
              class="list-paging-inner"
              value="a"
              idx="-1"
              v-on:click="clickPaging($event)"
            >
              &lt;&lt;
            </button>
          </li>
          <li
            v-for="(item, idx) in page.curPagingArr"
            :class="page.idxClass[idx]"
          >
            <button
              class="list-paging-inner"
              :value="item"
              :idx="idx"
              v-on:click="clickPaging($event)"
            >
              {{ item }}
            </button>
          </li>
          <li :class="page.rightClass">
            <button
              id="pandingID"
              class="list-paging-inner"
              value="b"
              idx="-2"
              v-on:click="clickPaging($event)"
            >
              &gt;&gt;
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
      loading: true,
      itemList: [],
      categoryList: null,
      seletInfo: {
        condition: [
          // { categoryID: 0, content: ["餐飲業", "建築業"] }, //content若為空陣列則代表全拿
          // { categoryID: 1, content: ["長方體"] }
        ]
      },
      page: {
        isInit: false,
        curPagingArr: [],
        intactPagingArr: [],
        curIdx: 0,
        curpaging: 1, //當前頁面，初始化為1
        pageSize: 6, //每一頁都是10個商品
        totalPage: 3,
        leftClass: {
          "list-paging-li-type3": true, //不能點擊
          "list-paging-li-type1": false //一般狀態
        },
        idxClass: [
          {
            "list-paging-li-type2": false, //不能點擊
            "list-paging-li-type1": true //一般狀態
          },
          {
            "list-paging-li-type2": false, //不能點擊
            "list-paging-li-type1": true, //一般狀態
            "list-paging-li-type3": false //不能點擊
          },
          {
            "list-paging-li-type2": false, //不能點擊
            "list-paging-li-type1": true //一般狀態
          },
          {
            "list-paging-li-type2": false, //不能點擊
            "list-paging-li-type1": true //一般狀態
          },
          {
            "list-paging-li-type2": false, //不能點擊
            "list-paging-li-type1": true //一般狀態
          }
        ],
        rightClass: {
          "list-paging-li-type3": false, //不能點擊
          "list-paging-li-type1": true //一般狀態
        }
      }
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
      page: parseInt(this.page.curpaging),
      pageSize: parseInt(this.page.pageSize)
    };
    this.categoryList.forEach(category => {
      condition.condition.push({
        categoryID: category.categoryID,
        content: [] //category.content
      });
    });

    console.log("=>>search", condition);
    await this.wait(100);
    let productRes = await axios.post(
      "https://api.waproject-gift.store/api/v1/product/search",
      condition,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    this.loading = false;

    console.log("<<=search", productRes.data);
    this.itemList = productRes.data.list;

    //分頁
    this.page.totalPage = productRes.data.context.total_pages;
    if (this.page.totalPage > 5) {
      this.page.curPagingArr = [1, 2, 3, 4, 5];
    } else {
      this.page.curPagingArr = [];
      for (let index = 1; index < this.page.totalPage + 1; index++) {
        this.page.curPagingArr.push(index);
      }
    }

    for (let index = 1; index <= this.page.totalPage; index++) {
      this.page.intactPagingArr.push(index);
    }

    // this.page.leftClass["list-paging-li-type3"] = true;
    // this.page.leftClass["list-paging-li-type1"] = false;
    this.page.isInit = true;
    this.showPaging();

    this.page.leftClass["list-paging-li-type3"] = true;
    this.page.leftClass["list-paging-li-type1"] = false;
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
    wait(ms) {
      return new Promise(resolve => setTimeout(() => resolve(), ms));
    },
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
    async clickInput(event) {
      this.loading = true;

      this.page.isInit = true;
      this.page.curIdx = 0;
      this.page.curpaging = 1;

      console.log("clickInput");
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

      // await this.showItems();
      // await this.showPaging();

      let condition = {
        condition: [],
        page: 1,
        pageSize: parseInt(this.page.pageSize)
      };

      //把選項塞進rq
      this.categoryList.forEach(category => {
        // console.log(category);

        let arr = [];

        let inputs = $(".sel:checked[value!=全部]");
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

      let _condition = 0;
      condition.condition.forEach(item => {
        console.log(item);
        if (item.content.length > 0) {
          _condition++;
        }
      });

      if (_condition < 1) {
        $(".list-paging").css("display", "none");
        this.itemList = [];
        this.loading = false;
        return;
      } else {
        $(".list-paging").css("display", "flex");
      }

      console.log("=>>search", condition);
      await this.wait(100);
      let productRes = await axios.post(
        "https://api.waproject-gift.store/api/v1/product/search",
        condition,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      this.loading = false;

      console.log("<<=search", productRes.data);
      this.itemList = productRes.data.list;

      //分頁
      this.page.totalPage = productRes.data.context.total_pages;
      if (this.page.totalPage > 5) {
        this.page.curPagingArr = [1, 2, 3, 4, 5];
      } else {
        this.page.curPagingArr = [];
        for (let index = 1; index < this.page.totalPage + 1; index++) {
          this.page.curPagingArr.push(index);
        }
      }

      for (let index = 1; index <= this.page.totalPage; index++) {
        this.page.intactPagingArr.push(index);
      }

      // this.page.leftClass["list-paging-li-type3"] = true;
      // this.page.leftClass["list-paging-li-type1"] = false;
      this.page.isInit = true;
      this.showPaging();

      if (this.page.totalPage == 1) {
        this.page.leftClass["list-paging-li-type3"] = true;
        this.page.leftClass["list-paging-li-type1"] = false;

        this.page.rightClass["list-paging-li-type3"] = true;
        this.page.rightClass["list-paging-li-type1"] = false;
      } else {
        this.page.leftClass["list-paging-li-type3"] = true;
        this.page.leftClass["list-paging-li-type1"] = false;
      }

      this.loading = false;
    },
    async showItems() {
      let condition = {
        condition: [],
        page: this.page.isInit ? parseInt(this.page.curpaging) : 1,
        pageSize: parseInt(this.page.pageSize)
      };

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

      let allCount = 0;
      for (const category of condition.condition) {
        allCount += category.content.length;
      }

      if (allCount > 0) {
        //送出需求、取得回應

        console.log("==>>search", condition);
        this.loading = true;

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
        this.page.totalPage = productRes.data.context.total_pages;
        this.itemList = productRes.data.list;
      } else {
        console.log("沒有商品");
        this.itemList = [];
      }

      await this.wait(100);
      this.loading = false;
    },
    clickPaging(event) {
      this.page.curpaging = event.target.value;
      this.page.curIdx = event.target.getAttribute("idx");
      this.showPaging(true);
    },
    async showPaging(needUpdateData = false) {
      console.log(
        "=>>>",
        "curIdx:",
        parseInt(this.page.curIdx),
        "curpaging:",
        parseInt(this.page.curpaging),
        "多少頁：",
        this.page.totalPage
      );

      if (this.page.totalPage == 0 || this.itemList.length == 0) {
        $(".list-paging").css("display", "none");
        return;
      } else {
        $(".list-paging").css("display", "flex");
      }

      //切換數字
      if (this.page.curIdx == "-1") {
        //點擊<<

        this.page.curIdx = 0;
        this.page.curpaging = 1;

        //變更當前頁面顏色
        for (let index = 0; index < 5; index++) {
          this.page.idxClass[index]["list-paging-li-type1"] = true;
          this.page.idxClass[index]["list-paging-li-type2"] = false;
        }

        if (this.page.totalPage > 5) {
          this.page.curPagingArr = [1, 2, 3, 4, 5];
        } else {
          this.page.curPagingArr = [];
          for (let index = 1; index <= this.page.totalPage; index++) {
            this.page.curPagingArr.push(index);
          }
        }

        if (parseInt(this.page.curpaging) - 1 > 0) {
          this.page.idxClass[parseInt(this.page.curIdx) + 1][
            "list-paging-li-type1"
          ] = false;
          this.page.idxClass[parseInt(this.page.curIdx) + 1][
            "list-paging-li-type2"
          ] = true;
        } else {
          console.log("到底了，< 換個顏色");

          this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
          this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;
          this.page.leftClass["list-paging-li-type3"] = true;
          this.page.leftClass["list-paging-li-type1"] = false;

          this.page.rightClass["list-paging-li-type3"] = false;
          this.page.rightClass["list-paging-li-type1"] = true;
        }
      } else if (this.page.curIdx == "-2") {
        //點擊>>
        console.log(
          this.page.intactPagingArr[this.page.intactPagingArr.length - 1]
        );
        this.page.curIdx = 4;
        this.page.curpaging = this.page.intactPagingArr[
          this.page.intactPagingArr.length - 1
        ];

        if (this.page.totalPage > 5) {
          this.page.curPagingArr = [];
          for (let x = 0, y = this.page.curpaging - 4; x < 5; x++, y++) {
            this.page.curPagingArr.push(y);
          }
        } else {
          this.page.curPagingArr = [];
          for (let index = 1; index < this.page.totalPage; index++) {
            this.page.curPagingArr.push(index);
          }
        }

        //變更當前頁面顏色
        for (let index = 0; index < 5; index++) {
          this.page.idxClass[index]["list-paging-li-type1"] = true;
          this.page.idxClass[index]["list-paging-li-type2"] = false;
        }

        this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
        this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;

        this.page.leftClass["list-paging-li-type3"] = false;
        this.page.leftClass["list-paging-li-type1"] = true;

        this.page.rightClass["list-paging-li-type3"] = true;
        this.page.rightClass["list-paging-li-type1"] = false;
      } else if (this.page.curIdx == "0") {
        //點擊最左邊的數字
        //變更當前頁面顏色
        for (let index = 0; index < 5; index++) {
          this.page.idxClass[index]["list-paging-li-type1"] = true;
          this.page.idxClass[index]["list-paging-li-type2"] = false;
        }

        // console.log("點擊最左邊的數字");
        if (parseInt(this.page.curpaging) - 1 > 0 && this.page.isInit) {
          let temp = this.page.curPagingArr;
          this.page.curPagingArr = [];
          this.page.curPagingArr = temp;

          for (let index = 0; index < 5; index++) {
            this.page.curPagingArr[index]--;
          }

          this.page.idxClass[parseInt(this.page.curIdx) + 1][
            "list-paging-li-type1"
          ] = false;
          this.page.idxClass[parseInt(this.page.curIdx) + 1][
            "list-paging-li-type2"
          ] = true;

          this.page.rightClass["list-paging-li-type3"] = false;
          this.page.rightClass["list-paging-li-type1"] = true;
        } else if (this.page.totalPage == 1) {
          this.page.curPagingArr = [1];

          this.page.isInit = true;
          console.log("到底了，< 換個顏色");
          this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
          this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;
          this.page.leftClass["list-paging-li-type3"] = true;
          this.page.leftClass["list-paging-li-type1"] = false;

          this.page.rightClass["list-paging-li-type3"] = true;
          this.page.rightClass["list-paging-li-type1"] = false;
        } else {
          this.page.isInit = true;
          console.log("到底了，< 換個顏色");
          this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
          this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;
          this.page.leftClass["list-paging-li-type3"] = true;
          this.page.leftClass["list-paging-li-type1"] = false;

          this.page.rightClass["list-paging-li-type3"] = false;
          this.page.rightClass["list-paging-li-type1"] = true;
        }
      } else if (
        this.page.curIdx == "4" ||
        this.page.curpaging == this.page.totalPage
      ) {
        //點擊最右邊的數字
        //變更當前頁面顏色
        for (let index = 0; index < 5; index++) {
          this.page.idxClass[index]["list-paging-li-type1"] = true;
          this.page.idxClass[index]["list-paging-li-type2"] = false;
        }

        if (
          parseInt(this.page.curpaging) + 1 <=
            this.page.intactPagingArr.length &&
          this.page.curpaging != this.page.totalPage
        ) {
          //還不到底
          let temp = this.page.curPagingArr;
          this.page.curPagingArr = [];
          this.page.curPagingArr = temp;
          for (let index = 0; index < this.page.curPagingArr.length; index++) {
            this.page.curPagingArr[index]++;
          }

          this.page.idxClass[this.page.curIdx - 1][
            "list-paging-li-type1"
          ] = false;
          this.page.idxClass[this.page.curIdx - 1][
            "list-paging-li-type2"
          ] = true;

          this.page.leftClass["list-paging-li-type3"] = false;
          this.page.leftClass["list-paging-li-type1"] = true;
        } else {
          console.log("到底了，> 換個顏色");

          this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
          this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;

          this.page.leftClass["list-paging-li-type3"] = false;
          this.page.leftClass["list-paging-li-type1"] = true;

          this.page.rightClass["list-paging-li-type3"] = true;
          this.page.rightClass["list-paging-li-type1"] = false;
        }
      } else {
        //變更當前頁面顏色
        for (let index = 0; index < 5; index++) {
          this.page.idxClass[index]["list-paging-li-type1"] = true;
          this.page.idxClass[index]["list-paging-li-type2"] = false;
        }
        this.page.idxClass[this.page.curIdx]["list-paging-li-type1"] = false;
        this.page.idxClass[this.page.curIdx]["list-paging-li-type2"] = true;

        this.page.leftClass["list-paging-li-type3"] = false;
        this.page.leftClass["list-paging-li-type1"] = true;

        this.page.rightClass["list-paging-li-type3"] = false;
        this.page.rightClass["list-paging-li-type1"] = true;
      }

      if (needUpdateData) {
        await this.showItems();
      }
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
