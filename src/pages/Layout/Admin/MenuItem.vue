<script setup>
import { RouterLink } from 'vue-router';
import { computed, defineProps } from 'vue';

const props = defineProps({
  link: String,
  active: Boolean
})

const activeClass = computed(() => (!props.active ? 'text-gray-300' : 'text-green-500'));
</script>

<template>

  <RouterLink :to="link" :class="['size-8', activeClass]">
    <slot />
  </RouterLink>
</template>
