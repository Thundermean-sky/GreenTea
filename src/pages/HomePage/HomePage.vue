<template>
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
  width: 300px;
  position: absolute;
  left: 1250px;
  top: 50px;
}

</style>
