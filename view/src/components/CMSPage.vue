<template>
  <div>
    <h2>標題:</h2>
    <Input maxlength="20" show-word-limit name="name" v-model="title" />

    <h2>副標:</h2>
    <Input
      v-model="subtitle"
      maxlength="20"
      show-word-limit
      name="species"
      type="text"
    />

    <h2>簡介:</h2>
    <Input
      v-model="content"
      type="textarea"
      placeholder="簡介"
      name="comments"
      cols="100"
    />
    <p></p>

    <h2>單一尺寸:</h2>
    <p>
      <Input name="species" type="text" v-model="size" />
    </p>

    <h2>價格區間:</h2>
    <p>
      <Input name="species" type="text" v-model="cost" />
    </p>

    <h2>款式種類:</h2>
    <Input
      v-model="style"
      type="textarea"
      placeholder="款式種類"
      name="comments"
      cols="100"
    />

    <h2>備註:</h2>
    <p>
      <Input type="textarea" name="comments" cols="100" v-model="remark" />
    </p>
    <h2>商品曝光優先度(數字越小優先度越大):</h2>
    <RadioGroup v-model="priority">
      <Radio label="1"></Radio>
      <Radio label="2"></Radio>
      <Radio label="3"></Radio>
      <Radio label="4"></Radio>
      <Radio label="5"></Radio>
    </RadioGroup>
    <h2>選擇分類:</h2>

    <!-- <template v-for="category in categoryList">
      <h4>{{ category.categoryTitle + ":" }}</h4>
      <CheckboxGroup v-model="fruit">
        <template v-if="content.isCheck">
          <CheckboxGroup v-model="fruit">
            <template v-for="content in category.content"></template>
          </CheckboxGroup>
        </template>
        <template v-else> </template>

        <template v-for="content in category.content">
          <template v-if="content.isCheck">
            <CheckboxGroup v-model="categoryOpt.p">
              <template v-for="content in category.content">
                <Checkbox :label="content.name"></Checkbox>
              </template>
            </CheckboxGroup>
          </template>
          <template v-else>
            <Radio :label="content.name"></Radio>
          </template>
        </template>
      </CheckboxGroup>
    </template> -->

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

    <div class="demo-upload-list" v-for="item in uploadList">
      <template v-if="item.status === 'finished'">
        <img :src="item.url" />
        <div class="demo-upload-list-cover">
          <Icon
            type="ios-eye-outline"
            @click.native="handleView(item.name)"
          ></Icon>
          <Icon
            type="ios-trash-outline"
            @click.native="handleRemove(item)"
          ></Icon>
        </div>
      </template>
      <template v-else>
        <Progress
          v-if="item.showProgress"
          :percent="item.percentage"
          hide-info
        ></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg', 'jpeg', 'png']"
      :max-size="2048"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      action="//api.waproject-gift.store/api/v1/upload/file/"
      style="display: inline-block;width:58px;"
    >
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="ios-camera" size="20"></Icon>
      </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
      <img
        :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'"
        v-if="visible"
        style="width: 100%"
      />
    </Modal>
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
      uploadList: []
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
        subtitle: this.subtitle
      };

      if (!this.isNew) {
        rq.id = parseInt(this.$route.params.id);
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

.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
