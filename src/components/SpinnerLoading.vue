<script setup>
import { ClipLoader } from 'vue3-spinner';
defineProps({
  size:String,
  color: String
})

</script>

<template>
     <ClipLoader
      :loading="true"
      :size="size"
      :color="color"
      />
</template>
