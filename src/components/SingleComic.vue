<template>
  <div class="single" v-if="isView">
    <el-card>
      <template v-slot:header>
        <div class="title">
          <div class="top">
            <el-card>
              <el-image :src="require('../assets/image/5.jpg')"/>
            </el-card>
          </div>
          <div class="text">
            <div class="content">
              <span>漫画名：{{testData.name}}</span>
            </div>
            <div class="content">
              <span>作者：{{author}}</span>
            </div>
            <div class="content">
              <span>上次更新：{{lastUpdate}}</span>
            </div>
<!--            <div class="content">-->
<!--              <span>更新日期：{{}}</span>-->
<!--            </div>-->
            <div class="tag">
              <span style="padding: 20px;">
                类型:
              </span>
              <div class="tag-text" v-for="(item, index) in comicType" :key="index">
                <el-tag  type="success" size="large" style="font-size: 20px">
                  {{ item }}
                </el-tag>
              </div>
            </div>
            <div class="content">
              <span>简介：{{introduction}}</span>
            </div>
            <div class="content">
              <span>观看地址：
                <el-link :href="url" type="success" class="view-url">
                  点击前往
                </el-link></span>
              <span>{{name}}</span>
            </div>
          </div>
        </div>
      </template>
<!--      <div class="btn">-->
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

export default {
  name: "SingleComic",

  setup() {

    let isView = ref(false)
    // const comicData = reactive({
    //   data: {
    //     id: "001",
    //     name: 'Mean',
    //     episodes: 50,
    //     author: '马氏三角杀',
    //     lastUpdate: '2022/01/02',
    //     comicType: ['好啊', 'LSP', '猎奇'],
    //     introduction: '这个漫画啊，真J8好看啊,1957年，毛泽东在莫斯科对中国青年留学生们说的这句话，' +
    //         '对整整一代中国人来说，都激起过强烈共鸣，产生过深远影响。在五四青年节到来之际，让我们重温毛泽东对青年的赞颂和寄语，' +
    //         '激励新时代青年不忘初心、砥砺奋斗、施展才华，唱响新时代的青春之歌。',
    //     url:'https://www.baidu.com'
    //   },
    // })

    const route = useRoute();

    let testData = ref({});
    useComic(route.params.id).then(data=>{
      testData.value = data
      console.log(testData.value)
      isView.value = true;

    })
    //  onMounted(async ()=>{
    //    try
    //    {
    //      const testData = await useComic('001')
    //      console.log(testData)
    //    } catch(err)
    //    {
    //      console.log(err)
    //    }
    //
    //
    // })
    return {testData, isView}
  },

}
</script>

<style scoped>
.single{
  width: 1000px;
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
  height: 200px;
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
