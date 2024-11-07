<template>
  <div :class="`bg-white rounded-md border border-zinc-200 p-3 shadow ${$slots.title ? 'divide-y-2' : ''}`">
    <div v-if="$slots.title" class="pb-3">
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
