<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  disabled?: boolean;
  styles?: CSSProperties;
  className?: string;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return [
    "file-input",
    props.className && props.className,
    props.variant && `file-input--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <input
    type="file"
    :disabled="props.disabled"
    :class="classes"
    :style="props.styles"
  />
</template>

<style scoped lang="scss">
@use "./file-input.var.scss" as file-input;
@use "@/assets/styles/var.scss" as var;

.file-input {
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;

  &--base {
    width: file-input.$width-base-mobile;
    height: file-input.$height-base-mobile;

    &:hover {
      background-color: file-input.$bg-base-hover;
    }

    &:focus-visible {
      background-color: file-input.$bg-base-focus;
    }

    &:active {
      background-color: file-input.$bg-base-click;
    }

    &:disabled {
      background-color: file-input.$bg-base-disabled;
      cursor: not-allowed;
    }
  }

  &--primary {
    width: file-input.$width-primary-mobile;
    height: file-input.$height-primary-mobile;

    &:hover {
      background-color: file-input.$bg-primary-hover;
    }

    &:focus-visible {
      background-color: file-input.$bg-primary-focus;
    }

    &:active {
      background-color: file-input.$bg-primary-click;
    }

    &:disabled {
      background-color: file-input.$bg-primary-disabled;
      cursor: not-allowed;
    }
  }

  &--secondary {
    width: file-input.$width-secondary-mobile;
    height: file-input.$height-secondary-mobile;

    &:hover {
      background-color: file-input.$bg-secondary-hover;
    }

    &:focus-visible {
      background-color: file-input.$bg-secondary-focus;
    }

    &:active {
      background-color: file-input.$bg-secondary-click;
    }

    &:disabled {
      background-color: file-input.$bg-secondary-disabled;
      cursor: not-allowed;
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: file-input.$width-base-tablet;
      height: file-input.$height-base-tablet;
    }

    &--primary {
      width: file-input.$width-primary-tablet;
      height: file-input.$height-primary-tablet;
    }

    &--secondary {
      width: file-input.$width-secondary-tablet;
      height: file-input.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: file-input.$width-base-desktop;
      height: file-input.$height-base-desktop;
    }

    &--primary {
      width: file-input.$width-primary-desktop;
      height: file-input.$height-primary-desktop;
    }

    &--secondary {
      width: file-input.$width-secondary-desktop;
      height: file-input.$height-secondary-desktop;
    }
  }
}
</style>
