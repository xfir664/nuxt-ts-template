<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  to?: string;
  variant?: "base" | "primary" | "secondary";
  className?: string;
  styles?: CSSProperties;
  isActive?: boolean;
  disabled?: boolean;
}>();

const classes = computed(() => {
  return [
    "my-nav-link",
    props.className && props.className,
    props.variant && `my-nav-link--${props.variant}`,
    props.isActive && `active`,
    props.disabled && `disabled`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <NuxtLink :to="to" :class="classes" :style="styles">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
