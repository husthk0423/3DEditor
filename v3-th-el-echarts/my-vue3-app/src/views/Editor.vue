<template>
  <div class="editor">
    <div class="editor-header">
      <TopMenu />
    </div>
    <div class="editor-base">
      <div class="editor-container">
        <ScenePanel />
      </div>
      <div class="setting-container">
        <TabPanel />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { ref, reactive } from 'vue'
import TopMenu from './topPanel/TopMenu.vue'
import TabPanel from './settingPanel/TabPanel.vue'
import ScenePanel from './scenePanel/scenePanel.vue'

// 生命周期钩子
onMounted(() => {
  // 挂载时的逻辑
})

</script>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;

}
.editor-header {
  background-color: rgb(16, 16, 15);
  height: 4vh;
  display: flex;
}
.editor-base {
  display: flex;
  height: 96vh;

}
.editor-container {
  background-color: rgb(75, 75, 77);
  width: 80%;
  height: 100%;
}
.setting-container {
  background-color: rgb(13, 13, 14);
  width: 20%;
  height: 100%;
  overflow-y: scroll;
}
</style>