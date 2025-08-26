<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const emit = defineEmits<{
  (e: "click"): void;
}>();

const props = defineProps<{
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
}>();

const classes = computed(() => {
  return [
    "btn",
    props.className && props.className,
    props.variant && `btn--${props.variant}`,
    props.isActive && "active",
  ]
    .filter(Boolean)
    .join(" ");
});

const handleClick = () => {
  if (props.disabled) return;
  emit("click");
};
</script>

<template>
  <button
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @click="handleClick"
    :type="type"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "./btn.var.scss" as btn;
@use "@/assets/styles/var.scss" as var;

.btn {
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease;

  &--base {
    font-size: btn.$size-base-mobile;
    line-height: btn.$height-base-mobile;
    color: btn.$col-base;
    background-color: btn.$bg-base;

    &:hover {
      color: btn.$col-base-hover;
      background-color: btn.$bg-base-hover;
    }

    &:focus-visible {
      color: btn.$col-base-hover;
      background: btn.$bg-base-hover;
    }

    &:active {
      color: btn.$col-base-click;
      background-color: btn.$bg-base-click;
    }

    &:disabled {
      color: btn.$col-base-disabled;
      background-color: btn.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: btn.$col-base--active;
      background-color: btn.$bg-base--active;

      &:hover {
        color: btn.$col-base-hover--active;
        background-color: btn.$bg-base-hover--active;
      }

      &:focus-visible {
        color: btn.$col-base-hover--active;
        background: btn.$bg-base-hover--active;
      }

      &:active {
        color: btn.$col-base-click--active;
        background-color: btn.$bg-base-click--active;
      }

      &:disabled {
        color: btn.$col-base-disabled--active;
        background-color: btn.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    font-size: btn.$size-primary-mobile;
    line-height: btn.$height-primary-mobile;
    color: btn.$col-primary;
    background-color: btn.$bg-primary;

    &:hover {
      color: btn.$col-primary-hover;
      background-color: btn.$bg-primary-hover;
    }

    &:focus-visible {
      color: btn.$col-primary-hover;
      background: btn.$bg-primary-hover;
    }

    &:active {
      color: btn.$col-primary-click;
      background-color: btn.$bg-primary-click;
    }

    &:disabled {
      color: btn.$col-primary-disabled;
      background-color: btn.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: btn.$col-primary--active;
      background-color: btn.$bg-primary--active;

      &:hover {
        color: btn.$col-primary-hover--active;
        background-color: btn.$bg-primary-hover--active;
      }

      &:focus-visible {
        color: btn.$col-primary-hover--active;
        background: btn.$bg-primary-hover--active;
      }

      &:active {
        color: btn.$col-primary-click--active;
        background-color: btn.$bg-primary-click--active;
      }

      &:disabled {
        color: btn.$col-primary-disabled--active;
        background-color: btn.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    font-size: btn.$size-secondary-mobile;
    line-height: btn.$height-secondary-mobile;
    color: btn.$col-secondary;
    background-color: btn.$bg-secondary;

    &:hover {
      color: btn.$col-secondary-hover;
      background-color: btn.$bg-secondary-hover;
    }

    &:focus-visible {
      color: btn.$col-secondary-hover;
      background: btn.$bg-secondary-hover;
    }

    &:active {
      color: btn.$col-secondary-click;
      background-color: btn.$bg-secondary-click;
    }

    &:disabled {
      color: btn.$col-secondary-disabled;
      background-color: btn.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      color: btn.$col-secondary--active;
      background-color: btn.$bg-secondary--active;

      &:hover {
        color: btn.$col-secondary-hover--active;
        background-color: btn.$bg-secondary-hover--active;
      }

      &:focus-visible {
        color: btn.$col-secondary-hover--active;
        background: btn.$bg-secondary-hover--active;
      }

      &:active {
        color: btn.$col-secondary-click--active;
        background-color: btn.$bg-secondary-click--active;
      }

      &:disabled {
        color: btn.$col-secondary-disabled--active;
        background-color: btn.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      font-size: btn.$size-base-tablet;
      line-height: btn.$height-base-tablet;
    }

    &--primary {
      font-size: btn.$size-primary-tablet;
      line-height: btn.$height-primary-tablet;
    }

    &--secondary {
      font-size: btn.$size-secondary-tablet;
      line-height: btn.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      font-size: btn.$size-base-desktop;
      line-height: btn.$height-base-desktop;
    }

    &--primary {
      font-size: btn.$size-primary-desktop;
      line-height: btn.$height-primary-desktop;
    }

    &--secondary {
      font-size: btn.$size-secondary-desktop;
      line-height: btn.$height-secondary-desktop;
    }
  }
}
</style>
