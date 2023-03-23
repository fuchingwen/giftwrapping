<template>
  <div id="a">{{ items }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  setup() {
    axios.post("http://127.0.0.1:3000/testAPI").then(res => {
      console.log(res.data);
    });
    return {};
  },
  data() {
    return {
      items: "預設值",
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
