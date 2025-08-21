<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <h1 class="text-xl font-bold">Менеджер моделей ИИ</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <!-- Здесь будет текущая страница -->
      <slot />
    </main>

    <footer class="mt-12 text-center text-sm text-gray-500">
      &copy; 2025 — Мой AI-менеджер
    </footer>
  </div>
</template>
