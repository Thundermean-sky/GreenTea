<template>
    <div class="title">
      <h2>{{title}}</h2>
      <hr>
    </div>
    <div class="card">
      <Card v-for="item in comicBook" :key="item.id" :bookInfo="item"/>
    </div>
    <div class="more_link">
      <router-link to="/comic">
        <el-link type="success" > >>>更多 </el-link>
      </router-link>
    </div>
</template>

<script>
import Card from "@/components/Card";
import {reactive} from "vue";
export default {
  name: "Recommend",
  components: {Card},
  props:['title'],
  setup(){
      const book = reactive({
      comicBook:[
        {id: '001', name: '魔法禁书目录',author: 'Mean'},
        {id: '002', name: '少女前线', author: 'Ring'},
        {id: '003', name: '碧蓝航线', author: 'King'},
        {id: '004', name: 'FGO', author: 'seeing'}
      ]
      })
    return {...book,}
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
  width: 500px;
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
