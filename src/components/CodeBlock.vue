<template>
  <div class="m-2 rounded-sm overflow-hidden">
    <div class="flex justify-between items-center px-5 py-3 bg-gray-900">
      <span class="text-[20px] text-white font-bold">{{ language }}</span>
      <div ref="copyButtonRef" class="copy-button size-7 p-1 rounded-sm cursor-pointer bg-gray-600 hover:bg-gray-500"
        title="复制代码" @click="copyCode">
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="icon text-white" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon text-green-500" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
    </div>
    <div class="code-block-content">
      <pre><code ref="codeRef" :class="language">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import hljs from '../highlight';
import ClipboardJS from 'clipboard';



const props = defineProps({
  language: {
    type: String,
    default: 'javascript'
  },
  code: {
    type: String,
    default: ''
  },
  showLineNumbers: {
    type: Boolean,
    default: false
  }
});

const codeRef = ref(null);
const copyButtonRef = ref(null);
const copied = ref(false);
let clipboard:any = null;

onMounted(() => {
  // 等待 DOM 更新后执行代码高亮
  nextTick(() => {
    if (codeRef.value) {
      hljs.highlightElement(codeRef.value);
    }
  });
});

// 复制代码到剪贴板
const copyCode = () => {
  if (!clipboard && copyButtonRef.value && codeRef.value) {
    clipboard = new ClipboardJS(copyButtonRef.value, {
      text: () => props.code,
    });

    clipboard.on('success', () => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    });
  }

  // 触发复制
  if (clipboard) {
    clipboard.onClick({ currentTarget: copyButtonRef.value });
  }
};

onUnmounted(() => {
  // 清理资源
  if (clipboard) {
    clipboard.destroy();
    clipboard = null;
  }
});

// 监听代码变化，更新高亮
watch(() => props.code, () => {
  nextTick(() => {
    if (codeRef.value) {
      hljs.highlightElement(codeRef.value);
    }
  });
});
</script>

<style scoped></style>