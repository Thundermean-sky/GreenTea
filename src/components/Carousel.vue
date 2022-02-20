<template>
  <el-carousel type="card" height="400px">
    <el-carousel-item v-for="item in img" :key="item.id">
     <el-image fit="cover" :src="item.view"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Carousel",
  setup(){
    const imgList = reactive({
      img:[
        {id: '001', view: require('../assets/image/1.jpg')},
        {id: '002', view: require('../assets/image/2.jpg')},
        {id: '003', view: require('../assets/image/3.png')},
        {id: '004', view: require('../assets/image/4.png')},
      ]
    })

    return {...imgList,}
  }
}
</script>

<style scoped>

</style>
