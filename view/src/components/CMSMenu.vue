<template>
  <div class="cms-parent">
    <div id="cms">
      <div class="cms-menu">
        <ul>
          <li>
            <router-link :to="'/cms/items'"><h3>商品管理</h3></router-link>
          </li>
          <li>
            <router-link :to="'/cms/category'"><h3>分類管理</h3></router-link>
          </li>
        </ul>
      </div>
      <div class="cms-content"><router-view /></div>
    </div>
  </div>
</template>

<script scoped></script>

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
  /* background-color: rgb(255, 0, 166); */
  margin-top: 70px;
  margin-bottom: 50px;
}
.cms-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cms-menu ul li {
  float: left;
  background-color: rgb(30, 108, 211);
  color: #fff;
  border-radius: 1px;
  cursor: pointer;
  margin: 3px;
  padding: 10px;
}
.cms-menu ul li:hover {
  color: #003c9d;
  background-color: #fff;
  border: 1px #003c9d solid;
}
</style>
