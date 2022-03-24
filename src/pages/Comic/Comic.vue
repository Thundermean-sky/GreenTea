<template>
  <div class="sideBox">
      <div >
        <div class="typeName">类型</div>
        <div class="typeBtn">
          <el-button class="el-button" type="text" v-for="item in List" :key="item.typeId">
            {{item.name}}
          </el-button>
        </div>
      </div>
      <div >
        <div class="processName">进度</div>
        <div>
          <el-button type="text" v-for="(item, index) in progress" :key="index">
            {{item}}
          </el-button>
        </div>
      </div>

  </div>

</template>

<script>
import {reactive, ref} from "vue";

export default {
  name: "Comic",
  setup(){
    const typeList = reactive({
      List:[
        {typeId:'1', name:'奇幻'},
        {typeId:'2', name:'冒险'},
        {typeId:'3', name:'轻小说'},
        {typeId:'4', name:'校园'},
        {typeId:'5', name:'爱情'},

      ]
    })
    const progress = ref(['全部', '连载中', '已完结'])

    return {...typeList, progress}
  }
}
</script>

<style scoped>
.sideBox{
  margin: 0 auto;
  width: 100%;
  height: 300px;
}
.typeName{
  width: 50px;
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}
.typeBtn{
}
.el-button{
  font-size: 20px;
}

</style>
