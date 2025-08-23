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

<style scoped lang="scss">
@use "./navlink.var.scss" as navlink;
@use "@/assets/styles/var.scss" as var;

.my-nav-link {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease;

  &--base {
    font-size: navlink.$size-base-mobile;
    height: navlink.$height-base-mobile;
    color: navlink.$col-base;
    background-color: navlink.$bg-base;

    &:hover {
      color: navlink.$col-base-hover;
      background-color: navlink.$bg-base-hover;
    }

    &:focus-visible {
      color: navlink.$col-base-hover;
      background: navlink.$bg-base-hover;
    }

    &:active {
      color: navlink.$col-base-click;
      background-color: navlink.$bg-base-click;
    }

    &.disabled {
      color: navlink.$col-base-disabled;
      background-color: navlink.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: navlink.$col-base--active;
      background-color: navlink.$bg-base--active;

      &:hover {
        color: navlink.$col-base-hover--active;
        background-color: navlink.$bg-base-hover--active;
      }

      &:focus-visible {
        color: navlink.$col-base-hover--active;
        background: navlink.$bg-base-hover--active;
      }

      &:active {
        color: navlink.$col-base-click--active;
        background-color: navlink.$bg-base-click--active;
      }

      &.disabled {
        color: navlink.$col-base-disabled--active;
        background-color: navlink.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    font-size: navlink.$size-primary-mobile;
    height: navlink.$height-primary-mobile;
    color: navlink.$col-primary;
    background-color: navlink.$bg-primary;

    &:hover {
      color: navlink.$col-primary-hover;
      background-color: navlink.$bg-primary-hover;
    }

    &:focus-visible {
      color: navlink.$col-primary-hover;
      background: navlink.$bg-primary-hover;
    }

    &:active {
      color: navlink.$col-primary-click;
      background-color: navlink.$bg-primary-click;
    }

    &.disabled {
      color: navlink.$col-primary-disabled;
      background-color: navlink.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: navlink.$col-primary--active;
      background-color: navlink.$bg-primary--active;

      &:hover {
        color: navlink.$col-primary-hover--active;
        background-color: navlink.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: navlink.$col-primary-hover--active;
        background: navlink.$bg-primary-hover--active;
      }

      &:active {
        color: navlink.$col-primary-click--active;
        background-color: navlink.$bg-primary-click--active;
      }

      &.disabled {
        color: navlink.$col-primary-disabled--active;
        background-color: navlink.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    font-size: navlink.$size-secondary-mobile;
    height: navlink.$height-secondary-mobile;
    color: navlink.$col-secondary;
    background-color: navlink.$bg-secondary;

    &:hover {
      color: navlink.$col-secondary-hover;
      background-color: navlink.$bg-secondary-hover;
    }

    &:focus-visible {
      color: navlink.$col-secondary-hover;
      background: navlink.$bg-secondary-hover;
    }

    &:active {
      color: navlink.$col-secondary-click;
      background-color: navlink.$bg-secondary-click;
    }

    &.disabled {
      color: navlink.$col-secondary-disabled;
      background-color: navlink.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: navlink.$col-secondary--active;
      background-color: navlink.$bg-secondary--active;

      &:hover {
        color: navlink.$col-secondary-hover--active;
        background-color: navlink.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: navlink.$col-secondary-hover--active;
        background: navlink.$bg-secondary-hover--active;
      }

      &:active {
        color: navlink.$col-secondary-click--active;
        background-color: navlink.$bg-secondary-click--active;
      }

      &.disabled {
        color: navlink.$col-secondary-disabled--active;
        background-color: navlink.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: navlink.$size-base-tablet;
      height: navlink.$height-base-tablet;
    }

    &--primary {
      font-size: navlink.$size-primary-tablet;
      height: navlink.$height-primary-tablet;
    }

    &--secondary {
      font-size: navlink.$size-secondary-tablet;
      height: navlink.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: navlink.$size-base-desktop;
      height: navlink.$height-base-desktop;
    }

    &--primary {
      font-size: navlink.$size-primary-desktop;
      height: navlink.$height-primary-desktop;
    }

    &--secondary {
      font-size: navlink.$size-secondary-desktop;
      height: navlink.$height-secondary-desktop;
    }
  }
}
</style>
