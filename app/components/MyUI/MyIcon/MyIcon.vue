<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  id?: string;
  href?: string;
  className?: string;
  variant?: "base" | "primary" | "secondary";
  disabled?: boolean;
  isActive?: boolean;
  styles?: CSSProperties;
}>();

const path = computed(() => {
  return props.href || `/sprites/sprite.svg#${props.id}`;
});

const classes = computed(() => {
  return [
    "icon",
    props.className && props.className,
    props.variant && `icon--${props.variant}`,
    props.isActive && `active`,
    props.disabled && `disabled`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <svg :class="classes" :style="styles">
    <use :href="path" />
  </svg>
</template>

<style scoped lang="scss">
@use "./icon.var.scss" as icon;
@use "@/assets/styles/var.scss" as var;

.icon {
  transition: all 0.3s ease;

  &--base {
    width: icon.$width-base-mobile;
    height: icon.$height-base-mobile;
    color: icon.$col-base;

    &:hover {
      color: icon.$col-base-hover;
    }

    &:focus-visible {
      color: icon.$col-base-focus;
    }

    &:active {
      color: icon.$col-base-click;
    }

    &.disabled {
      color: icon.$col-base-disabled;
    }

    &.active {
      color: icon.$col-base--active;
      &:hover {
        color: icon.$col-base-hover--active;
      }

      &:focus-visible {
        color: icon.$col-base-focus--active;
      }

      &:active {
        color: icon.$col-base-click--active;
      }

      &.disabled {
        color: icon.$col-base-disabled--active;
      }
    }
  }

  &--primary {
    width: icon.$width-primary-mobile;
    height: icon.$height-primary-mobile;
    color: icon.$col-primary;

    &:hover {
      color: icon.$col-primary-hover;
    }

    &:focus-visible {
      color: icon.$col-primary-focus;
    }

    &:active {
      color: icon.$col-primary-click;
    }

    &.disabled {
      color: icon.$col-primary-disabled;
    }

    &.active {
      color: icon.$col-primary--active;

      &:hover {
        color: icon.$col-primary-hover--active;
      }

      &:focus-visible {
        color: icon.$col-primary-focus--active;
      }

      &:active {
        color: icon.$col-primary-click--active;
      }

      &.disabled {
        color: icon.$col-primary-disabled--active;
      }
    }
  }

  &--secondary {
    width: icon.$width-secondary-mobile;
    height: icon.$height-secondary-mobile;
    color: icon.$col-secondary;

    &:hover {
      color: icon.$col-secondary-hover;
    }

    &:focus-visible {
      color: icon.$col-secondary-focus;
    }

    &:active {
      color: icon.$col-secondary-click;
    }

    &.disabled {
      color: icon.$col-secondary-disabled;
    }

    &.active {
      color: icon.$col-secondary--active;

      &:hover {
        color: icon.$col-secondary-hover--active;
      }

      &:focus-visible {
        color: icon.$col-secondary-focus--active;
      }

      &:active {
        color: icon.$col-secondary-click--active;
      }

      &.disabled {
        color: icon.$col-secondary-disabled--active;
      }
    }
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
