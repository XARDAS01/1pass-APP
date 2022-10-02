<template>
  <header class="header">
    <div class="header__list">
      <button class="header__list__item" type="button">
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M43.8,56.65A7.4,7.4,0,1,0,51.2,64,7.38,7.38,0,0,0,43.8,56.65Z"/><path d="M84.2,30.75a7.4,7.4,0,1,0,7.4,7.4A7.38,7.38,0,0,0,84.2,30.75Z"/><path d="M98,0H30A30,30,0,0,0,0,30V98a30,30,0,0,0,30,30H98a30,30,0,0,0,30-30V30A30,30,0,0,0,98,0Zm1.4,92H95.7a11.71,11.71,0,0,1-23,0H28.6a2.1,2.1,0,0,1,0-4.2H72.7a11.71,11.71,0,0,1,23,0h3.7a2.18,2.18,0,0,1,2.1,2.1A2.11,2.11,0,0,1,99.4,92Zm0-25.8H55.3a11.71,11.71,0,0,1-23,0H28.6A2.18,2.18,0,0,1,26.5,64,2.11,2.11,0,0,1,28.6,62h3.7a11.65,11.65,0,0,1,22.9,0H99.4a2.18,2.18,0,0,1,2.1,2.1A2.11,2.11,0,0,1,99.4,66.15Zm0-25.8H95.7a11.71,11.71,0,0,1-23,0H28.6a2.11,2.11,0,0,1-2.1-2.1A2.2,2.2,0,0,1,28.6,36H72.8a11.64,11.64,0,0,1,22.9.1h3.7a2.18,2.18,0,0,1,2.1,2.1A2.11,2.11,0,0,1,99.4,40.35Z"/><path d="M84.2,82.55A7.4,7.4,0,1,0,91.6,90,7.38,7.38,0,0,0,84.2,82.55Z"/></svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header { @apply fixed top-0 left-0 h-[4rem] w-full px-[1rem]; }

.header__list { @apply flex flex-row justify-start items-center h-full w-full }

.header__list__item {
  width: 30px;
  height: 30px;
}

.header__list__item svg {
  @apply duration-[0.3s];
  fill: #fc696a;
}

.header__list__item:hover svg {
  @apply duration-[0.3s];
  fill: rgba(252, 105, 106, 0.6);
}
</style>