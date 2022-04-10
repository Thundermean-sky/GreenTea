<template>
    <div class="title">
      <h2>{{title}}(最近更新)</h2>
      <hr>
    </div>
    <div class="card">
      <div v-for="item in book" :key="item.CID">
        <SimpleComic class="rec_single" :name="item.name" :author="item.author" :CID="item.CID"/>
      </div>
    </div>
    <div class="more_link">
      <router-link to="/comic">
        <el-link type="success" > >>>更多 </el-link>
      </router-link>
    </div>
</template>

<script>
import {ref} from "vue";
import SimpleComic from "@/components/SimpleComic";
import getComicListByRec from "@/hooks/getComicListByRec";
export default {
  name: "Recommend",
  components: {SimpleComic},
  props:['title'],
  setup(){
      let book = ref({})

    getComicListByRec().then(data=>{
      book.value = data;
    })


    return {book,}
  }
}
</script>

<style scoped>
.title{
  color: #67C23A;
  margin: 5px 0 0px 10px;
}
.card {
  display: flex;
}
.rec_single{
  width: 230px;
}
.more_link{
  text-align: right;
}
a{
  text-decoration: none;
}
/*.router-link-active{*/
/*  text-decoration: none;*/
/*  color: mediumvioletred;*/
/*}*/
</style>
