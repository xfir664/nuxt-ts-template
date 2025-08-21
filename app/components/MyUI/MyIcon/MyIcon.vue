<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  id: string;
  className?: string;
  variant?: "base" | "primary" | "secondary";
  styles?: CSSProperties;
}>();

const classes = computed(() => {
  return [
    "icon",
    props.className && props.className,
    props.variant && `icon--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <svg :class="classes" :style="styles">
    <use :href="`/sprites/sprite.svg#${id}`" />
  </svg>
</template>

<style scoped lang="scss">
@use "./icon.var.scss" as icon;
@use "@/assets/styles/var.scss" as var;

.icon {
  &--base {
    width: icon.$width-base-mobile;
    height: icon.$height-base-mobile;
  }

  &--primary {
    width: icon.$width-primary-mobile;
    height: icon.$height-primary-mobile;
  }

  &--secondary {
    width: icon.$width-secondary-mobile;
    height: icon.$height-secondary-mobile;
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: icon.$width-base-tablet;
      height: icon.$height-base-tablet;
    }

    &--primary {
      width: icon.$width-primary-tablet;
      height: icon.$height-primary-tablet;
    }

    &--secondary {
      width: icon.$width-secondary-tablet;
      height: icon.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: icon.$width-base-desktop;
      height: icon.$height-base-desktop;
    }

    &--primary {
      width: icon.$width-primary-desktop;
      height: icon.$height-primary-desktop;
    }

    &--secondary {
      width: icon.$width-secondary-desktop;
      height: icon.$height-secondary-desktop;
    }
  }
}
</style>
