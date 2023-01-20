<script setup lang="ts">
import { City } from '@/generated';
const { cityExplorerApi } = useServices();

interface EditDialogProps {
  city: City;
}

const op = ref();
const toggle = (event: MouseEvent) => {
  op.value.toggle(event);
};

const props = defineProps<EditDialogProps>();
const emit = defineEmits(['cityEdited']);

const editedCity = ref<City>(props.city);

const updateCity = (): void => {
  cityExplorerApi.editCity(props.city.id || 0, editedCity.value).then(() => {
    emit('cityEdited');
    op.value.toggle();
  });
};
</script>

<template>
  <div>
    <div class="flex justify-content-end">
      <Button
        type="button"
        class=""
        icon="pi pi-file-edit"
        icon-pos="right"
        @click="toggle"
      />
    </div>

    <OverlayPanel ref="op">
      <span class="p-float-label mt-5">
        <InputText id="name" v-model="editedCity.name" type="text" />
        <label for="name">City name</label>
      </span>

      <span class="p-float-label mt-5">
        <InputText id="photo" v-model="editedCity.photo" type="text" />
        <label for="photo">City photo URL</label>
      </span>

      <div class="flex justify-content-end">
        <Button
          type="button"
          class="mt-5"
          label="Confirm"
          icon="pi pi-check"
          icon-pos="right"
          @click="updateCity"
        />
      </div>
    </OverlayPanel>
  </div>
</template>
