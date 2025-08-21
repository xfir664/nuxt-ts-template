<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  disabled?: boolean;
  className?: string;
  styles?: CSSProperties;
  variant?: "base" | "primary" | "secondary";
  checked?: boolean;
}>();

const classes = computed(() => {
  return [
    "checkbox",
    props.className && props.className,
    props.variant && `checkbox--${props.variant}`,
  ]
    .filter(Boolean)
    .join(" ");
});

const emit = defineEmits<{
  (e: "change", value: boolean): void;
}>();

const handleChange = (event: Event) => {
  if (!event.target) return;
  emit("change", (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <input
    type="checkbox"
    :disabled="props.disabled"
    :checked="checked"
    :class="classes"
    :style="props.styles"
    @change="handleChange"
  />
</template>

<style scoped lang="scss">
@use "./checkbox.var.scss" as checkbox;
@use "@/assets/styles/var.scss" as var;

.checkbox {
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;

  &--base {
    width: checkbox.$width-base-mobile;
    height: checkbox.$height-base-mobile;

    &:hover {
      background-color: checkbox.$bg-base-hover;
    }

    &:focus-visible {
      background-color: checkbox.$bg-base-focus;
    }

    &:active {
      background-color: checkbox.$bg-base-click;
    }

    &:disabled {
      background-color: checkbox.$bg-base-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(checkbox.$width-base-mobile - 50%);
        height: calc(checkbox.$height-base-mobile - 50%);
        background-color: checkbox.$bg-base--active;
        border-radius: 50%;
      }
    }
  }

  &--primary {
    width: checkbox.$width-primary-mobile;
    height: checkbox.$height-primary-mobile;

    &:hover {
      background-color: checkbox.$bg-primary-hover;
    }

    &:focus-visible {
      background-color: checkbox.$bg-primary-focus;
    }

    &:active {
      background-color: checkbox.$bg-primary-click;
    }

    &:disabled {
      background-color: checkbox.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(checkbox.$width-primary-mobile - 50%);
        height: calc(checkbox.$height-primary-mobile - 50%);
        background-color: checkbox.$bg-primary--active;
        border-radius: 50%;
      }
    }
  }

  &--secondary {
    width: checkbox.$width-secondary-mobile;
    height: checkbox.$height-secondary-mobile;

    &:hover {
      background-color: checkbox.$bg-secondary-hover;
    }

    &:focus-visible {
      background-color: checkbox.$bg-secondary-focus;
    }

    &:active {
      background-color: checkbox.$bg-secondary-click;
    }

    &:disabled {
      background-color: checkbox.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &:checked {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(checkbox.$width-secondary-mobile - 50%);
        height: calc(checkbox.$height-secondary-mobile - 50%);
        background-color: checkbox.$bg-secondary--active;
        border-radius: 50%;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: checkbox.$width-base-tablet;
      height: checkbox.$height-base-tablet;

      &:checked {
        &::before {
          width: calc(checkbox.$width-base-tablet - 50%);
          height: calc(checkbox.$height-base-tablet - 50%);
        }
      }
    }

    &--primary {
      width: checkbox.$width-primary-tablet;
      height: checkbox.$height-primary-tablet;

      &:checked {
        &::before {
          width: calc(checkbox.$width-primary-tablet - 50%);
          height: calc(checkbox.$height-primary-tablet - 50%);
        }
      }
    }

    &--secondary {
      width: checkbox.$width-secondary-tablet;
      height: checkbox.$height-secondary-tablet;

      &:checked {
        &::before {
          width: calc(checkbox.$width-secondary-tablet - 50%);
          height: calc(checkbox.$height-secondary-tablet - 50%);
        }
      }
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: checkbox.$width-base-desktop;
      height: checkbox.$height-base-desktop;

      &:checked {
        &::before {
          width: calc(checkbox.$width-base-desktop - 50%);
          height: calc(checkbox.$height-base-desktop - 50%);
        }
      }
    }

    &--primary {
      width: checkbox.$width-primary-desktop;
      height: checkbox.$height-primary-desktop;

      &:checked {
        &::before {
          width: calc(checkbox.$width-primary-desktop - 50%);
          height: calc(checkbox.$height-primary-desktop - 50%);
        }
      }
    }

    &--secondary {
      width: checkbox.$width-secondary-desktop;
      height: checkbox.$height-secondary-desktop;

      &:checked {
        &::before {
          width: calc(checkbox.$width-secondary-desktop - 50%);
          height: calc(checkbox.$height-secondary-desktop - 50%);
        }
      }
    }
  }
}
</style>
