<script setup>
import { computed } from 'vue';

const {variant} = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const variantsColors = computed(() => {
  return {
   primary: 'bg-green-500 hover:bg-green-400',
   danger: 'bg-red-500 hover:bg-red-400',
   warning: 'bg-yellow-500 hover:bg-yellow-400',
  }[variant]
});

</script>

<template>
  <button
    :class="['py-2 w-full  text-white rounded-lg  disabled:bg-gray-300 disabled:text-gray-600', variantsColors]">
    <slot />
  </button>
</template>
