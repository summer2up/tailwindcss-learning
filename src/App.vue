<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const isSidebarOpen = ref(true);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};


// 菜单配置数组
const menuItems: any = [
  {
    title: '首页',
    path: '/',
    svgPath: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'
  },
  {
    title: '快速开始',
    path: '/start',
    svgPath: 'M13.5 5.5c0 .83.67 1.5 1.5 1.5h2a1.5 1.5 0 0 0 0-3h-2c-.83 0-1.5.67-1.5 1.5zm-7.5 5c0 .83.67 1.5 1.5 1.5h11a1.5 1.5 0 0 0 0-3h-11c-.83 0-1.5.67-1.5 1.5zm2 5c0 .83.67 1.5 1.5 1.5h8a1.5 1.5 0 0 0 0-3h-8c-.83 0-1.5.67-1.5 1.5z'
  },
  {
    title: '基础',
    path: '/test1',
    svgPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: '布局',
    path: '/test2',
    svgPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
  },
  {
    title: '过渡动画',
    path: '/test3',
    svgPath: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M19 8.5v7a1.5 1.5 0 01-1.5 1.5H6.5a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 016.5 7h11A1.5 1.5 0 0119 8.5z'
  },
  {
    title: '进阶特性',
    path: '/test4',
    svgPath: 'M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z'
  },
  {
    title: '响应式',
    path: '/test5',
    svgPath: 'M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
  },
];

const goRouter = (path: string) => {
  router.replace(path)

}

</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">
    <!-- 左侧导航栏 -->
    <nav class="transition-all  duration-300 ease-in-out border-r border-gray-300"
      :class="isSidebarOpen ? 'w-50' : 'w-20'">
      <div class="h-full flex flex-col ">
        <!-- 导航栏头部 -->
        <div class="p-2 flex items-center justify-center border-b border-gray-300">
          <button v-if="isSidebarOpen" @click="toggleSidebar"
            class="rounded-full p-1.5 focus:outline-none cursor-pointer transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M15.707 4.293a1 1 0 010 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <button v-else @click="toggleSidebar"
            class="w-full flex justify-center cursor-pointer rounded-full p-1.5 focus:outline-none transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- 导航菜单 -->
        <div class="flex-1 overflow-y-auto py-6">
          <div class="space-y-1 px-3">
            <div v-for="item in menuItems" :key="item.path"
              :class="['cursor-pointer', item.path == route.path ? 'bg-blue-600 text-white rounded-lg ' : 'text-gray-700']"
              @click="goRouter(item.path)">
              <div :class="[
                ' hover:bg-black/30 hover:text-white',
                isSidebarOpen ? 'px-4 py-3' : 'justify-center py-3',
                'flex items-center rounded-lg transition-all duration-200 mb-1'
              ]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path v-if="item.svgPath" :d="item.svgPath" />
                  <path v-if="item.svgPathRule" :fill-rule="item.svgPathRule.rule" :d="item.svgPathRule.d"
                    :clip-rule="item.svgPathRule.rule" />
                </svg>
                <span class="ml-3 font-medium" v-if="isSidebarOpen">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 右侧内容区域 -->
    <main class="flex-1 flex flex-col overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>