<template>
<div class="listControl">
    <div class="row">
        <span  style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color:rgb(138, 131, 131);;">背景</span>
        <el-select v-model="value" placeholder="">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
       </el-select>
    </div>
    <div class="row">
        <span  style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);;">环境</span>
        <el-select v-model="value" placeholder="">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
       </el-select>
    </div>
    <div class="row">
        <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">雾</span>
        <el-select v-model="value" placeholder="">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
       </el-select>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
    const options = [
    { value: 'tab1', label: '场景' },
    { value: 'tab2', label: '项目' },
    { value: 'tab3', label: '设置' }
    ]
</script>
<style scoped>
.listControl {
    width: 100%;
    height: 100%;
    background-color: #080808;
    display: flex;
    flex-direction: column;
     margin-top: 20px;
     
}
.row {
    width:100%;
    height: 33px;
    display: flex;
    /* margin-top: 3px; */
    justify-content:flex-start;
}
:deep(.el-select) {

    margin-left: 45px;
    width: 50%;

}
:deep(.el-select__wrapper) {
    background-color: #515050;
    min-height: 20px;
    box-shadow: 0px 0px 0.5px #f0efef;
    padding: 2px;
}
:deep(.el-icon)
{
    width: 0.8em;
    height: 0.8em;
    color: #f0efef;
}








</style>