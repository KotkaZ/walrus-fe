<script setup lang="ts">
import { City } from '@/generated';

const { cityExplorerApi } = useServices();
const cities = ref<City[]>([]);
const size = ref<number>(20);
const totalPages = ref<number>(0);
const nextPage = ref<number>(0);

const currentPage = ref<number>(0);
const filterName = ref<string>('');

const sizeValues = ref<number[]>([5, 20, 50, 100]);

const queryCities = (): void => {
  cityExplorerApi
    .getCities(
      currentPage.value || undefined,
      size.value || undefined,
      filterName.value || undefined
    )
    .then((response) => {
      cities.value = response.data.cities;
      size.value = response.data.size;
      totalPages.value = response.data.totalPages;
      nextPage.value = response.data.nextPage;
    });
};

const filterByName = (): void => {
  currentPage.value = 0;
  queryCities();
};

const goToPreviousPage = (): void => {
  currentPage.value = Math.max(0, currentPage.value - 1);
  queryCities();
};

const goToNextPage = (): void => {
  currentPage.value = nextPage.value;
  queryCities();
};

const updatePageSize = (): void => {
  currentPage.value = 0;
  queryCities();
};

queryCities();
</script>

<template>
  <div>
    <div class="flex justify-content-center p-4">
      <InputText v-model="filterName" type="text" placeholder="Search" />
      <Button icon="pi pi-search" @click="filterByName" />
    </div>
    <div class="grid grid-nogutter gap-4 justify-content-center">
      <div
        v-for="city in cities"
        :key="city.id"
        class="lg:col-2 col-5 shadow-4 uppercase p-3 border-round-lg surface-100"
      >
        <EditDialog :city="city" @city-edited="queryCities" />
        <h2 class="text-center text-xl text-800">{{ city.name }}</h2>
        <img :src="city.photo" class="max-w-full border-round-lg" />
      </div>
    </div>
    <div class="flex justify-content-center p-4 align-items-center">
      <Button
        icon="pi pi-chevron-left"
        class="mr-3"
        @click="goToPreviousPage"
      />
      <span>{{ `${currentPage + 1} | ${totalPages}` }}</span>
      <Button icon="pi pi-chevron-right" class="mx-3" @click="goToNextPage" />
      <Dropdown v-model="size" :options="sizeValues" @change="updatePageSize" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
