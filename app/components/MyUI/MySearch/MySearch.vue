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

<style scoped lang="scss">
@use "./search.var.scss" as search;
@use "@/assets/styles/var.scss" as var;

.my-search {
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &--base {
    background-color: search.$bg-base;
    color: search.$col-base;
    font-size: search.$size-base-mob;
    line-height: search.$height-base-mob;

    &:hover {
      background-color: search.$bg-base-hover;
      color: search.$col-base-hover;
    }

    &:focus-visible {
      background-color: search.$bg-base-focus;
      color: search.$col-base-focus;
    }

    &:active {
      background-color: search.$bg-base-click;
      color: search.$col-base-click;
    }

    &:disabled {
      background-color: search.$bg-base-disabled;
      color: search.$col-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: search.$bg-base--active;
      color: search.$col-base--active;

      &:hover {
        background-color: search.$bg-base-hover--active;
        color: search.$col-base-hover--active;
      }

      &:focus-visible {
        background-color: search.$bg-base-focus--active;
        color: search.$col-base-focus--active;
      }

      &:active {
        background-color: search.$bg-base-click--active;
        color: search.$col-base-click--active;
      }

      &:disabled {
        background-color: search.$bg-base-disabled--active;
        color: search.$col-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    background-color: search.$bg-primary;
    color: search.$col-primary;
    font-size: search.$size-primary-mob;
    line-height: search.$height-primary-mob;

    &:hover {
      background-color: search.$bg-primary-hover;
      color: search.$col-primary-hover;
    }

    &:focus-visible {
      background-color: search.$bg-primary-focus;
      color: search.$col-primary-focus;
    }

    &:active {
      background-color: search.$bg-primary-click;
      color: search.$col-primary-click;
    }

    &:disabled {
      background-color: search.$bg-primary-disabled;
      color: search.$col-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: search.$bg-primary--active;
      color: search.$col-primary--active;

      &:hover {
        background-color: search.$bg-primary-hover--active;
        color: search.$col-primary-hover--active;
      }

      &:focus-visible {
        background-color: search.$bg-primary-focus--active;
        color: search.$col-primary-focus--active;
      }

      &:active {
        background-color: search.$bg-primary-click--active;
        color: search.$col-primary-click--active;
      }

      &:disabled {
        background-color: search.$bg-primary-disabled--active;
        color: search.$col-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    background-color: search.$bg-secondary;
    color: search.$col-secondary;
    font-size: search.$size-secondary-mob;
    line-height: search.$height-secondary-mob;

    &:hover {
      background-color: search.$bg-secondary-hover;
      color: search.$col-secondary-hover;
    }

    &:focus-visible {
      background-color: search.$bg-secondary-focus;
      color: search.$col-secondary-focus;
    }

    &:active {
      background-color: search.$bg-secondary-click;
      color: search.$col-secondary-click;
    }

    &:disabled {
      background-color: search.$bg-secondary-disabled;
      color: search.$col-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: search.$bg-secondary--active;
      color: search.$col-secondary--active;

      &:hover {
        background-color: search.$bg-secondary-hover--active;
        color: search.$col-secondary-hover--active;
      }

      &:focus-visible {
        background-color: search.$bg-secondary-focus--active;
        color: search.$col-secondary-focus--active;
      }

      &:active {
        background-color: search.$bg-secondary-click--active;
        color: search.$col-secondary-click--active;
      }

      &:disabled {
        background-color: search.$bg-secondary-disabled--active;
        color: search.$col-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: search.$size-base-tablet;
      line-height: search.$height-base-tablet;
    }

    &--primary {
      font-size: search.$size-primary-tablet;
      line-height: search.$height-primary-tablet;
    }

    &--secondary {
      font-size: search.$size-secondary-tablet;
      line-height: search.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: search.$size-base-desktop;
      line-height: search.$height-base-desktop;
    }

    &--primary {
      font-size: search.$size-primary-desktop;
      line-height: search.$height-primary-desktop;
    }

    &--secondary {
      font-size: search.$size-secondary-desktop;
      line-height: search.$height-secondary-desktop;
    }
  }
}
</style>
