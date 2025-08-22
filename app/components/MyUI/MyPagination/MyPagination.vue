<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return [
    "my-pagination",
    props.className && props.className,
    props.variant && `my-pagination--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <button :class="classes" :style="styles">
    <slot />
  </button>
</template>

<style scoped></style>
