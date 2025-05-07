<template>
  <div class="setting-panel">
    <div class="setting-panel-header"  
        :style="{ height: panelHeight + 'px' }"
        ref="panelHeader"
      >
      <div class="tree-container">
          <el-tree
            :data="data"
            node-key="id"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
          >
            <template #default="{ node }">
              <span>{{ node.label }}</span>
            </template>
          </el-tree>
      </div>
        <!-- 拖拽手柄 -->
          <div 
            class="resize-handle"
            @mousedown.prevent="startResize"
          >
        </div>
    </div>
     <!-- 静态背景区块 -->
    <div class="bg-block top"><BasicSceneSetting/></div>
    <div class="bg-block bottom"><SceneAttScript/></div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BasicSceneSetting from './BasicSceneSetting.vue'
import SceneAttScript from './scene_att_script.vue'

// 响应式状态
const panelHeight = ref(200)
const isResizing = ref(false)
const startY = ref(0)
const startHeight = ref(0)
const panelHeader = ref(null)

// 树形数据
const data = ref([
  {
    id: 1,
    label: 'Camera',
  },
  {
    id: 2,
    label: 'Scene',
    children: [
      { id: 5, label: 'AmbientLight' },
      { id: 6, label: 'Cube' },
      { id: 7, label: 'Terrian' },

    ]
  }
])

// 调整高度逻辑
const startResize = (e) => {
  isResizing.value = true
  startY.value = e.clientY
  startHeight.value = panelHeight.value
}

const handleResize = (e) => {
  if (!isResizing.value) return
  const deltaY = e.clientY - startY.value
  panelHeight.value = Math.min(Math.max(200, startHeight.value + deltaY), 600)
}

const stopResize = () => {
  isResizing.value = false
}

// 树形组件方法
const handleDragStart = (node) => {
  console.log('drag start', node)
}

const handleDragEnter = (draggingNode, dropNode) => {
  console.log('tree drag enter: ', dropNode?.label)
}

const handleDragLeave = (draggingNode, dropNode) => {
  console.log('tree drag leave: ', dropNode?.label)
}

const handleDragOver = (draggingNode, dropNode) => {
  console.log('tree drag over: ', dropNode?.label)
}

const handleDragEnd = (draggingNode, dropNode, dropType) => {
  console.log('tree drag end: ', dropNode?.label, dropType)
}

const handleDrop = (draggingNode, dropNode, dropType) => {
  console.log('tree drop: ', dropNode?.label, dropType)
}

const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode?.data.label === '二级 3-1') {
    return type !== 'inner'
  }
  return true
}

const allowDrag = (draggingNode) => {
  return !draggingNode.data.label.includes('三级 3-2-2')
}

// 生命周期
onMounted(() => {
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
/* 保持原有样式不变 */
.setting-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50% ;
  margin: 0px auto;
}

.setting-panel-header {
  position: relative;
  min-height: 200px;
  max-height: 600px;
  overflow: hidden;
  background-color: #515050;
  border-bottom: 2px solid #666;
}
.bg-block{
  margin-top: 10px;
  margin-left: 0px;
}
.bg-block.top {
 margin-left: 0px;

}

.bg-block.bottom {
  /* background-color: #de0b0b; */
  margin-left: 0px;
 height:auto;
  min-height: 200px;
  max-height: 600px;
  overflow: hidden;


margin-top: 20px;
}

.resize-handle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #3d5484;
  cursor: s-resize;
  z-index: 1000;
  transition: background-color 0.2s;
}

.resize-handle:hover {
  background-color: #dfa80e;
}

:deep(.el-tree) {
  background-color: #515050;
  --el-tree-node-hover-bg-color: #2f6ec7;
  --el-tree-text-color: rgb(248, 244, 244);;
  
  --el-tree-node-active-bg-color: #3d5484;
}

:deep(.el-tree-node__content) {
  height: 40px;
  border-radius: 4px;
  margin: 2px 0;
  font-size: 12px;
  

}

:deep(.el-tree-node__content:hover) {
  background-color: var(--el-tree-node-active-bg-color);
}
</style>