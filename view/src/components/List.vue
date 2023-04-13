<template>
  <div id="list">
    <div class="list-title">首頁 / 好禮作品集</div>
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
                v-on:click="clickInput($event)"/><span
                class="checkmark"
              ></span></label
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
                v-on:click="clickInput($event)"/><span
                class="checkmark"
              ></span></label
            ><br />
          </template>
        </template>
      </template>
    </div>
    <div class="list-content">
      <template v-if="itemList.length > 0">
        <template v-for="item in itemList">
          <router-link :to="'/detail/' + item.id">
            <div class="nwrapper">
              <div class="ncard">
                <img :src="item.image" />
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
          <h5>尚無相關作品</h5>
          <br />
          <input
            class="no-item-btn"
            type="button"
            value="清除篩選結果"
            v-on:click="clickClearSel()"
          />
        </div>
      </template>
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
      }
    };
  },
  async created() {
    //取得分類清單的資料
    let categoryRes = await axios.get("http://127.0.0.1:3000/category/");
    // console.log(categoryRes.data.list);
    this.categoryList = categoryRes.data.list;

    //建立一個空的rq模板
    this.categoryList.forEach(category => {
      this.seletInfo.condition.push({
        categoryID: category.categoryID,
        content: new Set()
      });
    });

    this.showItems();
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
    clickClearSel() {
      console.log("點擊清除");
      console.log(this.categoryList);

      // $(".sel").attr("checked", false);
      // $(".sel").empty();
      // $("input[type=checkbox]").attr("checked", false);
      // let inputs = $(".sel").attr("checked", false);

      $("input[type=radio]").each(function() {
        $(this).prop("checked", false); //把所有的核方框的property都取消勾選
      });

      $("input[type=checkbox]").each(function() {
        $(this).prop("checked", false); //把所有的核方框的property都取消勾選
      });

      // let _categoryList = [];

      // this.categoryList.forEach(item => {
      //   _categoryList.push({
      //     sort: item.sort, //左側分類由上往下先後順序，數字越小越前面，【目前暫定寫死】
      //     categoryID: item.categoryID, //分類項目ID，【目前暫定寫死】
      //     categoryTitle: item.categoryTitle,
      //     type: item.type, //單選為0，複選為1，【目前暫定寫死】
      //     content: item.content
      //   });
      // });

      // this.categoryList = null;
      // this.categoryList = _categoryList;
    },
    clickInput(event) {
      this.showItems();
    },
    async showItems() {
      //把選項塞進rq
      this.seletInfo.condition.forEach(category => {
        let inputs = $(".sel:checked[name='" + category.categoryID + "']");
        category.content.clear();
        $.each(inputs, function() {
          category.content.add($(this).val());
        });
      });

      // console.log(this.seletInfo);

      //製作新的rq資料
      let _seletInfo = { condition: [] };
      this.seletInfo.condition.forEach(category => {
        _seletInfo.condition.push({
          categoryID: category.categoryID,
          content: category.content.has("全部") ? [] : [...category.content]
        });
      });

      console.log(_seletInfo);

      //送出需求、取得回應
      let productRes = await axios.post(
        "http://127.0.0.1:3000/product/",
        _seletInfo,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      console.log(productRes.data);
      this.itemList = productRes.data.list;

      // this.itemList.push(1);
      // console.log(this.itemList.length);
    }
  }
};
</script>

<style scoped>
@import url("../style/app.9b6dd939.css");
@import url("../style/items.css");
@import url("../style/newItem.css");
@import url("../style/sel.css");

.no-item {
  margin-top: 150px;
  text-align: center;
}
.no-item-btn {
  /* border: 30px; */
  background-color: #000000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  width: 200px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
}

#list {
  margin-left: 270px;
  margin-top: 170px;
  width: 885px;

  /* background-color: aqua; */
  display: grid;

  grid-template-columns: 130px 760px;
  grid-template-rows: 50px auto;
  grid-gap: 5px;
}

.list-title {
  grid-column: 1 / 2;
  grid-row: 1;
  /* background-color: rgb(255, 242, 0); */
}
.list-category {
  grid-column: 1;
  grid-row: 2 / 2;

  /* background-color: rgb(255, 140, 0); */
}
.list-content {
  grid-column: 2 / 2;
  grid-row: 2 / 2;

  /* background-color: rgb(255, 0, 208); */
}

.category-title {
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  /* margin-bottom: 10px; */
}

/* .sel-lab {
  font-size: 18px;
}
.sel {
  margin-top: 20px;
  margin-right: 6px;

  width: 20px;
  height: 20px;
} */

/* .sel:checked {
  background-color: #1061bd;
  font-size: 18px;
} */
</style>

<!--
<畫面右側分類 API>request method get
{
  "list": [
    {
      "sort": 0, //左側分類由上往下先後順序，數字越小越前面，【目前暫定寫死】
      "categoryID":0//分類項目ID，【目前暫定寫死】
      "categoryTitle": "廠業",
      "type": 0, //單選為0，複選為1，【目前暫定寫死】
      "content": ["物流業", "餐飲業","建築業"]
    },
    {
      "sort": 1,
      "categoryID":1
      "categoryTitle": "形狀",
      "type": 1,
      "content": ["立方體", "長方體", "圓錐體"]
    }
  ]
} 

（獲取所有產品訊息 POST  /product）的變更 request，我先出一個版本而後根據後端想法再另行改變設計再通知前端:
{
  "condition": [
    { "categoryID": 0, "content": ["餐飲業", "建築業"] },
    { "categoryID": 1, "content": ["長方體"] }
  ]
}

<response>
{
  "list": [
    {
      "name": "important",
      "subtitle": "subtitle",
      "detail": {
        "content": "content",
        "cost": 23,
        "size": "large",
        "remark": "remark"
      },
      "images": "https://s.yimg.com/cv/apiv2/twfrontpage/logo/Yahoo-TW-desktop-FP@2x.png"
    }
  ]
}

-->
