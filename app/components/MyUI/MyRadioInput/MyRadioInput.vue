<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "change"): void;
}>();

const classes = computed(() => {
  return [
    "my-radio-input",
    props.className && props.className,
    props.variant && `my-radio-input--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});

const handleChange = () => {
  emit("change");
};
</script>

<template>
  <input
    type="radio"
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @change="handleChange"
  />
</template>

<style scoped lang="scss">
@use "./radio.var.scss" as radio;
@use "@/assets/styles/var.scss" as var;

.my-radio-input {
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;

  &--base {
    width: radion.$width-base-mobile;
    height: radion.$height-base-mobile;

    &:hover {
      background-color: radion.$bg-base-hover;
    }

    &:focus-visible {
      background-color: radion.$bg-base-focus;
    }

    &:active {
      background-color: radion.$bg-base-click;
    }

    &:disabled {
      background-color: radion.$bg-base-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radion.$width-base-mobile - 50%);
        height: calc(radion.$height-base-mobile - 50%);
        background-color: radion.$bg-base-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radion.$bg-base--active;
      &:hover {
        background-color: radion.$bg-base-hover--active;
      }

      &:focus-visible {
        background-color: radion.$bg-base-focus--active;
      }

      &:active {
        background-color: radion.$bg-base-click--active;
      }

      &:disabled {
        background-color: radion.$bg-base-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radion.$bg-base-checked--active;
        }
      }
    }
  }

  &--primary {
    width: radion.$width-primary-mobile;
    height: radion.$height-primary-mobile;

    &:hover {
      background-color: radion.$bg-primary-hover;
    }

    &:focus-visible {
      background-color: radion.$bg-primary-focus;
    }

    &:active {
      background-color: radion.$bg-primary-click;
    }

    &:disabled {
      background-color: radion.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radion.$width-primary-mobile - 50%);
        height: calc(radion.$height-primary-mobile - 50%);
        background-color: radion.$bg-primary-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radion.$bg-primary--active;

      &:hover {
        background-color: radion.$bg-primary-hover--active;
      }

      &:focus-visible {
        background-color: radion.$bg-primary-focus--active;
      }

      &:active {
        background-color: radion.$bg-primary-click--active;
      }

      &:disabled {
        background-color: radion.$bg-primary-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radion.$bg-primary-checked--active;
        }
      }
    }
  }

  &--secondary {
    width: radion.$width-secondary-mobile;
    height: radion.$height-secondary-mobile;

    &:hover {
      background-color: radion.$bg-secondary-hover;
    }

    &:focus-visible {
      background-color: radion.$bg-secondary-focus;
    }

    &:active {
      background-color: radion.$bg-secondary-click;
    }

    &:disabled {
      background-color: radion.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radion.$width-secondary-mobile - 50%);
        height: calc(radion.$height-secondary-mobile - 50%);
        background-color: radion.$bg-secondary-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radion.$bg-secondary--active;
      &:hover {
        background-color: radion.$bg-secondary-hover--active;
      }

      &:focus-visible {
        background-color: radion.$bg-secondary-focus--active;
      }
      
      &:active {
        background-color: radion.$bg-secondary-click--active;
      }

      &:disabled {
        background-color: radion.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radion.$bg-secondary-checked--active;
        }
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: radion.$width-base-tablet;
      height: radion.$height-base-tablet;

      &:checked {
        &::before {
          width: calc(radion.$width-base-tablet - 50%);
          height: calc(radion.$height-base-tablet - 50%);
        }
      }
    }

    &--primary {
      width: radion.$width-primary-tablet;
      height: radion.$height-primary-tablet;

      &:checked {
        &::before {
          width: calc(radion.$width-primary-tablet - 50%);
          height: calc(radion.$height-primary-tablet - 50%);
        }
      }
    }

    &--secondary {
      width: radion.$width-secondary-tablet;
      height: radion.$height-secondary-tablet;

      &:checked {
        &::before {
          width: calc(radion.$width-secondary-tablet - 50%);
          height: calc(radion.$height-secondary-tablet - 50%);
        }
      }
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: radion.$width-base-desktop;
      height: radion.$height-base-desktop;

      &:checked {
        &::before {
          width: calc(radion.$width-base-desktop - 50%);
          height: calc(radion.$height-base-desktop - 50%);
        }
      }
    }

    &--primary {
      width: radion.$width-primary-desktop;
      height: radion.$height-primary-desktop;

      &:checked {
        &::before {
          width: calc(radion.$width-primary-desktop - 50%);
          height: calc(radion.$height-primary-desktop - 50%);
        }
      }
    }

    &--secondary {
      width: radion.$width-secondary-desktop;
      height: radion.$height-secondary-desktop;

      &:checked {
        &::before {
          width: calc(radion.$width-secondary-desktop - 50%);
          height: calc(radion.$height-secondary-desktop - 50%);
        }
      }
    }
  }
}
</style>
