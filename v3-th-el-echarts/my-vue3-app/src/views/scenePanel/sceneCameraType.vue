<template>
<div class="DownlistControl">
    <div class="colomn">
    <el-select v-model="value" placeholder="CAMERA">
            <el-option
            v-for="item in Cameraoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
       </el-select>
    </div>
    <div class="colomn">
       <el-select v-model="value" placeholder="SOLID">
            <el-option
            v-for="item in Cameratype"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
           
       </el-select>
    </div>
</div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

    const Cameraoptions = [
        { value: 'tab1', label: 'CAMERA'}

        ]
    const Cameratype = [
        { value: 'tab1', label: 'REALISTIC' },
        { value: 'tab2', label: 'SOLID' },
        { value: 'tab3', label: 'NORMALS' },
        { value: 'tab4', label: 'WIREFRAME' }

        ]   
    
</script>
<style scoped>
.DownlistControl{
    width: 100%;
    height: 100%;
    display: flex;

}
.colomn{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 
}
:deep(.el-select ){
    margin-right: 28px;
    width:100%%;
}
:deep(.el-select__wrapper) {
    background-color:#409eff;
    min-height: 20px;
    box-shadow: 0px 0px 0.5px #1eb042;;
    padding: 2px;
}
:deep(.el-select__placeholder.is-transparent) {
  color:rgb(7, 7, 7);
}
:deep(.el-icon)
{
    width: 0.8em;
    height: 0.8em;
    color: #f0efef;
}
</style>