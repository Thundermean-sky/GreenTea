<template>
  <div class="carousel">
    <el-carousel type="card" :height="bannerHeight+'px'" interval=2000>
      <el-carousel-item v-for="item in img" :key="item.id">
        <el-image :src="item.view" fit="cover"/>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
import {onMounted, reactive, ref} from "vue";

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
    let bannerHeight = ref(400)

    onMounted(()=>{
      setSize();
      window.addEventListener('resize', ()=>{
        setSize();
      },false)
    })
    //
    function setSize(){
      bannerHeight.value = document.body.clientWidth / 4
    }
    return {...imgList, bannerHeight}
  }
}
</script>

<style scoped>
.carousel{
  width: 100%;

}
</style>
