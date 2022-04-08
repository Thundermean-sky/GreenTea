<template>
  <el-card class="card" shadow="hover">
    <router-link :to="{name:'singleComic',params:{'CID':CID}}">
      <el-image fit="cover" :src="imgUrl"/>
    </router-link>
    <div class="info">
      <span >{{name}}</span>
      <span >{{author}}</span>
    </div>
  </el-card>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "SimpleComic",
  props:['CID', 'name', 'author'],
  setup(){
    const imgData = reactive({
      imgUrl:require('../assets/image/6.jpg'),
    })

    return {
      ...imgData
    }
  }
}
</script>

<style scoped>
.card{
  width: 280px;
  height: auto;
  margin: 10px;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
