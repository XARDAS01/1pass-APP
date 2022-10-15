<template>
  <div>
    <TheHeader />

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

const auth = useAuthStore();

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) { auth.userTokenUpdate(token); };
});

watch(() => auth.getStatus, () => {
  if (auth.getStatus === 'Token update') { 
    localStorage.setItem("token", auth.getToken);
    useRouter().push('/');
  }
});
</script>

<style scoped>
  main {
    @apply w-full mt-[5rem] px-[2rem];
    height: calc(100vh - 5rem);
  }
</style>

<style>
  .content__form {
    @apply flex flex-col items-center;
  }

  .content__form__group {
    @apply w-full py-[1rem];
  }

  .content__form__group label {
    @apply text-[1.2rem] font-bold uppercase;
  }

  .content__form__group input {
    @apply w-full h-[4rem] border rounded-[0.5rem] px-[1rem];
  }
</style>