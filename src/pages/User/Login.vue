<template>
  <div class="login">
    <div>
      欢迎来到绿茶汉化组
    </div>
    <el-form>
      <el-form-item class="login-container" >
        <label>
          用户名：
        </label>
        <el-input size="large" icon='<avatar/>' type="text" v-model="userData.username" placeholder="请输入用户名" clearable/>
      </el-form-item>
      <el-form-item class="login-container">
        <label>
          密码：
        </label>
        <el-input size="large" type="password" v-model="userData.password" placeholder="请输入密码" show-password/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reactive} from "vue";
export default {
  name: "Login",
  setup()
  {
    let userData = reactive({
      username: "",
      password: ""
    })



    return {userData}
  }
}
</script>

<style scoped>
.login {
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  display: flex;
  padding: 20% 20% 20% 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
