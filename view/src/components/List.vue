<template>
  <div id="list">
    <div id="list-menu">
      <div id="tab-demo">
        <ul class="tab-title233">
          <li v-for="category in itemList">
            <a :value="'#' + category.tebName">{{ category.tebName }}</a>
          </li>

          <!-- <li><a value="#全部">全部</a></li>
          <li><a value="#上下蓋">上下蓋</a></li>
          <li><a value="#精裝禮盒">精裝禮盒</a></li>
          <li><a value="#木盒">木盒</a></li> -->
        </ul>

        <template v-for="(teb, index) in itemList">
          <div :id="teb.tebName" class="tab-inner">
            <div class="row">
              <template v-for="(item, index) in teb.content">
                <div class="example-1 card">
                  <div class="wrapper233">
                    <div class="data233">
                      <div class="content233">
                        <router-link :to="'/detail/' + item.id">
                          <img :src="item.images[0]" />
                          <h3 class="title">{{ item.name }}</h3>
                          <p class="subtitle">{{ item.detail.subtitle }}</p>
                          <p class="text">
                            {{ item.detail.content }}
                          </p>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
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
      itemList: []
    };
  },
  async created() {
    let res = await axios.post("http://127.0.0.1:3000/product/");
    this.tebs = new Set();

    res.data.forEach(item => {
      item.category.forEach(category => {
        this.tebs.has(category) ? null : this.tebs.add(category);
      });
    });

    this.itemList.push({ tebName: "全部", content: [] });
    this.tebs.forEach(_teb => {
      this.itemList.push({ tebName: _teb, content: [] });
    });

    this.itemList.forEach(_teb => {
      if (_teb.tebName == "全部") {
        res.data.forEach(item => {
          _teb.content.push({
            id: item.id,
            name: item.name,
            detail: {
              content: item.detail.content,
              cost: item.detail.cost,
              size: item.detail.size,
              remark: item.detail.remark,
              subtitle: item.detail.subtitle
            },
            category: item.category,
            images: item.images
          });
        });
      } else {
        res.data.forEach(item => {
          if (item.category.includes(_teb.tebName)) {
            _teb.content.push({
              id: item.id,
              name: item.name,
              detail: {
                content: item.detail.content,
                cost: item.detail.cost,
                size: item.detail.size,
                remark: item.detail.remark,
                subtitle: item.detail.subtitle
              },
              category: item.category,
              images: item.images
            });
          }
        });
      }
    });

    $(function() {
      var $li = $("ul.tab-title233 li");
      $(
        $li
          .eq(0)
          .addClass("active")
          .find("a")
          .attr("value")
      )
        .siblings(".tab-inner")
        .hide();
      $li.click(function() {
        $(
          $(this)
            .find("a")
            .attr("value")
        )
          .show()
          .siblings(".tab-inner")
          .hide();
        $(this)
          .addClass("active")
          .siblings(".active")
          .removeClass("active");
      });
    });
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../style/newItem.css"); */

@import url("../style/app.9b6dd939.css");
@import url("../style/items.css");
a {
  text-decoration: none;
}

/* TAB start ====================================== */

#tab-demo {
  width: 885px;
  /* background-color: #ff0000; */
}
#tab-demo > ul {
  display: block;
  margin: 40px 0 0 -40px;
  list-style: none;
}
.tab-title233 {
  list-style: none;
  font-weight: bold;
  padding-left: 40px;
}

/* 分頁按鈕狀態 */
#tab-demo > ul > li {
  display: inline-block;
  vertical-align: top;
  font-family: "微軟正黑體";
  /* margin: 40px 0 0 0; */
  /* border: 1px solid #3131a5; */
  height: 34px;
  line-height: 34px;
  /* background: #cdcdcd; */
  padding: 0 15px;
  /* list-style: none; */
  /* box-sizing: border-box; */
}
#tab-demo > ul > li a {
  color: #000000;
  /* text-decoration: none; */
}
#tab-demo > ul > li.active a {
  color: #f2f0ed;
}

/* 點擊當前分頁 */
#tab-demo > ul > li.active {
  /* border-bottom: 1px solid #fff; */
  background: #000000;
  border-radius: 5px;
}

#tab-demo .text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
}

/* 內容 */
.tab-inner {
  /* color: #000; */
  width: 885px;
  padding: 30px 0 0 0;
  /* background-color: #ff0000; */
}
/* .tab-inner {
  padding: 15px;
  height: 50px;
} */
/* TAB end ====================================== */

/* 按鈕start */
.list-menu-content-ul {
  padding: 0; /*清單左側會多約40px要消除*/
  width: 800px;
  display: flex;
  justify-content: space-evenly; /*內容物水平均分*/
  list-style: none; /*消除清單的左側的圓點*/
}
.list-menu-content-li {
  background-color: #ffffff;
  /*   padding: 0px 0px; */
  /* margin: 20px 0px; */
  text-align: center;
}
.list-menu-content-li:visited {
  /* :active是滑鼠點擊元素的狀態 */
  /* transform: scale(1);
  box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.2); */
  color: #ff0000;
}

#list-menu {
  display: flex;
  justify-content: center;
}
#list-menu-content {
  width: 880px;
  height: 50px;
  background-color: rgb(189, 189, 233);
}
#list-menu-content ul li {
  width: 110px;
  float: left;
}

.subtitle {
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
