<template>
  <div>
    <Carousel/>
  </div>
  <div class="home-content">
    <div class="rec">
      <Recommend title="漫画"/>
<!--        <RankList class="rank"/>-->
    </div>
    <div class="rec">
      <Recommend title="游戏"/>
    </div>
  </div>

</template>

<script>
import Recommend from "@/components/Recommend";
import Carousel from "@/components/Carousel";
export default {
  name: "HomePage",
  components: {Carousel, Recommend}
}
</script>

<style scoped>
.rec{
  width: 90%;
  margin: 0 auto;
}
.rank{
  width: 300px;
  position: absolute;
  left: 1250px;
  top: 50px;
}
.home-content {
  width: 100%;
}
</style>
