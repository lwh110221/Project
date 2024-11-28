<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <header class="bg-white shadow-md">
      <div class="max-w-4xl mx-auto p-4">
        <h1 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          小浩自制刷题系统
        </h1>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
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