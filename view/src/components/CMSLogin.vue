<template>
  <div class="cmslogin">
    <h2>後台登入頁面</h2>
    <br />
    <Form ref="formInline" :model="formInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="管理員帳號">
          <template #prepend>
            <Icon type="ios-person-outline"></Icon>
          </template>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="管理員密碼"
        >
          <template #prepend>
            <Icon type="ios-lock-outline"></Icon>
          </template>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登入</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      console.log("賬號", this.formInline.user);
      console.log("密碼", this.formInline.password);

      this.$router.push("/cms/items");

      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     // this.$Message.success("Success!");
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
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
  background-color: rgb(255, 255, 255);
}
</style>
