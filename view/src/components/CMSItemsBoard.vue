<template>
  <div>
    <div class="cms-item-menu">
      <div class="cms-item-menu-left">
        <div style="margin-bottom: 10px;">
          <!-- <button type="error" v-on:click="multiRemove()">選擇的都刪除</Button> -->
        </div>
      </div>
      <div class="cms-item-menu-fight" style="margin-bottom: 10px;">
        <button type="success" v-on:click="add()">新增</button>
      </div>
    </div>

    <Table
      class="cms-item-wrap"
      border
      ref="selection"
      :columns="columns"
      :data="data"
    >
      <template #name="{ row }">
        <strong>{{ row.name }}</strong>
      </template>

      <template #cost="{ row }">
        <strong v-html="row.cost"></strong>
      </template>

      <template #action="{ row, index }">
        <button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="edit(index)"
        >
          編輯
        </button>
        <button type="error" size="small" @click="modal = true">刪除</button>
        <Modal
          v-model="modal"
          title="詢問視窗"
          @on-ok="ok(index)"
          @on-cancel="cancel"
        >
          <p>請問確定要刪除？{{ row.name }}</p>
        </Modal>
      </template>
    </Table>
  </div>
</template>
<script scoped>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      delIdx: -1,
      modal: false,
      columns: [
        // {
        //   type: "selection",
        //   width: 60,
        //   align: "center"
        // },
        // {
        //   title: "Index",
        //   key: "idx",
        //   width: 40,
        //   align: "center"
        // },
        {
          title: "ID",
          key: "id",
          width: 80,
          align: "center"
        },
        {
          title: "曝光度",
          key: "priority",
          width: 80,
          align: "center"
        },
        {
          title: "商品標題",
          key: "name",
          width: 150
        },
        {
          title: "價格區間",
          key: "cost"
        },
        {
          title: "分類標籤",
          key: "categoryStr"
        },
        {
          title: "動作",
          key: "action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data: [
        {
          id: 16,
          priority: 1,
          subtitle: "Saint Jane",
          name: "Restorative Eye Cream",
          cost: "10",
          detail: {
            content:
              "商品包裝設計簡潔大方，採用優質的玻璃瓶裝，搭配專業的按壓式泵頭，方便精確地取出適量產品，保證使用的衛生和方便性。產品瓶身採用質感黑色調和金色字體設計，營造高雅、精緻的產品形象",
            cost: "76",
            size: "",
            style: ""
          },
          categoryStr: "商品售賣,",
          category: [
            {
              categoryID: 1,
              content: "商品售賣"
            }
          ],
          image: [
            {
              id: 16,
              url:
                "https://api.waproject-gift.store/api/v1/static/16_1682688413.png"
            },
            {
              id: 34,
              url:
                "https://api.waproject-gift.store/api/v1/static/16_1682688413.png"
            }
          ]
        },
        {
          id: 32,
          priority: 1,
          subtitle: "Dr.Yang",
          name: "Crampless Tea",
          cost: "10",
          detail: {
            content:
              "瓶身的形狀設計為長方形，方便攜帶。標籤上印有「Dr.Yang Crampless Tea」的字樣。以牛皮紙為主要材質，表示產品的天然與健康。",
            cost: "56",
            size: "",
            style: ""
          },
          categoryStr: "商品售賣,食品製造",
          category: [
            {
              categoryID: 1,
              content: "商品售賣"
            },
            {
              categoryID: 0,
              content: "食品製造"
            }
          ],
          image: [
            {
              id: 32,
              url:
                "https://api.waproject-gift.store/api/v1/static/32_1682688425.png"
            }
          ]
        },
        {
          id: 31,
          priority: 1,
          subtitle: "TSAA LAYA",
          name: "Lemon Ginger Tea",
          cost: "10",
          detail: {
            content:
              "包裝採用精美的手工包裝，展現了TSAA LAYA品牌的高品質和用心。包裝上印有精美的花紋和品牌標誌，彰顯了品牌的尊貴與典雅。",
            cost: "455",
            size: "",
            style: ""
          },
          categoryStr: "商品售賣,食品製造,三節禮盒",
          category: [
            {
              categoryID: 1,
              content: "商品售賣"
            },
            {
              categoryID: 0,
              content: "食品製造"
            },
            {
              categoryID: 1,
              content: "三節禮盒"
            }
          ],
          image: [
            {
              id: 31,
              url:
                "https://api.waproject-gift.store/api/v1/static/31_1682688424.png"
            },
            {
              id: 43,
              url:
                "https://api.waproject-gift.store/api/v1/static/31_1682688424.png"
            },
            {
              id: 44,
              url:
                "https://api.waproject-gift.store/api/v1/static/239a5c18bc4d631b7552d08de0fb9881_1682706197.png"
            },
            {
              id: 45,
              url:
                "https://api.waproject-gift.store/api/v1/static/31_1682688424.png"
            },
            {
              id: 46,
              url:
                "https://api.waproject-gift.store/api/v1/static/31_1682688424.png"
            },
            {
              id: 47,
              url:
                "https://api.waproject-gift.store/api/v1/static/239a5c18bc4d631b7552d08de0fb9881_1682706197.png"
            }
          ]
        },
        {
          id: 30,
          priority: 1,
          subtitle: "GoodSkinClub",
          name: "Skin Repair Kit",
          cost: "10",
          detail: {
            content:
              "包裝設計旨在將產品優雅且簡約的美學呈現出來。包裝採用純白色調和簡單的字體，以展現品牌對肌膚健康和純淨的承諾。",
            cost: "2323",
            size: "",
            style: ""
          },
          categoryStr: "商品售賣,旅館飯店,",
          category: [
            {
              categoryID: 1,
              content: "商品售賣"
            },
            {
              categoryID: 0,
              content: "旅館飯店"
            }
          ],
          image: [
            {
              id: 30,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 33,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 35,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 36,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 37,
              url:
                "https://api.waproject-gift.store/api/v1/static/0319c3391b681fe0f2bc350ba18c88be_1682705943.png"
            },
            {
              id: 38,
              url:
                "https://api.waproject-gift.store/api/v1/static/0fb54c8df2ac06a9052ae3e31ec11413_1682705948.png"
            },
            {
              id: 39,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 40,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 41,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            },
            {
              id: 42,
              url:
                "https://api.waproject-gift.store/api/v1/static/30_1682688424.png"
            }
          ]
        }
      ],
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

    productRes.data.context.forEach(item => {
      item.cost = item.detail.cost;
      item.categoryStr = "";

      item.category.forEach(cat => {
        item.categoryStr += cat.content + ",";
      });
    });

    this.data = productRes.data.context;
    console.log("<<<", this.data);
  },
  methods: {
    async ok(index) {
      console.log("sssss");

      await this.remove(index);
    },
    cancel() {},
    async add() {
      this.$router.push("/cms/page/new");
    },
    async edit(index) {
      // this.$Modal.info({
      //   title: "User Info",
      //   content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
      // });
      this.$router.push("/cms/page/" + this.data[index].id);
    },
    async remove(index) {
      let productRes = await axios.post(
        "https://api.waproject-gift.store/api/v1/product/delete/" +
          this.data[index].id
      );
      console.log(productRes);

      if (productRes.status != 200) {
        this.$Modal.info({
          title: "提示視窗",
          content: `無法刪除請見錯誤訊息：<br>${productRes.statusText}`
        });
      } else {
        this.$Modal.info({
          title: "提示視窗",
          content: "刪除成功!"
        });
        this.data.splice(index, 1);
      }
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
  overflow: hidden;
  margin-bottom: 100px;
}

button {
  background-color: #7b7b7b; /* Green */
  border: none;
  color: white;
  padding: 3px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
}
</style>
