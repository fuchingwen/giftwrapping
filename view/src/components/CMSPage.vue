<template>
  <div>
    <p>標題:</p>
    <p><input type="text" name="name" v-model="title" /></p>

    <p>副標:</p>
    <p><input name="species" type="text" v-model="subtitle" /></p>

    <p>價格:</p>
    <p><input name="species" type="text" v-model="cost" /></p>

    <p>尺寸:</p>
    <p><input name="species" type="text" v-model="size" /></p>

    <p>簡介:</p>
    <p>
      <textarea
        name="comments"
        rows="5"
        cols="100"
        v-model="content"
      ></textarea>
    </p>

    <p>備註:</p>
    <p>
      <textarea name="comments" rows="5" cols="100" v-model="remark"></textarea>
    </p>
    <p>商品曝光優先度(數字越小優先度越大):</p>
    <p>
      <label
        >1<input type="radio" name="priority" v-model="priority" value="1"
      /></label>
      <label
        >2<input type="radio" name="priority" v-model="priority" value="2"
      /></label>
      <label
        >3<input type="radio" name="priority" v-model="priority" value="3"
      /></label>
      <label
        >4<input type="radio" name="priority" v-model="priority" value="4"
      /></label>
      <label
        >5<input type="radio" name="priority" v-model="priority" value="5"
      /></label>
    </p>
    <p>選擇分類:</p>

    <template v-for="category in categoryList">
      <h4>{{ category.categoryTitle + ":" }}</h4>
      <template v-for="content in category.content">
        <label
          >{{ content.name }}
          <template v-if="content.isCheck">
            <input
              class="categoryInput"
              :type="category.type == 0 ? 'radio' : 'checkbox'"
              :data-category-id="category.categoryID"
              :value="content.name"
              checked
            />
          </template>
          <template v-else>
            <input
              class="categoryInput"
              :type="category.type == 0 ? 'radio' : 'checkbox'"
              :data-category-id="category.categoryID"
              :value="content.name"
            />
          </template> </label
        ><br />
      </template>
    </template>

    <div class="page-upload">
      <input type="file" @change="handleFileUpload" name="0" />
      <img ref="img0" class="page-imgStyle" :src="imgs[0].url" />
      <a :href="imgs[0].url">{{ imgs[0].length > 0 ? "圖片連接" : "" }}</a>
    </div>
    <div class="page-upload">
      <input type="file" @change="handleFileUpload" name="1" />
      <img ref="img1" class="page-imgStyle" :src="imgs[1].url" />
      <a :href="imgs[1].url">{{ imgs[1].length > 0 ? "圖片連接" : "" }}</a>
    </div>
    <div class="page-upload">
      <input type="file" @change="handleFileUpload" name="2" />
      <img ref="img2" class="page-imgStyle" :src="imgs[2].url" />
      <a :href="imgs[2].url">{{ imgs[2].length > 0 ? "圖片連接" : "" }}</a>
    </div>
    <div class="page-upload">
      <input type="file" @change="handleFileUpload" name="3" />
      <img ref="img3" class="page-imgStyle" :src="imgs[3].url" />
      <a :href="imgs[3].url">{{ imgs[3].length > 0 ? "圖片連接" : "" }}</a>
    </div>

    <p><button v-on:click="sendInfo()">送出資料</button></p>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      isNew: false,
      id: -1,
      title: "",
      subtitle: "",
      cost: 0,
      content: "",
      remark: "",
      content: "",
      size: "",
      categoryList: [
        {
          sort: 0,
          categoryID: 0,
          categoryTitle: "產業",
          type: 1,
          content: [
            { name: "時尚精品", isCheck: false },
            { name: "餐飲", isCheck: false },
            { name: "食品製造", isCheck: false },
            { name: "酒類", isCheck: false },
            { name: "旅館飯店", isCheck: false }
          ]
        },
        {
          sort: 1,
          categoryID: 1,
          categoryTitle: "用途",
          type: 1,
          content: [
            { name: "節慶活動", isCheck: false },
            { name: "紀念贈禮", isCheck: false },
            { name: "商品售賣", isCheck: false },
            { name: "三節禮盒", isCheck: false }
          ]
        }
      ],
      categoryOpt: [],
      imgs: [
        {
          id: 0,
          url: "string"
        },
        {
          id: 0,
          url: "string"
        },
        {
          id: 0,
          url: "string"
        },
        {
          id: 0,
          url: "string"
        }
      ],
      priority: 1
    };
  },
  async created() {
    console.log(this.$route.params.id);
    if (this.$route.params.id != "new") {
      this.isNew = false;
      console.log("這是即將要修改的頁面");
      let rs = await axios.get(
        "https://api.waproject-gift.store/api/v1/product/" +
          this.$route.params.id,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let info = rs.data;
      console.log(info);

      this.title = info.context.name;
      this.subtitle = info.context.subtitle;
      this.cost = info.context.detail.cost;
      this.size = info.context.detail.size;
      this.content = info.context.detail.content;
      this.remark = info.context.detail.remark;
      this.priority = info.context.priority;
      let userCategoryList = info.context.category;

      this.categoryList.forEach(category => {
        category.content.forEach(content => {
          userCategoryList.forEach(userCategory => {
            if (
              category.categoryID == userCategory.categoryID &&
              content.name == userCategory.content
            ) {
              content.isCheck = true;
            }
          });
        });
      });

      for (let index = 0; index < info.context.image.length; index++) {
        this.imgs[index].url = info.context.image[index].url;
      }

      // console.log(this.categoryList);
    } else {
      this.isNew = true;
    }
  },
  methods: {
    async handleFileUpload(event) {
      const formData = new FormData();
      // 将文件数据添加到 FormData 中
      formData.append("file", event.target.files[0]);
      formData.append("type", 1);
      // 这里可以将formData发送到服务器进行处理

      let rs = await axios.post(
        "https://api.waproject-gift.store/api/v1/upload/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      let s = this.imgs;
      this.imgs = [];
      this.imgs = s;
      console.log(rs.data.context.file_access_url);
      // console.log(event.target.value);
      this.imgs[event.target.name] = {
        url: rs.data.context.file_access_url
      };
      // console.log(this.$refs["img" + event.target.id]);
      // console.log(event.target.name);
      // const myDiv = this.$refs["img" + event.target.value];
      console.log(this.imgs);
    },
    clickCategory(event) {
      console.log("categoryId:", event.target.dataset["categoryId"]);
      console.log("value:", event.target.value);
    },
    async sendInfo() {
      let rq = {
        id: parseInt(this.$route.params.id),
        category: [],
        detail: {
          content: this.content,
          cost: this.cost,
          remark: this.remark ? this.remark : "",
          size: this.size
        },
        image: [
          {
            id: 0,
            url: "string"
          }
        ],
        name: this.title,
        priority: this.priority,
        subtitle: this.subtitle
      };

      $(".categoryInput:checked").each(function() {
        console.log($(this));
        rq.category.push({
          categoryID: parseInt($(this).attr("data-category-id")),
          content: $(this).attr("value")
        });
      });

      let imgs = [];
      this.imgs.forEach(img => {
        if (img.url != "string") {
          imgs.push(img);
        }
      });
      rq.image = imgs;

      console.log("send", rq);
      if (this.isNew) {
        //new
        let productRes = await axios.post(
          "https://api.waproject-gift.store/api/v1/product",
          rq,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        console.log(productRes);
      } else {
        //update
        let productRes = await axios.post(
          "https://api.waproject-gift.store/api/v1/product/update/" +
            this.$route.params.id,
          rq,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (productRes.status == 200) {
          alert("更新或新增完成！");
        } else {
          alert("更新或新增沒有完成");
        }
        console.log(productRes);
      }
    }
  }
};
</script>
<style scoped>
.page-imgStyle {
  width: 148px;
  height: 121px;
}
</style>
