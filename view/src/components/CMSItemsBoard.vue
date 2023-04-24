<template>
  <div>
    <div class="cms-item-menu">
      <div class="cms-item-menu-left">
        <button class="button">刪除</button>
      </div>
      <div class="cms-item-menu-fight">
        <button class="button">新增</button>
      </div>
      <div class="cms-item-menu-table">
        <table>
          <tr>
            <td>國家</td>
            <td>首都</td>
            <td>人口</td>
            <td>語言</td>
          </tr>
          <tr>
            <td>USA</td>
            <td>Washington D.C.</td>
            <td>309 million</td>
            <td>English</td>
          </tr>
          <tr>
            <td>Sweden</td>
            <td>Stockholm</td>
            <td>9 million</td>
            <td>Swedish</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.cms-item-menu {
  display: flex;
  justify-content: space-between;
}
.cms-item-menu-table {
  word-break: break-all;
}
</style>
