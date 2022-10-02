<template>
  <div>
    <header>
      <button class="arw arw-left arw--dark" type="button" @click="routerBack" />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
const router = useRouter();
const routerBack = function() { router.back() };
</script>

<style scoped>
main {
  @apply w-full mt-[5rem] px-[2rem];
  height: calc(100vh - 5rem);
}

.arw {
  @apply w-[2rem] h-[2rem] mx-[1.5rem] my-[1rem];
}
</style>