<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?: "base" | "primary" | "secondary";
  className?: string;
  styles?: CSSProperties;
  isActive?: boolean;
  disabled?: boolean;
}>();

const classes = computed(() => {
  return [
    "my-link",
    props.className && props.className,
    props.variant && `my-link--${props.variant}`,
    props.isActive && `active`,
  ];
});
</script>

<template>
  <a
    :href="href"
    :target="target"
    :class="classes"
    :style="styles"
    :disabled="disabled"
  >
    <slot />
  </a>
</template>

<style scoped lang="scss">
@use "./link.var.scss" as link;

.my-link {
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
