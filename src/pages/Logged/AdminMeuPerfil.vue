<script setup>

import api from '@/api';
import InputLabel from '@/components/InputLabel.vue';
import SpinnerLoading from '@/components/SpinnerLoading.vue';
import { onMounted, reactive, ref, watchEffect } from 'vue';
import AdminLayout from '../Layout/Admin/AdminLayout.vue';
import TextInput from '@/components/TextInput.vue';
import ButtonAction from '@/components/ButtonAction.vue';
import { converteDataAmericanaParaBrasileira } from '@/utils';


const loading = ref(true);
const loadingSubmitUpdateProfile = ref(false);

const dataProfile = reactive({
  dados: {}
});

const form = reactive({
  name: '',
  last_name: '',
  email: ''
})

watchEffect(() => {
  {{console.log(form)}}
  Object.assign(form, dataProfile.dados)
})

const getDataProfile = async () => {
  try {
    const { data } = await api.get('/user/profile');

    dataProfile.dados = data;
    loading.value = false;

  } catch (err) {
    loading.value = false;
    alert(err)
  }
}

const submitUpdateProfile = async formData => {
  try {
    const { data } = await api.post('/user/updateProfile', formData);
    if(data.error){
      throw 'Error';
    }

    alert('Perfil atualizado');
    loadingSubmitUpdateProfile.value = false;

  } catch (err) {
    loadingSubmitUpdateProfile.value = false;
    alert(err)
  }
}

const handleSubmit = () => {
  loadingSubmitUpdateProfile.value = true;
  submitUpdateProfile(form);
}

onMounted(getDataProfile)
</script>

<template>

  <AdminLayout>
    <template #header>
      <h1> Meu Perfil </h1>
    </template>

    <div v-if="loading" class="flex justify-center items- p-3">
      <SpinnerLoading size="100px" color="#22c55e" />
    </div>
    <div v-if="!!dataProfile.dados && Object.keys(dataProfile.dados).length > 0">
      <form @submit.prevent="handleSubmit">
        <div class="space-y-3">
          <div class="grid md:grid-cols-2 gap-2 mt-2">
            <div>
              <InputLabel value="Nome" for="Nome" />
              <TextInput name="nome" id="nome" v-model="form.name" />
            </div>
            <div>
              <InputLabel value="Sobrenome" for="last_name" />
              <TextInput name="nome" id="last_name" v-model="form.last_name" />
            </div>
          </div>
          <div class="grid gap-2 mt-2">
            <div>
              <InputLabel value="E-mail" for="email" />
              <TextInput name="nome" id="email" type="email" v-model="form.email" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div>
              <InputLabel value="Ultimo Login" />
              <h4> {{ converteDataAmericanaParaBrasileira(dataProfile.dados.last_login) }}</h4>
            </div>
          </div>
          <div class="grid gap-2 mt-2">
            <div>
              <ButtonAction type="submit">
                Salvar
              </ButtonAction>
            </div>
          </div>
        </div>
      </form>
    </div>
  </AdminLayout>
</template>
