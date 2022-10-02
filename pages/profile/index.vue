<template>
  <div class="profile">
    <div class="profile__header header">
      <h1 class="header__title layout-editing__header__title">Profile</h1>
    </div>

    <div class="profile__main main">
      <div class="main__list">
        <img 
          class="main__list__item main__list__img"
          src="https://picsum.photos/200/300"
          width="50" 
          height="50"
        />
        <h5
          class="main__list__item main__list__name"
        >
          {{ user.getFullName }}
        </h5>
        <span
          class="main__list__item main__list__email"
        >
          {{ user.get.email }}
        </span>
      </div>
    </div>

    <div class="profile__footer footer">
      <div class="footer__list">
        <nuxt-link class="footer__list__item" to="/">Update profile</nuxt-link>
        <nuxt-link class="footer__list__item" to="/">Change Master Password</nuxt-link>
      </div>

      <button 
        class="footer__button"
        type="button"
        @click=""
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/service';

useMeta({ title: 'Profile' });
definePageMeta({ layout: "default" });

const user = useUserStore();
</script>

<style scoped>
/* .main { } */

.main__list {
  @apply flex flex-col items-center justify-center w-full;
}

/* .list__item { } */

.main__list__img {
  @apply w-[15rem] h-[15rem] border-[0.5rem] border-brandColorMain;
}

.main__list__name {
  @apply text-[1.8rem] mt-[1rem] font-bold uppercase;
}

.main__list__email {
  @apply text-[1.4rem] text-brandColorSecond;
}

/* .footer { } */

.footer__list {
  @apply flex flex-col items-start justify-center py-[4rem] w-full;
}

.footer__list__item {
  @apply text-brandColorSecond;
}

.footer__button {
  @apply text-brandColorSecond;
}
</style>