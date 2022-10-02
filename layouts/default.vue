<template>
  <div>
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
</script>

<style scoped>
main {
  @apply w-full mt-[5rem] px-[2rem];
  height: calc(100vh - 5rem);
}
</style>