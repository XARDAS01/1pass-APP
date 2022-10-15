<template>
  <div v-if="service" class="service">
    <div class="service__header header">
      <h1 class="header__title layout-editing__header__title">{{ service.name }}</h1>
    </div>

    <div class="service__main main">
      <div class="main__list">
        <div class="main__list__item">
          date
        </div>
        <div class="main__list__item">
          {{ service.url }}
        </div>
        <div class="main__list__item">
          {{ service.email }}
        </div>
        <button class="main__list__item" type="button">
          {{ service.password }}
        </button>
      </div>
    </div>

    <div class="service__footer footer">
      <div class="footer__list">
        <button class="footer__list__item btn btn-outline--light" type="button" @click="serviceDelete">Delete</button>
        <button class="footer__list__item btn btn-fill--light" type="button" @click="">Update</button>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="service__header header">
      <h1 class="header__title layout-editing__header__title">Service not found</h1>
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from '~/store/service';
import { useAuthStore } from '~/store/auth';

useMeta({ title: 'Saved Service' });
definePageMeta({ layout: "editing" });

const route = useRoute();
const service = useServiceStore().getServiceByName(useRoute().params.service);

const serviceDelete = () => { useServiceStore().delete(service, useAuthStore().getToken) };
</script>

<style scoped>
.footer__list {
  @apply flex flex-row justify-center flex-nowrap;
}

.footer__list__item:nth-child(1) {
  @apply mr-[1rem];
}

.footer__list__item:nth-child(2) {
  @apply ml-[1rem];
}
</style>
