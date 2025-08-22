<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return ["my-select-option", props.className && props.className,
    props.variant && `my-select-option--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <option :class="classes" :style="styles">
    <slot />
  </option>
</template>

<style scoped >
</style>