<template>
  <div class="login">
    <div id="login_title">
      <span>登录绿茶汉化组</span>
    </div>
    <div class="login_content">
      <el-form ref="ruleFormRef" :rules="rules" :model="userData" label-position="right" >
        <el-form-item label="用户名:" prop="username" size="large">
          <el-input size="large" type="text" v-model="userData.username" placeholder="请输入用户名" clearable/>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input size="large" type="password" v-model="userData.password" placeholder="请输入密码" show-password/>
        </el-form-item>
        <el-form-item>
          <el-button id="login_btn" type="success" @click="submitForm" round size="large">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
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
    const rules = reactive({
      username:[
        {
          required: true,
          message:'请输入用户名',
          trigger: "change"
        },
      ],
      password:[
        {
          required: true,
          message:'请输入密码',
          trigger: "change"
        }
      ]
    })
    function submitForm()
    {
      console.log(userData)

    }
    return {userData, rules, submitForm}
  }
}
</script>

<style scoped>
.login {
  width: 300px;
  height: 300px;
}
.login_content {
  display: flex;
  height: 240px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
#login_title {
  font-size: 20px;
  position: relative;
  text-align: center;
  height: 30px;
}
#login_btn{
  position: relative;
  margin: 0 auto;
  width: 100px;
}

</style>
