<script setup lang="ts">
const features = [
  {
    title: "全新设计系统",
    description: "完全重新设计的类名系统，更加简洁、一致且易于使用",
    icon: "🎨"
  },
  {
    title: "核心引擎重写",
    description: "全新的构建引擎，提供更快的编译速度和更小的包体积",
    icon: "⚡"
  },
  {
    title: "改进的响应式API",
    description: "增强的响应式功能，使布局适配各种屏幕尺寸更加简单",
    icon: "📱"
  },
  {
    title: "增强的主题系统",
    description: "更强大的定制能力，轻松创建和切换多种主题",
    icon: "🌈"
  },
  {
    title: "更智能的暗色模式",
    description: "内置的暗色模式支持，自动适应用户系统偏好",
    icon: "🌙"
  },
  {
    title: "扩展的组件API",
    description: "简化组件创建和复用的新API，更好地整合到您的工作流程中",
    icon: "🧩"
  }
];
</script>

<template>
  <div class="mb-5 mt-10 mx-2">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-4">Tailwind CSS 4.0</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        现代Web开发的实用工具优先CSS框架，全新4.0版本带来了革命性的变化
      </p>
    </div>

    <div class="bg-indigo-50 p-6 rounded-xl mb-12">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-2xl font-semibold text-indigo-700 mb-4">为什么选择Tailwind CSS 4.0?</h2>
          <p class="text-gray-700">
            Tailwind CSS 4.0是一次重大更新，完全重写了核心引擎，提供了更高效的性能和开发体验。
            新版本集成了更多实用工具类，改进了响应式设计系统，并优化了开发工作流程。
          </p>
        </div>
        <div class="md:w-1/3">
          <div class="p-4 bg-white rounded-lg shadow-md">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <span class="text-2xl">🚀</span>
              </div>
              <h3 class="text-lg font-medium text-gray-800">性能提升</h3>
              <p class="text-gray-600 text-sm mt-2">构建速度提升50%，运行时性能优化30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-gray-800 mb-6 p-5">主要新特性</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 p-5">
      <div v-for="(feature, index) in features" :key="index"
        class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div class="text-3xl mb-3">{{ feature.icon }}</div>
        <h3 class="font-medium text-xl text-gray-800 mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>

    <!-- AI + Tailwind CSS 展示部分 -->
    <div class="mb-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl overflow-hidden shadow-sm">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 p-8">
          <div class="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" stroke-width="2"/>
              <path d="M17.5 6.5H17.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            人工智能 + 现代CSS
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-3">AI驱动的网站设计</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            这个演示网站<span class="font-semibold text-indigo-600">95%以上的代码</span>完全由人工智能和Tailwind CSS实现，
            展示了现代AI技术如何与先进的CSS框架结合，创造出专业、高效且美观的用户界面。
          </p>
          <a href="https://juejin.cn/spost/7525727740633759779" target="_blank" class="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            查看详细文章
          </a>
        </div>
        <div class="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-inner">
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div class="ml-2 text-xs opacity-70">AI代码生成器</div>
            </div>
            <div class="font-mono text-sm opacity-90 space-y-2">
              <div class="flex items-center">
                <span class="text-purple-300 mr-2">AI:</span>
                <span>生成一个响应式导航栏组件</span>
              </div>
              <div class="flex items-center">
                <span class="text-green-300 mr-2">→</span>
                <span class="text-blue-200">&lt;nav class="flex items-center justify-between p-4"&gt;</span>
              </div>
              <div class="flex items-center pl-6">
                <span class="text-blue-200">&lt;div class="flex items-center space-x-4"&gt;</span>
              </div>
              <div class="flex items-center pl-6">
                <span class="text-blue-200">// Tailwind CSS 代码生成中...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">准备好开始使用了吗？</h2>
      <p class="mb-6 max-w-2xl mx-auto">Tailwind CSS 4.0将彻底改变您构建用户界面的方式，让您的开发过程更加高效和愉快。</p>
      <div class="flex justify-center space-x-4">
        <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"
          class=" bg-white text-indigo-600 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.464 9.12l-.707.707a1 1 0 101.414 1.414zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clip-rule="evenodd" />
          </svg>
          官方文档
        </a>
        <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank"
          class=" bg-gray-800 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS classes handle all styling needs */
</style>