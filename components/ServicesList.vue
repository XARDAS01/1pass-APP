<template>
  <div class="services">
    <div 
      class="services__list list"
      v-for="card of servicesCard"
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
const servicesCard = ref([
  { id: 1, name: 'facebook', icon: 'url', password: 'pass' },
  { id: 2, name: 'twitter', icon: 'url', password: 'pass' }
]);
</script>

<style scoped>
/* .services { }  */

/* .services__list { }  */

/* .list { }  */
.list__item {
  @apply mb-[1.5rem];
}
</style>
