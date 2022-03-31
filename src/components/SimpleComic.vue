<template>
  <el-card class="card" shadow="hover">
    <el-image fit="cover" :src="imgUrl"/>
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
  props:['name', 'author'],
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
  width: 300px;
  height: auto;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
