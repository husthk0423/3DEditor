<script setup lang="ts">
import { ElCheckbox } from 'element-plus';

</script>

<template>
    <div class="menu-list">
        <div class="left-menu-list">
        <button class="menu-button">文件</button>
        <button class="menu-button">编辑</button>
        <button class="menu-button">添加</button>
        <button class="menu-button">视图</button>
        <button class="menu-button">帮助</button>
    </div>
    <div class="right-menu-list">
        <ElCheckbox class="menu-ElCheckbox">自动保存</ElCheckbox>
    </div>
    </div>
  </template>
  
  <style scoped>
    .menu-list
    {
        display: flex;
        width: 100%;
        background-color: black;
        font-family: Arial, sans-serif;
        align-items:center; /* 垂直居中对齐 */
    }
    .left-menu-list
    {
        display: flex;
        width: 80%;
        gap: 0; /* 确保按钮间无间隙 */
        
    }
    .right-menu-list
    {
        display: flex;
        width: 20%;
        justify-content: flex-end; 
        align-items: center; /* 垂直居中对齐 */
        gap: 0; /* 确保按钮间无间隙 */
    }
    .menu-button
    {
        margin: 0; /* 去除默认外边距 */
        padding: 8px 16px;
    
        background-color: rgb(7, 7, 7);
        border: none;
        color: rgb(138, 131, 131);
        font-size: 15px;
        cursor: pointer;
      
    }
    .menu-ElCheckbox
    {    
        background-color: rgb(7, 7, 7);
        border: none;
        color: rgb(138, 131, 131);
        font-size: 15px; 
  
  
    }
  </style>
  