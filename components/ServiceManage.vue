<template>
  <div class="service-manage">
    <div class="service-manage__header header">
      <h1 class="header__title layout-editing__header__title">{{ props.HTitle }}</h1>
    </div>

    <div class="service-manage__content content">
      <form class="content__form" @submit.prevent="submit">
        <div class="content__form__group">
          <label for="name">Name</label><br>
          <input v-model="service.name" type="text" id="name" name="name"><br>
        </div>

        <div class="content__form__group">
          <label for="url">Url</label><br>
          <input v-model="service.url" type="text" id="url" name="url">
        </div>

        <div class="content__form__group">
          <label for="login">email / username</label><br>
          <input v-model="service.login" type="text" id="login" name="login">
        </div>

        <div class="content__form__group">
          <label for="password">password</label><br>
          <input v-model="service.password" type="text" id="password" name="password">
        </div>

        <PasswordGenerate 
          class="content__form__generateBtn"
          @passwordGenerate="passwordGenerate"
        />
        
        <button class="content__form__submit btn btn-fill--light" type="submit">
          {{ props.FTitle }}
        </button>
      </form>
      {{ services }}
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from '~/store/service';
const props = defineProps({
  HTitle: {
    type: String,
    required: true
  },
  FTitle: {
    type: String,
    required: true
  }
});
const passwordGenerate = (password) => { service.password = password };
const service = reactive({
  name: '',
  url: '',
  login: '',
  password: ''
});
const submit = () => { if (useServiceStore().add(service)) { useRouter().push('/') } };
</script>

<style scoped>
/* .header__title { } */

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

.content__form__generateBtn {
  @apply max-w-[45%] min-w-[15rem] mb-[7rem] mt-[2rem];
  align-self: flex-end;
}

.content__form__submit {
  @apply max-w-[42rem];
}
</style>