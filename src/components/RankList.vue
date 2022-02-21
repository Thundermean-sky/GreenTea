<template>
  <el-card header="浏览排行">
    <div class="link">
      <el-link style="padding: 10px" type="success" v-for="item in urlList" :href="item.url" :key="item.id">{{item.text}}</el-link>
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
        {id: '001', text: 'WWWWWWW', url: 'https://www.baidu.com'},
        {id: '002', text: 'SSSSSSSS', url: 'https://www.bilibili.com'},
        {id: '003', text: 'XXXXXXXX', url: 'https://www.sina.com'},
      ]
    })

    return {...rankList}
  }
}
</script>

<style scoped>
.link{
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
