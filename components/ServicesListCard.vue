<template>
  <div class="card">
    <div class="card__list list">
      <img class="list__item list__icon" src="https://picsum.photos/200/300" @click="redirect" />

      <div class="list__item list__name" @click="redirect">
        {{ name }}
      </div>

      <div class="list__item list__copy" @click="copy">
        <!-- {{ password }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: false,
	},
  password: {
    type: String,
    required: true
  }
});

const router = useRouter();
const redirect = function() { router.push('/service/' + props.name) };

const copy = function() {
  alert('copy');
};
</script>

<style scoped>
/* .card { } */

.card__list {
  @apply w-full h-[6rem] border-[0.2rem] border-grey rounded-[0.5rem] px-[1rem] cursor-pointer;
}

.list {
  @apply flex flex-row justify-between items-center w-full;
}

.list__item {
  @apply flex justify-center items-center;
}

.list__icon {
  @apply w-[4rem] h-[4rem] rounded-[0.5rem] bg-[#5c6078];
}

.list__name {
  @apply w-[15rem] justify-start text-[2.2rem];
  width: calc(100% - 4rem - 4rem - 2rem);
}

.list__copy {
  @apply w-[4rem] h-[4rem] rounded-[0.5rem] bg-grey;
}
</style>
