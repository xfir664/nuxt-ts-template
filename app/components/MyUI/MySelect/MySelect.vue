<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return ["my-select", props.className && props.className,
    props.variant && `my-select--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <select :class="classes" :style="styles">
    <slot />
  </select>
</template>

<style scoped >
</style>