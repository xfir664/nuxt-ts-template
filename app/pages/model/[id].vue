<!-- pages/model/[id].vue -->
<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

// Здесь можно загрузить модель по id
</script>

<template>
  <div>
    <h1>Модель: {{ id }}</h1>
    <p>Детали модели с ID: {{ id }}</p>
    <NuxtLink to="/models">← Назад к списку</NuxtLink>
  </div>
</template>
