<script setup>
  import DollarIcon from '@/components/icons/DollarIcon.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-stone-200 flex flex-col gap-3 items-center justify-center antialiased">
    <div class="text-center">
      <DollarIcon width="150" height="150" class="text-green-500 p-0 rounded-full" />
      <h2 class="font-bold text-2xl text-green-500"> Jefin Finances </h2>
    </div>
    <div class="w-card-auth lg:w-1/2 lg:mx-0 xl:w-1/3 xl:mx-0">
      <slot />
    </div>
  </div>
</template>
