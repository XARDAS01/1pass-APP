<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

const auth = useAuthStore();

watch(() => auth.getStatus, () => { if (auth.getStatus === 'Token Update') { localStorage.setItem("token", auth.getToken); } });

onBeforeMount(() => { auth.userTokenUpdate(localStorage.getItem("token")); });
</script>