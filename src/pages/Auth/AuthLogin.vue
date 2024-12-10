<script setup>
import { reactive } from 'vue';

import GuestLayout from '@/pages/Layout/GuestLayout.vue';
import CardAutentication from '@/components/CardAutentication.vue'
import InputLabel from '@/components/InputLabel.vue'
import TextInput from '@/components/TextInput.vue'
import ButtonAction from '@/components/ButtonAction.vue'
import api from '@/api';

import { useRouter } from 'vue-router';

const form = reactive({
  email: '',
  password: '',
  isLoading: false
});

const router = useRouter();

const handleSubmit = async () => {
  form.isLoading = true;

  const response = await api.post('/login', form);

  if (response.status == 200 && !!response.data.access_token) {
    localStorage.setItem('data_user', JSON.stringify(response.data));
    router.push('/dashboard');
  }

  form.isLoading = false;
}
</script>

<template>

  <GuestLayout>
    <CardAutentication>
      <template #title>
        <span class="font-bold text-green-800">
          Entre ou cadastre-se
        </span>
      </template>

      <form @submit.prevent="handleSubmit">
        <div class="pt-2">
          <div class="space-y-4">

            <div class="form-group">
              <InputLabel for="email" value="Informe o seu e-mail" />
              <TextInput id="email" type="email" v-model="form.email" />
            </div>

            <div class="form-group">
              <InputLabel for="senha" value="Informe sua senha" />
              <TextInput id="senha" autocomplete="false" type="password" v-model="form.password" />
            </div>

            <div class="w-full">
              <ButtonAction type="submit" :disabled="form.isLoading">
                <span class="font-bold"> Entrar </span>
              </ButtonAction>
            </div>
          </div>
        </div>
      </form>
    </CardAutentication>
  </GuestLayout>
</template>
