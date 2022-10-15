<template>
  <div>
    <form class="content__form" @submit.prevent="submit">
        <div class="content__form__group">
          <label for="name">Name</label><br>
          <input v-model="user.firstName" type="text" id="name" name="name"><br>
        </div>

        <div class="content__form__group">
          <label for="surname">Surname</label><br>
          <input v-model="user.lastName" type="text" id="surname" name="surname">
        </div>

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
          class="btn btn-fill--light"
        >
          registration
        </button>
      </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

useMeta({ title: 'Registration page' });
definePageMeta({ layout: "auth" });

const user = reactive({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  login: '',
  password: ''
});

const submit = () => {
  useAuthStore().registration(user);
};
</script>