<template>
  <div class="sideBox" v-if="flag">
    <div class="typeBox">
      <div class="typeName">类型</div>
      <div class="typeBtn">
        <el-button class="el-button" type="text" v-for="item in List" :key="item.typeId" @click="changeType(item.name)">
          {{item.name}}
        </el-button>
      </div>
    </div>
    <div class="processBox">
      <div class="processName">进度</div>
      <div>
        <el-button type="text" v-for="(item, index) in progress" :key="index" @click="changeProcess(item)">
          {{item}}
        </el-button>
      </div>
    </div>
    <div class="searchBox">
      <el-input
          type="text"
          v-model="searchName"
          class="searchInput"
          size="large"
          placeholder="搜索漫画"
          clearable
      />
      <el-button class="searchBtn" size="large" type="success" round @click="searchComicList">搜索</el-button>
    </div>
  </div>

  <div class="comicBox"  v-if="flag" >
    <div class="insideComic">
      <div class="singleComic" v-for="item in comicData.value" :key="item.ID">
          <SimpleComic :name="item.name" :author="item.author" :id="item.ID"/>
      </div>
    </div>

<!--    <el-pagination layout="prev, pager, next" />-->
  </div>
</template>

<script>
import { reactive, ref} from "vue";
import getTypeList from "@/hooks/getTypeList";
import SimpleComic from "@/components/SimpleComic";
import searchComic from "@/hooks/searchComic";


export default {
  name: "Comic",
  components: {SimpleComic},

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


    let flag = ref(false)     //数据来临时渲染界面


    //刚开始读取数据
    let comicData = reactive({});
    getTypeList('全部', '全部').then((data)=>{
      comicData.value = data;
      flag.value = true;
    })


    //按照类型进行漫画列表选取
    let curType = ref('全部')
    let curProcess = ref('全部')
    function changeType(value)
    {
      curType.value = value
      getListByTypeAndProcess()
    }
    function changeProcess(value)
    {
      curProcess.value = value
      getListByTypeAndProcess()
    }
    function getListByTypeAndProcess()
    {
      console.log(curType.value,"----",curProcess.value)
    }



    // 搜索功能实现函数
    let searchName = ref('')
    async function searchComicList(comicName)
    {
      try {
        if(searchName.value === "")     // 如果没有输入任何字，则返回全部列表
        {
          getTypeList('全部', '全部').then((data)=>{
            comicData.value = data;
          })
        }
        else {
          const searchList = await searchComic(comicName)
          comicData.value = [searchList]
        }
      }catch (e)
      {
        alert('没有查找到哦')
      }

    }


    return { progress, ...typeList, flag, comicData, searchName, searchComicList,
      curType, curProcess, changeType, changeProcess, getListByTypeAndProcess
    }
  },

}
</script>

<style scoped>
.sideBox{
  padding: 88px 10% 0 10%;
  width: 100%;
  height: 300px;
}
.typeBox{
}
.typeName{
  margin: 0 0 5px 0;
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}
.typeBtn{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 0 5px 0;
}
.el-button{
  font-size: 20px;
}
.processBox{
  margin: 0 0 5px 0;
}
.processName{
  margin: 0 0 5px 0;
  font-size: 20px;
}
.searchBox{
  width: 75%;
  text-align: right;
}
.searchInput{
  width: 200px;
}
.searchBtn{
  margin: 0 0 0 10px;
}
.comicBox{
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
}
.insideComic{
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.singleComic{
  margin: 10px;
}
</style>
