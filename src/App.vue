<template>
    <NavigationBar/>
    <router-view/>
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

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
/*#app{*/
/*  height: 100%;*/
/*}*/
</style>
