<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = defineProps<{
  disabled?: boolean;
  styles?: CSSProperties;
  className?: string;
  variant?: "base" | "primary" | "secondary";
  isActive?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

const classes = computed(() => {
  return [
    "file-input",
    props.className && props.className,
    props.variant && `file-input--${props.variant}`,
    props.isActive && `active`,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <input
    type="file"
    :disabled="props.disabled"
    :class="classes"
    :style="props.styles"
    @change="handleChange"
  />
</template>

<style scoped lang="scss">
@use "./file.var.scss" as file;
@use "@/assets/styles/var.scss" as var;

.file-input {
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &--base {
    width: file.$width-base-mobile;
    height: file.$height-base-mobile;

    &:hover {
      background-color: file.$bg-base-hover;
    }

    &:focus-visible {
      background-color: file.$bg-base-focus;
    }

    &:active {
      background-color: file.$bg-base-click;
    }

    &:disabled {
      background-color: file.$bg-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: file.$bg-base--active;

      &:hover {
        background-color: file.$bg-base-hover--active;
      }

      &:focus-visible {
        background-color: file.$bg-base-focus--active;
      }

      &:active {
        background-color: file.$bg-base-click--active;
      }

      &:disabled {
        background-color: file.$bg-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    width: file.$width-primary-mobile;
    height: file.$height-primary-mobile;

    &:hover {
      background-color: file.$bg-primary-hover;
    }

    &:focus-visible {
      background-color: file.$bg-primary-focus;
    }

    &:active {
      background-color: file.$bg-primary-click;
    }

    &:disabled {
      background-color: file.$bg-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: file.$bg-primary--active;

      &:hover {
        background-color: file.$bg-primary-hover--active;
      }

      &:focus-visible {
        background-color: file.$bg-primary-focus--active;
      }

      &:active {
        background-color: file.$bg-primary-click--active;
      }

      &:disabled {
        background-color: file.$bg-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    width: file.$width-secondary-mobile;
    height: file.$height-secondary-mobile;

    &:hover {
      background-color: file.$bg-secondary-hover;
    }

    &:focus-visible {
      background-color: file.$bg-secondary-focus;
    }

    &:active {
      background-color: file.$bg-secondary-click;
    }

    &:disabled {
      background-color: file.$bg-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: file.$bg-secondary--active;
      &:hover {
        background-color: file.$bg-secondary-hover--active;
      }

      &:focus-visible {
        background-color: file.$bg-secondary-focus--active;
      }

      &:active {
        background-color: file.$bg-secondary-click--active;
      }

      &:disabled {
        background-color: file.$bg-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: var.$breakpoint-tablet) {
    &--base {
      width: file.$width-base-tablet;
      height: file.$height-base-tablet;
    }

    &--primary {
      width: file.$width-primary-tablet;
      height: file.$height-primary-tablet;
    }

    &--secondary {
      width: file.$width-secondary-tablet;
      height: file.$height-secondary-tablet;
    }
  }

  @media (min-width: var.$breakpoint-desktop) {
    &--base {
      width: file.$width-base-desktop;
      height: file.$height-base-desktop;
    }

    &--primary {
      width: file.$width-primary-desktop;
      height: file.$height-primary-desktop;
    }

    &--secondary {
      width: file.$width-secondary-desktop;
      height: file.$height-secondary-desktop;
    }
  }
}
</style>
