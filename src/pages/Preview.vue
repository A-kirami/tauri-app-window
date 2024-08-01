<script setup lang="ts">
import { getCurrentWebviewWindow } from '@tauri-apps/api/webviewWindow'
import { ref } from 'vue'

const currentWindow = getCurrentWebviewWindow()

interface PreviewContent {
  uuid: string
  uuids: string[]
}

const previewContent = ref<PreviewContent>({
  uuid: '',
  uuids: [],
})

currentWindow.listen<PreviewContent>('set-preview-content', (e) => {
  previewContent.value = e.payload
})

currentWindow.emit('preview-window-created')
</script>

<template>
  <div class="uuid">{{ previewContent.uuid }}</div>
</template>

<style scoped>
.uuid {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: red;
  height: 100vh;
}
</style>
