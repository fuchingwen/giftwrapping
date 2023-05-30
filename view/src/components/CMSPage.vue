<template>
  <div>
    <h2>標題:</h2>
    <Input maxlength="20" show-word-limit name="name" v-model="title" />
    <br /><br />
    <h2>副標:</h2>
    <Input
      v-model="subtitle"
      maxlength="20"
      show-word-limit
      name="species"
      type="text"
    />
    <br /><br />
    <h2>簡介:</h2>
    <Input
      v-model="content"
      type="textarea"
      placeholder="簡介"
      name="comments"
      cols="100"
    />
    <br /><br />

    <h2>單一尺寸:</h2>

    <Input name="species" type="text" v-model="size" />
    <br /><br />

    <h2>價格區間:</h2>

    <Input name="species" type="text" v-model="cost" />
    <br /><br />

    <h2>款式種類:</h2>
    <Input
      v-model="style"
      type="textarea"
      placeholder="款式種類"
      name="comments"
      cols="100"
    />
    <br /><br />

    <h2>備註:</h2>

    <Input type="textarea" name="comments" cols="100" v-model="remark" />
    <br /><br />

    <h2>商品曝光優先度(數字越小優先度越大):</h2>
    <RadioGroup v-model="priority">
      <Radio label="1"></Radio>
      <Radio label="2"></Radio>
      <Radio label="3"></Radio>
      <Radio label="4"></Radio>
      <Radio label="5"></Radio>
    </RadioGroup>
    <br /><br />
    <h2>選擇分類:</h2>
    <template v-for="category in categoryList">
      <h4>{{ category.categoryTitle + ":" }}</h4>
      <template v-for="content in category.content">
        <label>
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
          </template>
          {{ content.name }}</label
        >
        <br />
      </template>
    </template>
    <br />
    <br />
    <h2>圖片</h2>

    <!-- <template v-for="(img, idx) in imgs">
      <div class="page-upload">
        <Button type="error" v-on:click="handleFileDel(idx)">刪除</Button>
        <input type="file" @change="handleFileUpload" :name="idx" />
        <img
          :id="'a0' + idx"
          :ref="'img' + idx"
          class="page-imgStyle"
          :src="imgs[idx].url"
        />
      </div>
    </template> -->

    <div class="page-upload">
      <Button type="error" v-on:click="handleFileDel(0)">刪除</Button>
      <input type="file" @change="handleFileUpload" name="0" />
      <img id="a0" ref="img0" class="page-imgStyle" :src="imgs[0].url" />
    </div>

    <div class="page-upload">
      <Button type="error" v-on:click="handleFileDel(1)">刪除</Button>
      <input type="file" @change="handleFileUpload" name="1" />
      <img id="a1" ref="img1" class="page-imgStyle" :src="imgs[1].url" />
    </div>

    <div class="page-upload">
      <Button type="error" v-on:click="handleFileDel(2)">刪除</Button>
      <input type="file" @change="handleFileUpload" name="2" />
      <img id="a2" ref="img2" class="page-imgStyle" :src="imgs[2].url" />
    </div>

    <div class="page-upload">
      <Button type="error" v-on:click="handleFileDel(3)">刪除</Button>
      <input type="file" @change="handleFileUpload" name="3" />
      <img id="a3" ref="img3" class="page-imgStyle" :src="imgs[3].url" />
    </div>

    <br />
    <p><Button type="success" v-on:click="sendInfo()">送出資料</Button></p>
    <br />

    <div v-if="loading" class="overlay">
      <div class="spinner"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      loading: false,
      isNew: false,
      id: -1,
      title: "",
      subtitle: "",
      cost: "",
      content: "",
      remark: "",
      content: "",
      size: "",
      style: "",
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
          url: require("@/assets/icon_empty state.png")
        },
        {
          id: 0,
          url: require("@/assets/icon_empty state.png")
        },
        {
          id: 0,
          url: require("@/assets/icon_empty state.png")
        },
        {
          id: 0,
          url: require("@/assets/icon_empty state.png")
        }
      ],
      imagesToDelete: [],
      priority: 1,
      ////////imgs
      defaultList: [
        {
          name: "a42bdcc1178e62b4694c830f028db5c0",
          url:
            "https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"
        },
        {
          name: "bc7521e033abdd1e92222d733590f104",
          url:
            "https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"
        }
      ],
      imgName: "",
      visible: false,
      uploadList: [],
      uploadHeader: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      },
      uploadData: {
        type: 1
      }
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
      this.priority = info.context.priority.toString();
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
        this.imgs[index].id = info.context.image[index].id;
        this.imgs[index].url = info.context.image[index].url;
      }

      // this.imgs = info.context.image;

      console.log(this.imgs);
    } else {
      this.isNew = true;
    }
  },
  methods: {
    handleFileDel(idx) {
      console.log("1111111111111");
      switch (idx) {
        case 0:
          document
            .getElementById(`a0`)
            .setAttribute("src", require("@/assets/icon_empty state.png"));
          break;
        case 1:
          document
            .getElementById(`a1`)
            .setAttribute("src", require("@/assets/icon_empty state.png"));
          break;
        case 2:
          document
            .getElementById(`a2`)
            .setAttribute("src", require("@/assets/icon_empty state.png"));
          break;
        case 3:
          document
            .getElementById(`a3`)
            .setAttribute("src", require("@/assets/icon_empty state.png"));
          break;
        default:
          break;
      }
      // = "../assets/loadingIMH.png";
      // .setAttribute("src", "../assets/l");
      // console.log(document.getElementById("a1"));
      // return;

      // this.imgs[idx].url = "string";

      console.log(idx);

      if (this.imgs[idx].hasOwnProperty("id")) {
        this.imagesToDelete.push(this.imgs[idx].id);
      }

      this.imgs[idx] = {
        id: 0,
        url: require("@/assets/icon_empty state.png")
      };

      console.log(this.imgs);
    },
    async handleFileUpload(event) {
      this.loading = true;
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

      if (this.imgs[parseInt(event.target.name)].id == 0) {
        //new
        this.imgs[parseInt(event.target.name)] = {
          url: rs.data.context.file_access_url
        };
      } else {
        //update
        this.imgs[parseInt(event.target.name)].url =
          rs.data.context.file_access_url;
      }

      // console.log(this.$refs["img" + event.target.id]);
      // console.log(event.target.name);
      // const myDiv = this.$refs["img" + event.target.value];
      console.log(this.imgs);

      this.loading = false;
    },
    clickCategory(event) {
      console.log("categoryId:", event.target.dataset["categoryId"]);
      console.log("value:", event.target.value);
    },
    async sendInfo() {
      console.log("click send");
      if (this.imgs.length < 1) {
        alert("抱歉沒有任何一張圖！");
        return;
      }

      this.id = parseInt(this.$route.params.id);

      let rq = {
        category: [],
        detail: {
          content: this.content,
          cost: this.cost,
          remark: this.remark ? this.remark : "",
          size: this.size,
          style: this.style
        },
        image: [
          {
            id: 0,
            url: "string"
          }
        ],
        name: this.title,
        priority: this.priority,
        subtitle: this.subtitle,
        imagesToDelete: this.imagesToDelete
      };

      if (!this.isNew) {
        rq.id = this.id;
      }

      $(".categoryInput:checked").each(function() {
        console.log($(this));
        rq.category.push({
          categoryID: parseInt($(this).attr("data-category-id")),
          content: $(this).attr("value")
        });
      });

      let _newCategory = {};
      for (let index = 0; index < rq.category.length; index++) {
        if (_newCategory[rq.category[index].categoryID]) {
          _newCategory[rq.category[index].categoryID].content.push(
            rq.category[index].content
          );
        } else {
          _newCategory[rq.category[index].categoryID] = {
            content: [rq.category[index].content]
          };
        }
      }

      let newCategory = [];
      for (const key in _newCategory) {
        newCategory.push({
          categoryID: parseInt(key),
          content: _newCategory[key].content
        });
      }
      rq.category = newCategory;
      rq.priority = parseInt(rq.priority);

      let imgs = [];
      this.imgs.forEach(img => {
        if (img.id != 0) {
          imgs.push(img);
        }
      });

      rq.image = imgs;
      console.log("更新誰：", this.id);
      console.log("request:", rq);

      if (rq.category.length < 1) {
        alert("請挑選分類");
        return;
      }

      if (rq.image.length < 1) {
        alert("請給一張商品圖");
        return;
      }

      // return;
      let productRes;
      if (this.isNew) {
        //new
        productRes = await axios.post(
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
        productRes = await axios.post(
          "https://api.waproject-gift.store/api/v1/product/update/" + this.id,
          rq,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }

      console.log("response:", productRes);

      if (productRes.status == 200) {
        alert("已完成！");
      } else {
        alert("沒有完成！");
      }
    },
    ////////
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      console.log("ssssssssssssssss");

      return;
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList;
    }
  }
};
</script>
<style scoped>
.page-imgStyle {
  width: 148px;
  height: 121px;
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

button {
  background-color: #3a4182; /* Green */
  border: none;
  color: white;
  padding: 3px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
}
</style>
