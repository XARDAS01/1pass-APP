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
import { useAuthStore } from '~/store/auth'
import { useUserStore } from '~/store/user'
import { useServiceStore } from '~/store/service'

const auth = useAuthStore();
const router = useRouter();

onBeforeMount(() => { if (!auth.getToken) { router.push('/auth/login') } });

onMounted(() => {
  useUserStore().load(auth.getToken);
  useServiceStore().load(auth.getToken);
});
</script>

<style scoped>
main {
  @apply w-full mt-[5rem] px-[2rem];
  height: calc(100vh - 5rem);
}
</style>

<style>
.layout-default__header__title {
  @apply text-[5rem] text-brandColorSecond font-bold mb-[5rem] uppercase;
}
</style>