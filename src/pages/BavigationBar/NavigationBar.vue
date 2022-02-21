<template>
  <div>
    <el-tabs class="title" @tab-click="changePath">
      <el-tab-pane >
        <template v-slot:label>
          <div class="title_item">首页</div>
        </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <div class="title_item">漫画</div>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <div class="title_item">小说</div>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <div class="title_item">游戏</div>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <div class="title_item">关于我们</div>
          </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  setup(){
    function changePath(pages){
      console.log(pages.index)
    }

    return {changePath}
  }
}
</script>

<style scoped>
.title{
  /*display: flex;*/
  /*justify-content: center;*/
  position: relative;
  height: 40px;
}
.title_item{
  width: 100px;
  font-size: 25px;
  text-align: center;
  color: #67C23A;
}
</style>
