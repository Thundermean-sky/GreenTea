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
          <el-button id="login_btn" type="success" @click="submitForm('ruleFormRef')" round size="large">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, reactive} from "vue";
import {useRouter} from "vue-router";
import userLogin from "@/hooks/userLogin";

export default {
  name: 'Login',
  setup(){
    const {proxy} = getCurrentInstance()
    const router = useRouter()
    let userData = reactive({
      username: "",
      password: "",
      isOnline:true
    })
    const rules = reactive({
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: "change"
        },
        {
          pattern: /^([a-zA-Z0-9_\u4e00-\u9fa5]{2,16})$/,
          message: "请输入正确的用户名",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: "change"
        },
        {
          pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
          message: "密码仅支持大小写字母和数,且长度至少为6位",
          trigger: "blur"
        }
      ]
    })

     const submitForm = async (refName)=> {
      proxy.$refs[refName].validate((valid) =>{
        if(!valid)
        {
          alert('用户名或密码错误')
          return
        }

      })
       const data = await userLogin(userData.username, userData.password);
       console.log(data)
       router.push("/homepage")
    }

    return{userData, rules, submitForm}

  },
  beforeUnmount() {

  }
}
</script>

<style scoped>
.login {
  width: 300px;
  height: 300px;
  box-shadow: 0 0 10px greenyellow;
  border-radius: 10px;
  margin: auto;
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
  color: #AEDD81;
  position: relative;
  text-align: center;
  height: 60px;
  top: 30px;
}
#login_btn{
  position: relative;
  margin: 0 auto;
  width: 100px;
}

</style>
