<template>
  <div>
    <form class="content__form" @submit.prevent="submit">
        <div class="content__form__group">
          <label for="login">Login</label><br>
          <input v-model="user.login" type="login" id="login" name="login">
        </div>

        <div class="content__form__group">
          <label for="password">Passoword</label><br>
          <input v-model="user.password" type="password" id="password" name="password">
        </div>

        <button
          type="submit"
          class="content__btn btn btn-fill--light"
        >
          Login
        </button>

        <div class="content__footer">
          <p class="content__footer__text"> 
            Don't have an account yet?
          </p>
          <nuxt-link class="content__footer__link" to="/auth/registration">
            Registration
          </nuxt-link>
        </div>
      </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

useMeta({ title: 'Login page' });
definePageMeta({ layout: 'auth' });

const user = reactive({
  login: '',
  password: ''
});

const submit = () => {
  useAuthStore().login(user);
};
</script>
