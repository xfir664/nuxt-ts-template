<script setup lang="ts">
import type { CSSProperties } from "vue";

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  variant?: "base" | "primary" | "secondary";
  isActive?: boolean;
  className?: string;
  styles?: CSSProperties;
  type?: "text" | "password" | "email" | "number" | "tel";
}>();

const inputValue = ref(props.modelValue);

const classes = computed(() => {
  return [
    "my-input",
    props.className && props.className,
    props.variant && `my-input--${props.variant}`,
    props.isActive && `active`,
  ]
    .filter(Boolean)
    .join(" ");
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (e: Event) => {
  inputValue.value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", inputValue.value);
};
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="classes"
    :style="styles"
    :required="required"
    :value="inputValue"
    @input="handleInput"
  />
</template>

<style scoped lang="scss">
@use "./input.var.scss" as input;

.my-input {
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &--base {
    background-color: input.$bg-base;
    color: input.$col-base;
    font-size: input.$size-base-mob;
    line-height: input.$height-base-mob;

    &:hover {
      background-color: input.$bg-base-hover;
      color: input.$col-base-hover;
    }

    &:focus-visible {
      background-color: input.$bg-base-focus;
      color: input.$col-base-focus;
    }

    &:active {
      background-color: input.$bg-base-click;
      color: input.$col-base-click;
    }

    &:disabled {
      background-color: input.$bg-base-disabled;
      color: input.$col-base-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: input.$bg-base--active;
      color: input.$col-base--active;

      &:hover {
        background-color: input.$bg-base-hover--active;
        color: input.$col-base-hover--active;
      }

      &:focus-visible {
        background-color: input.$bg-base-focus--active;
        color: input.$col-base-focus--active;
      }

      &:active {
        background-color: input.$bg-base-click--active;
        color: input.$col-base-click--active;
      }

      &:disabled {
        background-color: input.$bg-base-disabled--active;
        color: input.$col-base-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--primary {
    background-color: input.$bg-primary;
    color: input.$col-primary;
    font-size: input.$size-primary-mob;
    line-height: input.$height-primary-mob;

    &:hover {
      background-color: input.$bg-primary-hover;
      color: input.$col-primary-hover;
    }

    &:focus-visible {
      background-color: input.$bg-primary-focus;
      color: input.$col-primary-focus;
    }

    &:active {
      background-color: input.$bg-primary-click;
      color: input.$col-primary-click;
    }

    &:disabled {
      background-color: input.$bg-primary-disabled;
      color: input.$col-primary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: input.$bg-primary--active;
      color: input.$col-primary--active;

      &:hover {
        background-color: input.$bg-primary-hover--active;
        color: input.$col-primary-hover--active;
      }

      &:focus-visible {
        background-color: input.$bg-primary-focus--active;
        color: input.$col-primary-focus--active;
      }

      &:active {
        background-color: input.$bg-primary-click--active;
        color: input.$col-primary-click--active;
      }

      &:disabled {
        background-color: input.$bg-primary-disabled--active;
        color: input.$col-primary-disabled--active;
        cursor: not-allowed;
      }
    }
  }

  &--secondary {
    background-color: input.$bg-secondary;
    color: input.$col-secondary;
    font-size: input.$size-secondary-mob;
    line-height: input.$height-secondary-mob;

    &:hover {
      background-color: input.$bg-secondary-hover;
      color: input.$col-secondary-hover;
    }

    &:focus-visible {
      background-color: input.$bg-secondary-focus;
      color: input.$col-secondary-focus;
    }

    &:active {
      background-color: input.$bg-secondary-click;
      color: input.$col-secondary-click;
    }

    &:disabled {
      background-color: input.$bg-secondary-disabled;
      color: input.$col-secondary-disabled;
      cursor: not-allowed;
    }

    &.active {
      background-color: input.$bg-secondary--active;
      color: input.$col-secondary--active;

      &:hover {
        background-color: input.$bg-secondary-hover--active;
        color: input.$col-secondary-hover--active;
      }

      &:focus-visible {
        background-color: input.$bg-secondary-focus--active;
        color: input.$col-secondary-focus--active;
      }

      &:active {
        background-color: input.$bg-secondary-click--active;
        color: input.$col-secondary-click--active;
      }

      &:disabled {
        background-color: input.$bg-secondary-disabled--active;
        color: input.$col-secondary-disabled--active;
        cursor: not-allowed;
      }
    }
  }
}
</style>
