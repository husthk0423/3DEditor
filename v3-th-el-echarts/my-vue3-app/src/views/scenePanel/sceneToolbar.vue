<template>
<div class="ToolbarList">
  <div class="toolbar Pan">
    <el-button type="primary">
    <!-- 使用插槽自定义图标 -->
    <template #icon>
        <img 
        src="/svg/translate.svg" 
        class="custom-icon"
        alt="search"
        >
     </template>
   </el-button>
  </div>
  <div class="toolbar Rolate">
    <el-button type="primary">
    <!-- 使用插槽自定义图标 -->
    <template #icon>
        <img 
        src="/svg/rotate.svg" 
        class="custom-icon"
        alt="search"
        >
     </template>
   </el-button>
  </div>
  <div class="toolbar Zoom">
    <el-button type="primary">
    <!-- 使用插槽自定义图标 -->
    <template #icon>
        <img 
        src="/svg/scale.svg" 
        class="custom-icon"
        alt="search"
        >
     </template>
   </el-button>
  </div>    
  <div class="toolbar Check">
    <el-checkbox v-model="checked5" label="" size="large"  style="background-color: #409eff;
    width: 130%; height: 100%;margin-top: 16px;border-radius: 5px;"/>
  </div>
</div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
// const baseUrl = process.env.BASE_URL

</script>
<style scoped>
.ToolbarList {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: #b01e1e; */
}
.toolbar{   
    width: 100%;
    height: 25%;
    margin: 0px;
    padding:0px; 
}
.pan{
    background-color: #cb2e8a;
}
.rotate{
    background-color: hsl(0, 21%, 59%);
}
.zoom{
    background-color: #4c13c6;
}
.check{
    background-color: #1eb042;
}
:deep(.el-checkbox) {
 

}
:deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
   width: 16px;
   height: 16px;
   border-radius: 5px;
   margin-left: 12px;
   background-color: #1eb042;
   border-color: aqua;
}
:deep(.el-checkbox__label) {
    display: none;
  }

</style>