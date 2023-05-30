<template>
  <div class="cms-parent">
    <div id="cms">
      <Menu mode="horizontal" :theme="theme" active-name="1">
        <router-link :to="'/cms/items'">
          <MenuItem name="1">
            <Icon type="ios-paper" />
            商品管理
          </MenuItem>
        </router-link>
        <!-- <router-link :to="'/cms/category'">
          <MenuItem name="2">
            <Icon type="ios-people" />
            分類管理
          </MenuItem>
        </router-link> -->
      </Menu>
      <div class="cms-content"><router-view /></div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      theme: "light"
    };
  }
};
</script>

<style scoped>
@import url("../style/app.9b6dd939.css");
@import url("../style/newItem.css");
@import url("../style/sel.css");
@import url("../style/list-paging.css");

.cms-parent {
  display: flex;
  justify-content: center;
}
#cms {
  margin-top: 50px;
  width: 885px;
  /* background-color: aqua; */
}
.cms-content {
  margin-top: 30px;
}
</style>
