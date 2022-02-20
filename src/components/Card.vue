<template>
  <div class="card-content">
    <el-card>
      <img class="img" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>
      <div class="info">
        <span>{{ bookInfo.name }}</span>
        <span>{{bookInfo.author}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['bookInfo'],
  setup(props){
    return {...props}
  },
}
</script>

<style scoped>
.card-content{
  margin: 0 10px;
  width:200px;
}
.info{
  display: flex;
  width:150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img{
  width:150px;
}
</style>
