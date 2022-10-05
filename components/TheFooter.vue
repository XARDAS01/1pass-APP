<template>
  <footer class="footer">
    <nav class="footer__list">
      <nuxt-link class="footer__list__item" to="/">
        home
      </nuxt-link>
      <nuxt-link class="footer__list__item footer__list__item--button btn-circle btn-circle--dark" to="/service/create">
        <i>+</i>
      </nuxt-link>
      <nuxt-link class="footer__list__item" to="/profile">
        profile
      </nuxt-link>
    </nav>
  </footer>
</template>

<style scoped>
.footer { 
  @apply fixed bottom-0 left-0 w-full h-[6rem] px-[2rem] mb-[1.5rem];
}

.footer__list {
  @apply 
  flex flex-row justify-evenly items-center
  w-full h-full bg-grey rounded-[1rem];
}

/* .footer__list__item { } */

.footer__list__item--button {
  @apply mt-[-4rem] text-center;;
}

@media (min-width: 425px) {
  .footer { @apply px-[4rem] mb-[3rem]; }
}
</style>