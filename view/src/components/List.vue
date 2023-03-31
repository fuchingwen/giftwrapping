<template>
  <div id="list">
    <div id="list-menu">
      <div id="tab-demo">
        <ul class="tab-title233">
          <!-- <li><a href="#全部">全部</a></li> -->
          <!-- <li v-for="category in itemList">
            <a :href="'#' + category.tebName">{{ category.tebName }}</a>
          </li> -->

          <li><a value="#全部">全部</a></li>
          <li><a value="#上下蓋">上下蓋</a></li>
          <li><a value="#精裝禮盒">精裝禮盒</a></li>
          <li><a value="#木盒">木盒</a></li>
        </ul>

        <!-- <div id="全部" class="tab-inner">
          <div class="row">
            <div class="example-1 card">全部</div>
          </div>
        </div>
        <div id="上下蓋" class="tab-inner">
          <div class="row">
            <div class="example-1 card">上下蓋</div>
          </div>
        </div>
        <div id="精裝紙盒" class="tab-inner">
          <div class="row">
            <div class="example-1 card">精裝紙盒</div>
          </div>
        </div> -->

        <!--         <div v-for="teb in itemList" :id="teb.tebName" class="tab-inner">
          <div class="row">
            <div class="example-1 card">ws</div>
          </div>
        </div> -->

        <div id="全部" class="tab-inner">
          <div class="row">
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/d1f899d824bcc921125f27cdf7c0c648.png"
                      />
                      <h3 class="title">
                        抽屜紙盒
                      </h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/239a5c18bc4d631b7552d08de0fb9881.png"
                      />
                      <h3 class="title">
                        抽屜紙盒
                      </h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/6e517269006d126cda9b9ff9b9bb9639.png"
                      />
                      <h3 class="title">
                        抽屜紙盒
                      </h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'"
                      ><img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">
                        產品外包裝
                      </h3>
                      <p class="subtitle">Act+ Acre 純淨無暇保養外包裝</p>
                      <p class="text">
                        以簡約的灰白色呈現品牌的乾淨無瑕感
                        如同清潔保養後的水煮蛋純淨肌膚。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">產品外包裝</h3>
                      <p class="subtitle">Act+ Acre 純淨無暇保養外包裝</p>
                      <p class="text">
                        以簡約的灰白色呈現品牌的乾淨無瑕感
                        如同清潔保養後的水煮蛋純淨肌膚。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">
                        產品外包裝
                      </h3>
                      <p class="subtitle">Act+ Acre 純淨無暇保養外包裝</p>
                      <p class="text">
                        以簡約的灰白色呈現品牌的乾淨無瑕感
                        如同清潔保養後的水煮蛋純淨肌膚。
                      </p></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/0319c3391b681fe0f2bc350ba18c88be.png"
                      />
                      <h3 class="title">限定活動禮盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/0fb54c8df2ac06a9052ae3e31ec11413.png"
                      />
                      <h3 class="title">限定活動禮盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/f226a29b339ec4c66ea48af839619276.png"
                      />
                      <h3 class="title">限定活動禮盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="上下蓋" class="tab-inner">
          <div class="row">
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/239a5c18bc4d631b7552d08de0fb9881.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/239a5c18bc4d631b7552d08de0fb9881.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/239a5c18bc4d631b7552d08de0fb9881.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="精裝禮盒" class="tab-inner">
          <div class="row">
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/f226a29b339ec4c66ea48af839619276.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/f226a29b339ec4c66ea48af839619276.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/f226a29b339ec4c66ea48af839619276.png"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="木盒" class="tab-inner">
          <div class="row">
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">
                        <router-link :to="'/detail/1'">抽屜紙盒</router-link>
                      </h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="example-1 card">
              <div class="wrapper233">
                <div class="data233">
                  <div class="content233">
                    <router-link :to="'/detail/1'">
                      <img
                        src="../assets/14d50e72ceebd656ad91e2a24338a9f9.jpg"
                      />
                      <h3 class="title">抽屜紙盒</h3>
                      <p class="subtitle">mildee 溫柔洗護產品包裝</p>
                      <p class="text">
                        設計以三個英文字「i」為主體造形去
                        呈現簡單簡約、不失質感的品牌形象。
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="a">{{ items }}</div> -->
    <!-- <div id="list-foot">這是作品集列表 © 2023 Yahoo. All rights reserved.</div> -->
  </div>
</template>

<script scoped>
import axios from "axios";
import $ from "jquery";

export default {
  name: "HelloWorld",
  data() {
    // this.itemList = [{ id: 1 }, { id: 2 }, { id: 3 }];
    return {
      itemList: [],
      tebs: []
    };
  },

  watch: {},
  async created() {
    return;
    let res = await axios.post("http://127.0.0.1:3000/product/");
    this.tebs = new Set();

    res.data.forEach(item => {
      item.category.forEach(category => {
        this.tebs.has(category) ? null : this.tebs.add(category);
      });
    });

    this.itemList.push({ tebName: "全部", content: [] });
    this.tebs.forEach(_teb => {
      // console.log(_teb);
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
              remark: item.detail.remark
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
                remark: item.detail.remark
              },
              category: item.category,
              images: item.images
            });
          }
        });
      }
    });

    console.log(this.itemList);
  },
  setup() {
    // itemList = [];
    // this.itemList = [];
    // axios.post("http://127.0.0.1:3000/product/").then(res => {
    //   console.log(res.data);
    //   this.itemList = res.data;
    // });
    return {};
  },

  mounted() {
    //这里面写初始化的Jquery，在生命周期的mount阶段才有用。
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

    $(document).ready(function() {
      // 捲軸偵測距離頂部超過 50 才顯示按鈕
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}

/* 內容 */
#tab-demo > .tab-inner {
  /* clear: both; */
  color: #000;
  width: 885px;
  padding: 30px 0 0 0;
  /* border: 1px #bcbcbc solid; */
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
</style>
