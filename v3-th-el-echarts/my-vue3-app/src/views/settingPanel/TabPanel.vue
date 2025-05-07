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
          <div class="treePanel"><ProjectPanel /></div>
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
import ProjectPanel from './project/projectPanel.vue'


// 响应式状态
const activeTab = ref('tab1')

// Tab 配置数据
const tabs = [
  { id: 'tab1', label: '场景', content: '' },
  { id: 'tab2', label: '项目', content: '这是 Tab 2 的内容' },
  { id: 'tab3', label: '设置', content: '这是 Tab 3 的内容' }
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
  margin: 0px auto;
  
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
  font-size: 15px;
  color:rgb(138, 131, 131);;
  position: relative;
  margin-right: 5px;
  transition: all 0.3s ease;
  padding-left: 7px;
  text-align: justify;
}

.tab-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tab-button.active {
  color: #f5efef;
  background-color: #080808;
}

.tab-content {
  padding-left: 5px;
  border-top: none;
  /* min-height: 200px; */
  height: 100%;
  overflow-y: auto;
  background-color: rgb(9, 9, 9);
}

.tab-pane {
  display: none;
  flex-direction: column;
}

.tab-pane.active {
  display: flex;
}


</style>