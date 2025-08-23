<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return [
    "my-select-option",
    props.className && props.className,
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

<style scoped lang="scss">
@use "./my-select-option.var.scss" as my-select-option;
@use "@/assets/styles/var.scss" as var;

.my-select-option {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease;

  &--base {
    font-size: my-select-option.$size-base-mobile;
    height: my-select-option.$height-base-mobile;
    color: my-select-option.$col-base;
    background-color: my-select-option.$bg-base;

    &:hover {
      color: my-select-option.$col-base-hover;
      background-color: my-select-option.$bg-base-hover;
    }

    &:focus-visible {
      color: my-select-option.$col-base-hover;
      background: my-select-option.$bg-base-hover;
    }

    &:active {
      color: my-select-option.$col-base-click;
      background-color: my-select-option.$bg-base-click;
    }

    &:disabled {
      color: my-select-option.$col-base-disabled;
      background-color: my-select-option.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: my-select-option.$col-base--active;
      background-color: my-select-option.$bg-base--active;

      &:hover {
        color: my-select-option.$col-base-hover--active;
        background-color: my-select-option.$bg-base-hover--active;
      }

      &:focus-visible {
        color: my-select-option.$col-base-hover--active;
        background: my-select-option.$bg-base-hover--active;
      }

      &:active {
        color: my-select-option.$col-base-click--active;
        background-color: my-select-option.$bg-base-click--active;
      }

      &:disabled {
        color: my-select-option.$col-base-disabled--active;
        background-color: my-select-option.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    font-size: my-select-option.$size-primary-mobile;
    height: my-select-option.$height-primary-mobile;
    color: my-select-option.$col-primary;
    background-color: my-select-option.$bg-primary;

    &:hover {
      color: my-select-option.$col-primary-hover;
      background-color: my-select-option.$bg-primary-hover;
    }

    &:focus-visible {
      color: my-select-option.$col-primary-hover;
      background: my-select-option.$bg-primary-hover;
    }

    &:active {
      color: my-select-option.$col-primary-click;
      background-color: my-select-option.$bg-primary-click;
    }

    &:disabled {
      color: btn.$col-primary-disabled;
      background-color: btn.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: my-select-option.$col-primary--active;
      background-color: my-select-option.$bg-primary--active;

      &:hover {
        color: my-select-option.$col-primary-hover--active;
        background-color: my-select-option.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: my-select-option.$col-primary-hover--active;
        background: my-select-option.$bg-primary-hover--active;
      }

      &:active {
        color: my-select-option.$col-primary-click--active;
        background-color: my-select-option.$bg-primary-click--active;
      }

      &:disabled {
        color: my-select-option.$col-primary-disabled--active;
        background-color: my-select-option.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    font-size: my-select-option.$size-secondary-mobile;
    height: my-select-option.$height-secondary-mobile;
    color: my-select-option.$col-secondary;
    background-color: my-select-option.$bg-secondary;

    &:hover {
      color: my-select-option.$col-secondary-hover;
      background-color: my-select-option.$bg-secondary-hover;
    }

    &:focus-visible {
      color: my-select-option.$col-secondary-hover;
      background: my-select-option.$bg-secondary-hover;
    }

    &:active {
      color: my-select-option.$col-secondary-click;
      background-color: my-select-option.$bg-secondary-click;
    }

    &:disabled {
      color: my-select-option.$col-secondary-disabled;
      background-color: my-select-option.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: my-select-option.$col-secondary--active;
      background-color: my-select-option.$bg-secondary--active;

      &:hover {
        color: my-select-option.$col-secondary-hover--active;
        background-color: my-select-option.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: my-select-option.$col-secondary-hover--active;
        background: my-select-option.$bg-secondary-hover--active;
      }

      &:active {
        color: my-select-option.$col-secondary-click--active;
        background-color: my-select-option.$bg-secondary-click--active;
      }

      &:disabled {
        color: my-select-option.$col-secondary-disabled--active;
        background-color: my-select-option.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: my-select-option.$size-base-tablet;
      height: my-select-option.$height-base-tablet;
    }

    &--primary {
      font-size: my-select-option.$size-primary-tablet;
      height: my-select-option.$height-primary-tablet;
    }

    &--secondary {
      font-size: my-select-option.$size-secondary-tablet;
      height: my-select-option.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: my-select-option.$size-base-desktop;
      height: my-select-option.$height-base-desktop;
    }

    &--primary {
      font-size: my-select-option.$size-primary-desktop;
      height: my-select-option.$height-primary-desktop;
    }

    &--secondary {
      font-size: my-select-option.$size-secondary-desktop;
      height: my-select-option.$height-secondary-desktop;
    }
  }
}
</style>
