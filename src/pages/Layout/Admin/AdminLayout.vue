<script setup>
import DollarIcon from '@/components/icons/DollarIcon.vue';
import AdminFooter from '@/pages/Layout/Admin/AdminFooter.vue'
import MenuItem from '@/pages/Layout/Admin/MenuItem.vue'
import { HomeIcon, ListBulletIcon, CogIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="bg-zinc-200 min-h-screen py-5">
    <div class="flex justify-center">
      <div>
        <DollarIcon width="50" height="50" class="text-green-500 p-0 rounded-full mx-auto" />
        <span class="font-bold text-2xl text-green-500"> Jefin Finances </span>
      </div>
    </div>

    <div class="bg-white max-w-2xl mx-3 md:mx-auto  rounded-t-md shadow mt-6 p-3 border border-zinc-500">
      <div class="space-y-3 divide-y">
        <header class="font-bold text-lg">
          <slot name="header" />
        </header>

        <main>
          <slot />
        </main>
      </div>

    </div>


    <AdminFooter>
      <MenuItem link="/menu" :active="route.path === '/menu'">
        <ListBulletIcon />
      </MenuItem>

      <MenuItem link="/dashboard" :active="route.path === '/dashboard'">
        <HomeIcon />
      </MenuItem>

      <MenuItem link="/settings" :active="route.path === '/settings'">
        <CogIcon />
      </MenuItem>

    </AdminFooter>
  </div>
</template>
