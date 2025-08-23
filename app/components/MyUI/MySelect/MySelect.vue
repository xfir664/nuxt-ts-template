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
    "my-select",
    props.className && props.className,
    props.variant && `my-select--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <select :class="classes" :style="styles" :disabled="disabled">
    <slot />
  </select>
</template>

<style scoped lang="scss">
@use "./select.var.scss" as select;
@use "@/assets/styles/var.scss" as var;

.my-select {
  transition: all 0.3s ease;

  &--base {
    color: select.$col-base;
    background-color: select.$bg-base;

    &:hover {
      color: select.$col-base-hover;
      background-color: select.$bg-base-hover;
    }

    &:focus-visible {
      color: select.$col-base-focus;
      background-color: select.$bg-base-focus;
    }

    &:active {
      color: select.$col-base-click;
      background-color: select.$bg-base-click;
    }

    &:disabled {
      color: select.$col-base-disabled;
      background-color: select.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: select.$col-base--active;
      background-color: select.$bg-base--active;

      &:hover {
        color: select.$col-base-hover--active;
        background-color: select.$bg-base-hover--active;
      }

      &:focus-visible {
        color: select.$col-base-focus--active;
        background-color: select.$bg-base-focus--active;
      }

      &:active {
        color: select.$col-base-click--active;
        background-color: select.$bg-base-click--active;
      }

      &:disabled {
        color: select.$col-base-disabled--active;
        background-color: select.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    color: select.$col-primary;
    background-color: select.$bg-primary;

    &:hover {
      color: select.$col-primary-hover;
      background-color: select.$bg-primary-hover;
    }

    &:focus-visible {
      color: select.$col-primary-focus;
      background-color: select.$bg-primary-focus;
    }

    &:active {
      color: select.$col-primary-click;
      background-color: select.$bg-primary-click;
    }

    &:disabled {
      color: select.$col-primary-disabled;
      background-color: select.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: select.$col-primary--active;
      background-color: select.$bg-primary--active;

      &:hover {
        color: select.$col-primary-hover--active;
        background-color: select.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: select.$col-primary-focus--active;
        background-color: select.$bg-primary-focus--active;
      }

      &:active {
        color: select.$col-primary-click--active;
        background-color: select.$bg-primary-click--active;
      }

      &:disabled {
        color: select.$col-primary-disabled--active;
        background-color: select.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    color: select.$col-secondary;
    background-color: select.$bg-secondary;

    &:hover {
      color: select.$col-secondary-hover;
      background-color: select.$bg-secondary-hover;
    }

    &:focus-visible {
      color: select.$col-secondary-focus;
      background-color: select.$bg-secondary-focus;
    }

    &:active {
      color: select.$col-secondary-click;
      background-color: select.$bg-secondary-click;
    }

    &:disabled {
      color: select.$col-secondary-disabled;
      background-color: select.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: select.$col-secondary--active;
      background-color: select.$bg-secondary--active;

      &:hover {
        color: select.$col-secondary-hover--active;
        background-color: select.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: select.$col-secondary-focus--active;
        background-color: select.$bg-secondary-focus--active;
      }

      &:active {
        color: select.$col-secondary-click--active;
        background-color: select.$bg-secondary-click--active;
      }

      &:disabled {
        color: select.$col-secondary-disabled--active;
        background-color: select.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }
}
</style>
