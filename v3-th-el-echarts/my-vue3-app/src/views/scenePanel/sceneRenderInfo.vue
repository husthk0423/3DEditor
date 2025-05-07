<template>
<div class="renderInfo">
  <el-row>
  <el-text class="mx-1" type="primary">物体:</el-text>
  <el-text class="mx-1" type="success">{{renderInfo.objectCount}}</el-text>
</el-row>
<el-row>
  <el-text class="mx-1" type="primary">顶点:</el-text>
  <el-text class="mx-1" type="success">{{renderInfo.vertexCount}}</el-text>
</el-row>
  <el-row>
  <el-text class="mx-1" type="primary">三角形:</el-text>
  <el-text class="mx-1" type="success">{{renderInfo.triangleCount}}</el-text>
</el-row>
  <el-row>
  <el-text class="mx-1" type="primary">渲染时间:</el-text>
  <el-text class="mx-1" type="success">{{renderInfo.renderTime}}</el-text>
</el-row>
</div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const renderInfo = ref({
  objectCount: 1,
  vertexCount: 24,
  triangleCount: 12,
  renderTime: 0.1
})




</script>
<style scoped>
.renderInfo{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
</style>