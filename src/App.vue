<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <header class="bg-white shadow-md">
      <div class="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          小浩刷题系统
        </h1>
        <button 
          v-if="$route.path !== '/'"
          @click="$router.push('/')"
          class="cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow"
        >
          退出
        </button>
      </div>
    </header>
    <main class="container mx-auto px-4 py-2">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>