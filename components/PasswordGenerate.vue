<template>
  <button
    class="btn btn-outline--light"
    type="button"
    @click="passwordGenerate"
  >
    Generate new
  </button>
</template>

<script setup>
const emit = defineEmits([ 'passwordGenerate' ]);

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialSign = "!@#$*?";
const passwordLength = 26;

const passwordGenerate = () => {
  var passwordSignArray = (alphabet + alphabet.toUpperCase() + numbers + specialSign).split("");
  var passwordResult = '';

  for (var i = 0; i < passwordLength; i++) { passwordResult += passwordSignArray[Math.floor(Math.random() * passwordSignArray.length)] };
  emit('passwordGenerate', passwordResult);
};
</script>