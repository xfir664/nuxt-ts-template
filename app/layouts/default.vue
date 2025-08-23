<!-- layouts/default.vue -->
<template>
  <div class="flex flex--column height-100">
    <header>
      <div>
        <h1>Менеджер моделей ИИ</h1>
      </div>
    </header>

    <main class="flex-grow-1">
      <slot />
    </main>

    <footer>&copy; 2025 — Мой AI-менеджер</footer>
  </div>
</template>
