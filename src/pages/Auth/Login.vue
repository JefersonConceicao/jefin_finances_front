<script setup>
import GuestLayout from '@/pages/Layout/GuestLayout.vue';
import CardAutentication from '@/components/CardAutentication.vue'
import InputLabel from '@/components/InputLabel.vue'

</script>

<template>
  <GuestLayout>
    <CardAutentication>
      <template #title>
        <span class="font-bold text-green-800">
          Entre ou cadastre-se
        </span>
      </template>
      <div class="pt-2">
        <div>
          <InputLabel for="email" value="Informe o seu e-mail" />
          <input type="text" />
        </div>
        <div>
          <InputLabel for="senha" value="Informe sua senha" />
          <input type="text" />
        </div>
      </div>
    </CardAutentication>
  </GuestLayout>
</template>
