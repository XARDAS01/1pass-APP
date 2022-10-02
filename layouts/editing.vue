<template>
  <div class="layout-editing">
    <header class="layout-editing__header">
      <button class="arw arw-left arw--dark" type="button" @click="routerBack" />
    </header>

    <main class="layout-editing__main">
      <slot />
    </main>
  </div>
</template>

<script setup>
const router = useRouter();
const routerBack = function() { router.back() };
</script>

<style>
.layout-editing__header > .arw {
  @apply w-[2rem] h-[2rem] mx-[1.5rem] my-[1rem];
}
.layout-editing__header__title {
  @apply text-[5rem] text-brandColorSecond font-bold mb-[5rem] uppercase;
}

.layout-editing__main {
  @apply w-full mt-[5rem] px-[2rem];
  height: calc(100vh - 5rem);
}
</style>