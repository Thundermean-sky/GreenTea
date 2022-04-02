<template>
  <div class="single" v-if="isView">
    <el-card class="card">
        <div class="title">
          <div class="top">
            <el-card>
              <el-image :src="require('../assets/image/5.jpg')"/>
            </el-card>
          </div>
          <div class="text">
            <div class="content">
              <span>漫画名：{{comicData.name}}</span>
            </div>
            <div class="content">
              <span>作者：{{comicData.author}}</span>
            </div>
            <div class="content">
              <span>上次更新：{{comicData.lastUpdate}}</span>
            </div>
            <div class="content">
              <span>已更新集数：{{comicData.episodes}}</span>
            </div>
            <div class="tag">
              <span style="padding: 20px;">
                类型:
              </span>
              <div class="tag-text" v-for="(item, index) in comicData.comicType" :key="index">
                <el-tag  type="success" size="large" style="font-size: 20px">
                  {{ item }}
                </el-tag>
              </div>
            </div>
            <div class="content">
              <span>简介：{{comicData.introduction}}</span>
            </div>
            <div class="content">
              <span>观看地址：
                <el-link :href="comicData.url" type="success" class="view-url">
                  点击前往
                </el-link></span>
            </div>
          </div>
          <div>

          </div>
        </div>

<!--&lt;!&ndash;      <div class="btn">&ndash;&gt;        原本对应的点击跳转到相关集数漫画界面-->
<!--        <div class="btn-class" v-for="(item, index) in episodes" :key="index">-->
<!--          <el-button type="success" size="large" >-->
<!--            {{item}}-->
<!--          </el-button>-->
<!--        </div>-->

<!--      </div>-->
    </el-card>


<!--    <div>-->
<!--        <Recommend/>-->
<!--    </div>-->
  </div>

</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import useComic from "@/hooks/useComic";

export default {
  name: "SingleComic",
  setup() {

    let isView = ref(false)

    const route = useRoute();

    let comicData = ref({});
    let recommend = ref([]);
    useComic(route.params.id).then(data=>{
      comicData.value = data
      recommend.value = comicData.value.comicType
      console.log(recommend.value)
      isView.value = true;
    })
    return {comicData, isView}
  },

}
</script>

<style scoped>
.single{
  width: 100%;
}
.card{
  min-width: 500px;
}
.title{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.top{
  width: 400px;
}
.text{
  width: 500px;
  align-items: flex-start;
}
.tag{
  font-size: 20px;
  display: flex;
}
.content{
  padding: 20px;
  font-size: 20px;
}
.view-url{
  display: inline-block;
  font-size: 20px;
  padding-bottom: 7px;
}
/*.btn{*/
/*  display: flex;*/
/*  justify-content: flex-start;*/
/*  flex-wrap: wrap;*/
/*}*/
/*.btn-class{*/
/*  padding: 5px 5px;*/
/*  font-size: 20px;*/
/*}*/
.tag-text{
  padding: 18px 3px 18px 3px ;
}
</style>
