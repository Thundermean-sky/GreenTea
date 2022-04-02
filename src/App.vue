<template>
  <NavigationBar/>
  <div class="appContent">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>

import NavigationBar from "@/pages/NavigationBar/NavigationBar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {NavigationBar,Footer},
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
.appContent{
  min-height:700px;
}
/*#app{*/
/*  height: 100%;*/
/*}*/
</style>
