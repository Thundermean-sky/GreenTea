<template>
  <el-card>
    <template v-slot:header>
      <span class="title">浏览排行</span>
    </template>
    <div >
      <el-link class="link" type="success" v-for="item in urlList" :href="item.url" :key="item.id">{{item.text}}</el-link>
    </div>
  </el-card>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "RankList",
  setup(){
    const rankList = reactive({
      urlList:[
        {id: '001', text: 'WWWWWWW', url: 'www.baidu.com'},
        {id: '002', text: 'SSSSSSSS', url: 'www.bilibili.com'},
        {id: '003', text: 'XXXXXXXX', url: 'www.sina.com'},
      ]
    })

    return {...rankList}
  }
}
</script>

<style scoped>
.link{
  width: 300px;
}
</style>
