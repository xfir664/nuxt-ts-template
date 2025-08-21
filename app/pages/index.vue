<!-- pages/index.vue -->
<script setup lang="ts">
const handleClick = () => {
  console.log("click");
};
</script>

<template>
  <div>
    <h1>Главная страница</h1>
    <p>Привет! Это главная страница — /</p>
    <NuxtLink to="/models">Перейти к моделям</NuxtLink>
    <NuxtLink to="/model/555">Перейти к модели</NuxtLink>
    <MyBtn @click="handleClick" variant="secondary" type="button"
      >Click me</MyBtn
    >
  </div>
</template>
