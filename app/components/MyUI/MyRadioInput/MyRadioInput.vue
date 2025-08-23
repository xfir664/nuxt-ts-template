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
    width: radio.$width-base-mobile;
    height: radio.$height-base-mobile;

    &:hover {
      background-color: radio.$bg-base-hover;
    }

    &:focus-visible {
      background-color: radio.$bg-base-focus;
    }

    &:active {
      background-color: radio.$bg-base-click;
    }

    &:disabled {
      background-color: radio.$bg-base-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radio.$width-base-mobile - 50%);
        height: calc(radio.$height-base-mobile - 50%);
        background-color: radio.$bg-base-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radio.$bg-base--active;
      &:hover {
        background-color: radio.$bg-base-hover--active;
      }

      &:focus-visible {
        background-color: radio.$bg-base-focus--active;
      }

      &:active {
        background-color: radio.$bg-base-click--active;
      }

      &:disabled {
        background-color: radio.$bg-base-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radio.$bg-base-checked--active;
        }
      }
    }
  }

  &--primary {
    width: radio.$width-primary-mobile;
    height: radio.$height-primary-mobile;

    &:hover {
      background-color: radio.$bg-primary-hover;
    }

    &:focus-visible {
      background-color: radio.$bg-primary-focus;
    }

    &:active {
      background-color: radio.$bg-primary-click;
    }

    &:disabled {
      background-color: radio.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radio.$width-primary-mobile - 50%);
        height: calc(radio.$height-primary-mobile - 50%);
        background-color: radio.$bg-primary-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radio.$bg-primary--active;

      &:hover {
        background-color: radio.$bg-primary-hover--active;
      }

      &:focus-visible {
        background-color: radio.$bg-primary-focus--active;
      }

      &:active {
        background-color: radio.$bg-primary-click--active;
      }

      &:disabled {
        background-color: radio.$bg-primary-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radio.$bg-primary-checked--active;
        }
      }
    }
  }

  &--secondary {
    width: radio.$width-secondary-mobile;
    height: radio.$height-secondary-mobile;

    &:hover {
      background-color: radio.$bg-secondary-hover;
    }

    &:focus-visible {
      background-color: radio.$bg-secondary-focus;
    }

    &:active {
      background-color: radio.$bg-secondary-click;
    }

    &:disabled {
      background-color: radio.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(radio.$width-secondary-mobile - 50%);
        height: calc(radio.$height-secondary-mobile - 50%);
        background-color: radio.$bg-secondary-checked;
        border-radius: 50%;
      }
    }

    &.active {
      background-color: radio.$bg-secondary--active;
      &:hover {
        background-color: radio.$bg-secondary-hover--active;
      }

      &:focus-visible {
        background-color: radio.$bg-secondary-focus--active;
      }
      
      &:active {
        background-color: radio.$bg-secondary-click--active;
      }

      &:disabled {
        background-color: radio.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }

      &:checked {
        &::before {
          background-color: radio.$bg-secondary-checked--active;
        }
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: radio.$width-base-tablet;
      height: radio.$height-base-tablet;

      &:checked {
        &::before {
          width: calc(radio.$width-base-tablet - 50%);
          height: calc(radio.$height-base-tablet - 50%);
        }
      }
    }

    &--primary {
      width: radio.$width-primary-tablet;
      height: radio.$height-primary-tablet;

      &:checked {
        &::before {
          width: calc(radio.$width-primary-tablet - 50%);
          height: calc(radio.$height-primary-tablet - 50%);
        }
      }
    }

    &--secondary {
      width: radio.$width-secondary-tablet;
      height: radio.$height-secondary-tablet;

      &:checked {
        &::before {
          width: calc(radio.$width-secondary-tablet - 50%);
          height: calc(radio.$height-secondary-tablet - 50%);
        }
      }
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: radio.$width-base-desktop;
      height: radio.$height-base-desktop;

      &:checked {
        &::before {
          width: calc(radio.$width-base-desktop - 50%);
          height: calc(radio.$height-base-desktop - 50%);
        }
      }
    }

    &--primary {
      width: radio.$width-primary-desktop;
      height: radio.$height-primary-desktop;

      &:checked {
        &::before {
          width: calc(radio.$width-primary-desktop - 50%);
          height: calc(radio.$height-primary-desktop - 50%);
        }
      }
    }

    &--secondary {
      width: radio.$width-secondary-desktop;
      height: radio.$height-secondary-desktop;

      &:checked {
        &::before {
          width: calc(radio.$width-secondary-desktop - 50%);
          height: calc(radio.$height-secondary-desktop - 50%);
        }
      }
    }
  }
}
</style>
