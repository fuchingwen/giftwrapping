<template
  ><div>
    <!-- <button id="myButton">點擊我顯示 div</button> -->
    <!-- <img id="myButton" src="../assets/line-icon.png" /> -->

    <a id="myButton" href="#">
      <img src="../assets/line-icon.png" alt="image" />
    </a>

    <div id="myDiv">
      這是要顯示的內容
      <div id="line-qrcode">fff</div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#myDiv {
  display: none;
  width: 200px;
  height: 200px;
  background-color: aqua;
}
#myButton:focus + #myDiv {
  display: block;
}
</style>
