<template>
  <div>
    <div class="cms-item-menu">
      <div class="cms-item-menu-left">
        <button class="button" v-on:click="del()">刪除</button>
      </div>
      <div class="cms-item-menu-fight">
        <button class="button" v-on:click="add($event)">新增</button>
      </div>
    </div>
    <div class="cms-item-wrap">
      <table class="cms-item-table">
        <colgroup>
          <col style="width: 3%;" />
          <col style="width: 15%;" />
          <col style="width: 20%;" />
          <col style="width: 3%;" />
          <col style="width: 5%;" />
          <col style="width: 15%;" />
          <col style="width: 10%;" />
        </colgroup>
        <tr>
          <th>選擇</th>
          <th>圖片</th>
          <th>標題<br />副標題</th>
          <th>價格</th>
          <th>優先度</th>
          <th>分類標籤</th>
          <th>編輯</th>
        </tr>
        <tr v-for="(item, idx) in list">
          <td><input type="checkbox" :value="item.id" /></td>
          <td>
            <img class="imgStyle" v-for="img in item.image" :src="img.url" />
          </td>
          <td>
            <div class="cms-item-table-name">{{ item.name }}</div>
            <br />{{ item.subtitle }}
          </td>
          <td>{{ item.detail.cost }}</td>
          <td>{{ item.priority }}</td>
          <td>
            <template v-for="(sin, idx) in item.category">
              {{ sin.content }},
            </template>
          </td>
          <td>
            <button class="button" :value="item.id" v-on:click="edit($event)">
              編輯
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script scoped>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    let productRes = await axios.get(
      "https://api.waproject-gift.store/api/v1/product",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    this.list = productRes.data.context;
    console.log("<<<", this.list);
  },
  methods: {
    del() {
      let delArr = [];
      $("input[type=checkbox]:checked").each(function() {
        delArr.push(parseInt(this.value));
      });
      this.list = this.list.filter(e => {
        return delArr.indexOf(e.id) > -1;
      });

      console.log(this.list);

      //TODO:del API
    },
    edit(event) {
      console.log(event.target.value);
      this.$router.push("/cms/page/" + event.target.value);
    },
    add(event) {
      console.log(event);
      this.$router.push("/cms/page/new");
    }
  }
};
</script>
<style scoped>
.cms-item-table-name {
  font-weight: bold;
}

.cms-item-menu {
  display: flex;
  justify-content: space-between;
}

/* 表格樣式 */
.cms-item-wrap {
  margin-top: 5px;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.cms-item-table {
  font-family: "Oswald", sans-serif;
  border-collapse: separate;
  width: 100%;
  border-spacing: 0;
  border: 1px solid #6b675d;
}

.cms-item-table th {
  background-color: #3a70aa;
  color: #ffffff;
  width: 25vw;
  height: 50px;
}

.cms-item-table td {
  width: 1%;
  height: 30px;
  background-color: rgb(243, 243, 243);
  text-align: center;
}
.imgStyle {
  width: 50px;
  height: 50px;
}
.cms-item-ul li {
  display: list-item;
}
</style>
