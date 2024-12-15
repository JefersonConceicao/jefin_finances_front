<script setup>
import { formataNumerosEmReal } from '@/utils';
import AdminLayout from '@/pages/Layout/Admin/AdminLayout.vue'
import { onMounted, reactive, ref } from 'vue';
import api from '@/api';
import SpinnerLoading from '@/components/SpinnerLoading.vue';

const dataUser = ref(JSON.parse(localStorage.getItem(`data_user`)));
const loading = ref(true);

const dataDespesas = reactive({
  despesas: []
});

const getDadosDespesas = async () => {
  try {
    const { data } = await api.get(`/dashboard`, {
      params: {
        user_id: dataUser.value.user.id
      }
    })

    dataDespesas.despesas = data;
    loading.value = false;
  } catch (err) {
    loading.value = false;
    alert(err);
  }
}

onMounted(getDadosDespesas)
</script>

<template>

  <AdminLayout>
    <template #header>
      <h1>Olá, {{ dataUser.user.name }}</h1>
    </template>
    <div>
      <div v-if="loading" class="flex justify-center items- p-3">
        <SpinnerLoading size="100px" color="#22c55e" />
      </div>

      <div v-if="!!dataDespesas.despesas.dados && dataDespesas.despesas.dados.length > 0">
        <div class="space-y-3 w-full">
          <div class="mt-3">
            <span class="font-light text-green-600"> Segue as despesas dos ultimo {{
              dataDespesas.despesas.quantidade_meses
              }} meses. </span>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Ano
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Mes
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    Total Despesas
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="despesa in dataDespesas.despesas.dados"
                  class="bg-white border-b border-zinc-500 dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ despesa.ano }}
                  </td>
                  <td class="px-6 py-4">
                    {{ despesa.mes }}
                  </td>
                  <td class="px-6 py-4 text-right" width="50%">
                    <span class="text-green-500 font-semibold">
                      {{ formataNumerosEmReal(despesa.total_despesas) }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> TOTAL
                  </td>
                  <td class="px-6 py-4 text-right" width="50%">
                    <span class="text-green-500 font-semibold">
                      {{ formataNumerosEmReal(dataDespesas.despesas.total) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
