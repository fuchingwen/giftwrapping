<template>
  <div class="cmslogin">
    <h2>後台登入頁面</h2>
    <form @submit.prevent="handleSubmit">
      <input
        id="username"
        type="text"
        v-model="name"
        placeholder="賬號"
      /><br /><br />
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="密碼"
      /><br /><br />
      <button>登入</button><br /><br />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("賬號", this.name);
      console.log("密碼", this.password);

      this.$router.push("/cms/items");
    }
  }
};
</script>
<style scoped>
.cmslogin {
  text-align: center;
  padding: 5px;
  width: 250px;
  margin: 100px auto;

  margin-top: 150px;
  margin-bottom: 100px;
  background-color: rgb(97, 159, 241);
}
</style>
