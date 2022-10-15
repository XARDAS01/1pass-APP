<template>
  <div class="services">
    <div 
      class="services__list list"
      v-for="card of serviceList.get"
      :key="card.id"
    >
    <ServicesListCard 
      class="list__item"
      :name="card.name"
      :icon="card.icon"
      :password="card.password"
    />
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from '~/store/service'
const serviceList = useServiceStore();
</script>

<style scoped>
.services {
  @apply h-full max-h-[68vh] pb-[15vh] overflow-y-auto;
} 

/* .services__list { }  */

/* .list { }  */
.list__item {
  @apply mb-[1.5rem];
}
</style>
