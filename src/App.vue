<template>
<!--    <div class="login">-->
<!--&lt;!&ndash;      <Login></Login>&ndash;&gt;-->
<!--    </div>-->
  <div>
    <NavigationBar/>
  </div>
  <div>
    <Carousel/>
  </div>
  <div class="home-content">
    <HomePage></HomePage>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<script>

import HomePage from "@/pages/HomePage/HomePage";
import NavigationBar from "@/pages/BavigationBar/NavigationBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default {
  name: 'App',
  components: {Carousel, NavigationBar, HomePage,Footer},
}
</script>

<style scoped>
/*.login {*/

/*  position: absolute;*/
/*  margin: auto;*/
/*  top: 0;*/
/*  left: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*}*/
.home-content {
  position: relative;
  width: 100%;
  left: 150px;
}
</style>
