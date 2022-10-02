<template>
  <div class="page">
    <div class="page__list list">
      <section class="list__item list__stats">
        <div class="list__stats__item">
          <span class="list__stats__item__title">
            {{ serviceList.getLength }}
          </span>
          <p class="list__stats__item__desc">
            passwords stored
          </p>
        </div>
      </section>

      <section class="list__item list__search">
        <input 
          class="list__search__input" 
          type="text"
          placeholder="Search Service"
        >
      </section>

      <ServicesList 
        class="list__item list__s" 
      />
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from '~/store/service'

useMeta({ title: 'Home page' });
definePageMeta({ layout: "default" });

const serviceList = useServiceStore();
</script>

<style scoped>
/* .page { } */

/* .page__list { } */

/* .list { } */

.list__item {
  @apply mb-[2rem];  
}

.list__stats {
  @apply flex flex-row justify-center w-full h-[15rem];
}

.list__stats__item {
  @apply
  flex flex-col items-start px-[3rem]
  w-full h-full rounded-[1rem] bg-grey;
}

.list__stats__item__title {
  @apply text-[10rem] leading-[11rem] text-brandColorMain font-bold uppercase;
}

.list__stats__item__desc {
  @apply text-[1.6rem] text-brandColorSecond;
}

.list__search {
  @apply w-full h-[4rem];
}

.list__search__input {
  @apply w-full h-full border-[0.2rem] border-brandColorSecond rounded-[0.5rem] bg-white px-[2rem];
}

.list__search__input:focus {
  @apply border-[0.2rem] border-brandColorMain;
}
</style>
