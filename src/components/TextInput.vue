<script setup>
  defineProps({
    modelValue:String
  })

</script>

<template>

<input
    class="w-full px-2 py-1 border border-gray-400 rounded-lg outline-none focus:border focus:border-green-500"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
 />
</template>

