<template>
  <div>
    <div class="login">
      <Login></Login>
    </div>
    <div >
      <HomePage></HomePage>
    </div>
  </div>
  

</template>

<script>

import Login from "@/pages/User/Login";
import HomePage from "@/pages/HomePage/HomePage";
export default {
  name: 'App',
  components: {HomePage, Login},
}
</script>

<style scoped>
.login {

  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
