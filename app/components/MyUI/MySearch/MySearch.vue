<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
  disabled?: boolean;
}>();

const classes = computed(() => {
  return [
    "my-search",
    props.className && props.className,
    props.variant && `my-search--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <input type="search" :class="classes" :style="styles" :disabled="disabled" />
</template>

<style scoped></style>
