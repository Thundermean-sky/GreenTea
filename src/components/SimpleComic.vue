<template>
  <el-card class="card" shadow="hover">
    <router-link :to="{name:'singleComic',params:{'id':id}}">
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
  props:['id', 'name', 'author'],
  setup(){
    const imgData = reactive({
      imgUrl:require('../assets/image/6.jpg'),
    })

    // function jump(value){
    //   const router = useRouter();
    //   router.push({
    //     name:'singleComic',
    //     params:{
    //       id:value
    //     }
    //   })
    // }

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
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
