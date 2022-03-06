<template>
  <div>
    <Carousel/>
  </div>
  <div class="home-content">
    <div class="rec">
      <div class="first">
        <Recommend title="漫画"/>
        <RankList class="rank"/>
      </div>
    </div>
    <div class="rec">
      <Recommend title="小说"/>
    </div>
    <div class="rec">
      <Recommend title="游戏"/>
    </div>
  </div>

</template>

<script>
import Recommend from "@/components/Recommend";
import RankList from "@/components/RankList";
import Carousel from "@/components/Carousel";
export default {
  name: "HomePage",
  components: {Carousel, RankList, Recommend}
}
</script>

<style scoped>
.rec{
  width: 1000px;
}
.rank{
  width: 300px;
  position: absolute;
  left: 1250px;
  top: 50px;
}
.home-content {
  position: relative;
  width: 100%;
  left: 150px;
}
</style>
