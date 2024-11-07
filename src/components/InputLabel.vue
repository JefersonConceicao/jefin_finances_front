<script setup>
defineProps({
  value: String,
  labelFor: String
})

</script>

<template>
  <label :for="labelFor" class="text-green-800 font-medium text-sm">
    {{ value }}
  </label>
</template>
