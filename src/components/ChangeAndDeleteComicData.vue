<template>
  <div>
    <el-button type="text" @click="dialogFormVisible=true">修改信息</el-button>
    <el-dialog v-model="dialogFormVisible" title="修改信息">
      <el-form :model="form">
        <el-form-item label="漫画名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="作者名">
          <el-input v-model="form.author"/>
        </el-form-item>
        <el-form-item label="已更新集数">
          <el-input type="number" v-model="form.episodes"/>
        </el-form-item>
        <el-form-item label="上次更新日期">
          <el-date-picker v-model="form.lastUpdate" value-format="YYYY-MM-DD"/>
        </el-form-item>
        <el-form-item label="简介">
          <el-input type="textarea" v-model="form.introduction" autosize/>
        </el-form-item>
        <el-form-item label="观看地址">
          <el-input v-model="form.viewUrl"/>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.states">
            <el-radio label="连载中全部">连载中</el-radio>
            <el-radio label="已完结全部">已完结</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="open"
        >确定</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import {reactive, ref} from "vue";
import {ElNotification, ElMessageBox} from "element-plus";

export default{
  name:'ChangeAndDeleteComicData',
  props:['data'],
  setup(props){
    const dialogFormVisible = ref(false);

    const choose = ref(1)

    const form = reactive(props.data)

    const open = () => {
      ElMessageBox({
        title: "提醒",
        message: "确定修改？",
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done)=>{
          if(action === 'confirm')
          {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = "修改中..."
            setTimeout(()=>{
              done()
              instance.confirmButtonLoading = false
              console.log(form)
            },2000 )
          }
          else
          {
            done()
          }
        }
      }).then(action=>{
        if(action === 'confirm')
        {
          dialogFormVisible.value = false
           ElNotification({
             title: "成功",
             message: "修改成功",
             type: 'success'
           })
        }
        else
        {
          ElNotification({
            title: "警告",
            message: "未修改成功",
            type: 'Warning'
          })
        }
        })
      }


    return{dialogFormVisible, choose, form, open}
  }
}

</script>

<style scoped>

</style>
