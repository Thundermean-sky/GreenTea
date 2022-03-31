<template>
  <div>
    <el-tabs class="title">
      <el-tab-pane >
        <template v-slot:label>
          <router-link class="title_item" to="/homepage">首页</router-link>
        </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <router-link class="title_item" to="/comic">漫画</router-link>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <router-link class="title_item" to="/novel">小说</router-link>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <router-link class="title_item" to="/game">游戏</router-link>
          </template>
      </el-tab-pane>
      <el-tab-pane>
          <template v-slot:label>
            <router-link class="title_item" to="/aboutUs">关于我们</router-link>
          </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  setup(){
    return {}
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
a{
  text-decoration: none;
}
/*.router-link-active{*/
/*  text-decoration: none;*/
/*}*/
</style>
