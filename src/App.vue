<template>
<!--    <div class="login">-->
<!--&lt;!&ndash;      <Login></Login>&ndash;&gt;-->
<!--    </div>-->
  <div>
    <NavigationBar/>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<script>

import NavigationBar from "@/pages/NavigationBar/NavigationBar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: { NavigationBar,Footer},
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

</style>
