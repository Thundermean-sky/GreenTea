<template>
  <div class="rec">
      <Recommend title="漫画"/>
  </div>
  <div class="rank">
    <RankList/>
  </div>
  <div class="rec">
    <Recommend title="小说"/>
  </div>
  <div class="rec">
    <Recommend title="游戏"/>
  </div>
</template>

<script>
import Recommend from "@/components/Recommend";
import RankList from "@/components/RankList";
export default {
  name: "HomePage",
  components: {RankList, Recommend}
}
</script>

<style scoped>
.rec{
  width: 1000px;
}
.rank{
  width: 400px;
  position: absolute;
  right: 320px;
  top: 100px;
}
</style>
