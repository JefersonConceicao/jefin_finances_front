<script setup>
import AdminFooter from '@/pages/Layout/Admin/AdminFooter.vue'
import { BeakerIcon } from '@heroicons/vue/24/solid'


</script>

<template>
  <div class="bg-stone-200 min-h-screen">
    <slot />

    <AdminFooter>
      <BeakerIcon class="size-10 text-green-500" />
      <BeakerIcon class="size-10 text-green-500" />
      <BeakerIcon class="size-10 text-green-500" />
      <BeakerIcon class="size-10 text-green-500" />
    </AdminFooter>
  </div>
</template>
