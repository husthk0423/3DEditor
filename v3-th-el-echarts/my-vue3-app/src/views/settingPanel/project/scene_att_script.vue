<template>
    <div class="tab-container">
      <!-- Tab 标签 -->
      <div class="tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-button" 
          :class="{ active: activeTab === tab.id }"
          @click="switchTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
      
      <!-- Tab 内容 -->
      <div class="tab-content">
        <div 
          v-for="tab in tabs"
          :key="tab.id"
          :id="tab.id"
          class="tab-pane"
          :class="{ active: activeTab === tab.id }"
        >
          <!-- Tab1 内容 -->
          <template v-if="tab.id === 'tab1'">
            <div class="listControl">
              <div class="row">
                  <span  style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color:rgb(138, 131, 131);;">
                    类型</span>
                    <el-text tag="i">PerspectiveCamera</el-text>
              </div>
              <div class="row">
                  <span  style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);;">
                    识别码</span>
                    <el-input style="width: 40%;"   v-model="inputValue" placeholder="" />
                    <el-button size="small">更新</el-button>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    名称</span>
                    <el-input  style="width: 70%;"  v-model="inputValue" placeholder="" />
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    位置</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;" >1.592   17.345   17.276</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    旋转</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;">-48.45°   5.34°   6.09°</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    缩放</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;">1.000   1.000   1.000</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    视角</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;">50.00</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    近点</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;">0.01</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    远点</span>
                    <el-text tag="i" style="--el-text-color: #1a59c7;">1000.00</el-text>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    阴影</span>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 50px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    可见性</span>
              
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 100px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    视锥体裁剪</span>
                  
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 1000px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    渲染次序</span>
              </div>
              <div class="row">
                  <span style="margin-left: 3px;width: 100px;text-align: left;font-size: 14px; color: rgb(138, 131, 131);">
                    自定义数据</span>
              </div>
          </div>
          </template>
  
          <!-- 其他 Tab 内容 -->
          <template v-else>
            {{ tab.content }}
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  
  // 响应式状态
  const activeTab = ref('tab1')
  
  // Tab 配置数据
  const tabs = [
    { id: 'tab1', label: '属性', content: '这是 Tab 1 的内容' },
    { id: 'tab2', label: '脚本', content: '这是 Tab 2 的内容' },
  
  ]
  
  // 切换 Tab 方法
  const switchTab = (tabId) => {
    activeTab.value = tabId
  }
  </script>
  
  <style scoped>
  /* 保持原有样式不变 */
  .tab-container {
    width: 100%;
   
  }
  
  .tabs {
    display: flex;
    background-color: rgb(35, 36, 36);
    margin: 0%;
   
    
  }
  
  .tab-button {
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color:rgb(138, 131, 131);;
    position: relative;
    padding-left: 0px;
    margin-right: 5px;
    transition: all 0.3s ease;
    /* text-align: justify; */
  }
  
  .tab-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .tab-button.active {
    color: #f5efef;
    background-color: #080808;
  }
  
  .tab-content {

    border-top: none;
    height: 700px!important;
    overflow-y: auto;
  }
  
  .tab-pane {
    display: none;
    flex-direction: column;
  }
  
  .tab-pane.active {
    display: flex;
  }
  
  .listControl {
    width: 100%;
    height: 100%;
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
      margin-top: 5px;
  }
  :deep(.el-text) {

    align-self: self-start;
    --el-text-color: #dde1e8;
   }
   :deep(.el-input){  
    margin-left: 5px;

    --el-input-height: 20px !important; /* 修改 CSS 变量 */
   }
   :deep(.el-input__wrapper)
   {
     background-color: #515050;
     box-shadow:inset 0px 0px 0.5px #f0efef;
     height: var(--el-input-height); /* 继承变量值 */
     min-height: auto; /* 移除最小高度限制 */
   }
   :deep(.el-button){
    background-color: #515050;
    color:#dde1e8;  
    margin-left: 5px;
    border: #080808 solid 1px;
   

    --el-button-size: 20px !important; /* 控制高度的核心变量 */
    padding: 0 4px !important; /* 调整左右间距 */
    line-height: var(--el-button-size) !important; /* 保持文字居中 */
   }
  </style>