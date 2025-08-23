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
    props.disabled && `disabled`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <a :href="href" :target="target" :class="classes" :style="styles">
    <slot />
  </a>
</template>

<style scoped lang="scss">
@use "./link.var.scss" as link;
@use "@/assets/styles/var.scss" as var;

.my-link {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease;

  &--base {
    font-size: link.$size-base-mobile;
    height: link.$height-base-mobile;
    color: link.$col-base;
    background-color: link.$bg-base;

    &:hover {
      color: link.$col-base-hover;
      background-color: link.$bg-base-hover;
    }

    &:focus-visible {
      color: link.$col-base-hover;
      background: link.$bg-base-hover;
    }

    &:active {
      color: link.$col-base-click;
      background-color: link.$bg-base-click;
    }

    &.disabled {
      color: link.$col-base-disabled;
      background-color: link.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: link.$col-base--active;
      background-color: link.$bg-base--active;

      &:hover {
        color: link.$col-base-hover--active;
        background-color: link.$bg-base-hover--active;
      }

      &:focus-visible {
        color: link.$col-base-hover--active;
        background: link.$bg-base-hover--active;
      }

      &:active {
        color: link.$col-base-click--active;
        background-color: link.$bg-base-click--active;
      }

      &.disabled {
        color: link.$col-base-disabled--active;
        background-color: link.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    font-size: link.$size-primary-mobile;
    height: link.$height-primary-mobile;
    color: link.$col-primary;
    background-color: link.$bg-primary;

    &:hover {
      color: link.$col-primary-hover;
      background-color: link.$bg-primary-hover;
    }

    &:focus-visible {
      color: link.$col-primary-hover;
      background: link.$bg-primary-hover;
    }

    &:active {
      color: link.$col-primary-click;
      background-color: link.$bg-primary-click;
    }

    &.disabled {
      color: link.$col-primary-disabled;
      background-color: link.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: link.$col-primary--active;
      background-color: link.$bg-primary--active;

      &:hover {
        color: link.$col-primary-hover--active;
        background-color: link.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: link.$col-primary-hover--active;
        background: link.$bg-primary-hover--active;
      }

      &:active {
        color: link.$col-primary-click--active;
        background-color: link.$bg-primary-click--active;
      }

      &.disabled {
        color: link.$col-primary-disabled--active;
        background-color: link.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    font-size: link.$size-secondary-mobile;
    height: link.$height-secondary-mobile;
    color: link.$col-secondary;
    background-color: link.$bg-secondary;

    &:hover {
      color: link.$col-secondary-hover;
      background-color: link.$bg-secondary-hover;
    }

    &:focus-visible {
      color: link.$col-secondary-hover;
      background: link.$bg-secondary-hover;
    }

    &:active {
      color: link.$col-secondary-click;
      background-color: link.$bg-secondary-click;
    }

    &.disabled {
      color: link.$col-secondary-disabled;
      background-color: link.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: link.$col-secondary--active;
      background-color: link.$bg-secondary--active;

      &:hover {
        color: link.$col-secondary-hover--active;
        background-color: link.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: link.$col-secondary-hover--active;
        background: link.$bg-secondary-hover--active;
      }

      &:active {
        color: link.$col-secondary-click--active;
        background-color: link.$bg-secondary-click--active;
      }

      &.disabled {
        color: link.$col-secondary-disabled--active;
        background-color: link.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: link.$size-base-tablet;
      height: link.$height-base-tablet;
    }

    &--primary {
      font-size: link.$size-primary-tablet;
      height: link.$height-primary-tablet;
    }

    &--secondary {
      font-size: link.$size-secondary-tablet;
      height: link.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: link.$size-base-desktop;
      height: link.$height-base-desktop;
    }

    &--primary {
      font-size: link.$size-primary-desktop;
      height: link.$height-primary-desktop;
    }

    &--secondary {
      font-size: link.$size-secondary-desktop;
      height: link.$height-secondary-desktop;
    }
  }
}
</style>
