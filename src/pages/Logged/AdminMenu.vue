<script setup>
import AdminLayout from '@/pages/Layout/Admin/AdminLayout.vue';
import {
  ChevronRightIcon,
  CurrencyDollarIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/vue/24/solid';

const arrayMenus = [
  {
    icon: CurrencyDollarIcon,
    name: 'Despesas',
    route: '/'
  },
  {
    icon: UserIcon,
    name: 'Meu Perfil',
    route: '/perfil'
  },
  {
    icon: UsersIcon,
    name: 'Usuarios',
    route: '/'
  },
]
</script>

<template>
  <AdminLayout>
    <template #header>
      <h1> Menu </h1>
    </template>
    <div class="h-96 overflow-y-auto">

      <div v-for="menu in arrayMenus" :key="menu.name">
        <RouterLink :to="menu.route"
          class="flex py-2 border-b border-zinc-300 items-centerhover:bg-zinc-100 cursor-pointer justify-between">
          <div>
            <component :is="menu.icon" class="size-8 text-green-500 inline-block mr-2" />
            <span class="font-sans"> {{ menu.name }} </span>
          </div>
          <div>
            <ChevronRightIcon class="size-8 text-green-500 inline-block mr-2" />
          </div>
        </RouterLink>
      </div>

    </div>

  </AdminLayout>
</template>
