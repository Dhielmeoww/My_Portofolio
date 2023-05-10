<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="bg-slate-500 w-[600px]">
    <div class="flex flex-col w-[600px]">
      <div>
        <nav class="flex">
          <div>
            <a href="#">BTPN Syariah</a>
          </div>
          <ul class="flex">
            <li class="mx-5">
              <a href="#">Postingan</a>
            </li>
            <li>
              <a href="#">Buat Postingan</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex justify-center content-center mt-10">
        <div>
          <img
            alt="Vue logo"
            class="logo"
            src="./assets/logo.svg"
            width="125"
            height="125"
          />
        </div>
      </div>
      <div class="flex justify-center content-center mt-5">
        <HelloWorld />
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
