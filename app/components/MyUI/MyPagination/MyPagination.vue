<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
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

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "./pagination.var.scss" as pagination;
@use "@/assets/styles/var.scss" as var;

.my-pagination {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease;

  &--base {
    font-size: pagination.$size-base-mobile;
    height: pagination.$height-base-mobile;
    color: pagination.$col-base;
    background-color: pagination.$bg-base;

    &:hover {
      color: pagination.$col-base-hover;
      background-color: pagination.$bg-base-hover;
    }

    &:focus-visible {
      color: pagination.$col-base-hover;
      background: pagination.$bg-base-hover;
    }

    &:active {
      color: pagination.$col-base-click;
      background-color: pagination.$bg-base-click;
    }

    &:disabled {
      color: pagination.$col-base-disabled;
      background-color: pagination.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: pagination.$col-base--active;
      background-color: pagination.$bg-base--active;

      &:hover {
        color: pagination.$col-base-hover--active;
        background-color: pagination.$bg-base-hover--active;
      }

      &:focus-visible {
        color: pagination.$col-base-hover--active;
        background: pagination.$bg-base-hover--active;
      }

      &:active {
        color: pagination.$col-base-click--active;
        background-color: pagination.$bg-base-click--active;
      }

      &:disabled {
        color: pagination.$col-base-disabled--active;
        background-color: pagination.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    font-size: pagination.$size-primary-mobile;
    height: pagination.$height-primary-mobile;
    color: pagination.$col-primary;
    background-color: pagination.$bg-primary;

    &:hover {
      color: pagination.$col-primary-hover;
      background-color: pagination.$bg-primary-hover;
    }

    &:focus-visible {
      color: pagination.$col-primary-hover;
      background: pagination.$bg-primary-hover;
    }

    &:active {
      color: pagination.$col-primary-click;
      background-color: pagination.$bg-primary-click;
    }

    &:disabled {
      color: pagination.$col-primary-disabled;
      background-color: pagination.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: pagination.$col-primary--active;
      background-color: pagination.$bg-primary--active;

      &:hover {
        color: pagination.$col-primary-hover--active;
        background-color: pagination.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: pagination.$col-primary-hover--active;
        background: pagination.$bg-primary-hover--active;
      }

      &:active {
        color: pagination.$col-primary-click--active;
        background-color: pagination.$bg-primary-click--active;
      }

      &:disabled {
        color: pagination.$col-primary-disabled--active;
        background-color: pagination.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    font-size: pagination.$size-secondary-mobile;
    height: pagination.$height-secondary-mobile;
    color: pagination.$col-secondary;
    background-color: pagination.$bg-secondary;

    &:hover {
      color: pagination.$col-secondary-hover;
      background-color: pagination.$bg-secondary-hover;
    }

    &:focus-visible {
      color: pagination.$col-secondary-hover;
      background: pagination.$bg-secondary-hover;
    }

    &:active {
      color: pagination.$col-secondary-click;
      background-color: pagination.$bg-secondary-click;
    }

    &:disabled {
      color: pagination.$col-secondary-disabled;
      background-color: pagination.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: pagination.$col-secondary--active;
      background-color: pagination.$bg-secondary--active;

      &:hover {
        color: pagination.$col-secondary-hover--active;
        background-color: pagination.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: pagination.$col-secondary-hover--active;
        background: pagination.$bg-secondary-hover--active;
      }

      &:active {
        color: pagination.$col-secondary-click--active;
        background-color: pagination.$bg-secondary-click--active;
      }

      &:disabled {
        color: pagination.$col-secondary-disabled--active;
        background-color: pagination.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: pagination.$size-base-tablet;
      height: pagination.$height-base-tablet;
    }

    &--primary {
      font-size: pagination.$size-primary-tablet;
      height: pagination.$height-primary-tablet;
    }

    &--secondary {
      font-size: pagination.$size-secondary-tablet;
      height: pagination.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: pagination.$size-base-desktop;
      height: pagination.$height-base-desktop;
    }

    &--primary {
      font-size: pagination.$size-primary-desktop;
      height: pagination.$height-primary-desktop;
    }

    &--secondary {
      font-size: pagination.$size-secondary-desktop;
      height: pagination.$height-secondary-desktop;
    }
  }
}
</style>
