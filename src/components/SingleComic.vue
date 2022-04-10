<template>
  <div class="single" v-if="isView">
    <el-card class="singleComicCard">
      <template v-slot:header>    <!-- 修改漫画信息，登录状态下呈现 -->
        <ChangeAndDeleteComicData :data="comicData"/>
      </template>
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
                <el-link :href="comicData.viewUrl" type="success" class="view-url">
                  点击前往
                </el-link></span>
            </div>
          </div>
          <div class="recommendBox">
            <div class="recommendTitle">
              <h2>相关类型推荐</h2>
            </div>
            <div class="recommendComicBox">
              <div v-for="item in recommendData" :key="item.ID">
                <SimpleComic :id="item.ID" :name="item.name" :author="item.author"/>
              </div>
            </div>

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
  </div>

</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import useComic from "@/hooks/useComic";
import SimpleComic from "@/components/SimpleComic";
import ChangeAndDeleteComicData from "@/components/ChangeAndDeleteComicData";
// import getComicByType from "@/hooks/getComicByType";

export default {
  name: "SingleComic",
  components: {ChangeAndDeleteComicData, SimpleComic},
  setup() {

    let isView = ref(false)

    const route = useRoute();

    let comicData = ref({});
    // let recommend = ref('');
    let recommendData = ref([])
    useComic(route.params.CID).then(data=>{
      comicData.value = data
      // recommend.value = comicData.value.comicType[0]
      isView.value = true;
    })
    // getComicByType(recommend.value).then(data=>{
    //   recommendData.value = data
    //   console.log(recommendData.value)
    // })


    return {comicData, isView, recommendData}
  },

}
</script>

<style scoped>
.single{
  width: 100%;
}
.singleComicCard{
  min-width: 500px;
}
.title{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 0 0 5%;

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
.recommendTitle{

}
.recommendComicBox{
  display: flex;
  flex-wrap: wrap;
}
</style>
