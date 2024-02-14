<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const pubicData = ref([]);
const privateData = ref([]);

console.log('e');
// to connect the public channel
window.Echo.channel('public')
  .subscribed(() => console.log('public connected...'))
  .listen('PublicHello', (e) => {
    console.log('go public');

    pubicData.value.push(e.message);

    console.log(pubicData.value);
  })

// to connect the privatechannel
window.Echo.private('private.1')
  .subscribed(() => console.log('private connected...'))
  .listen('PrivateHello', (e) => {
    console.log('go private');

    privateData.value.push(e.name);

    console.log(privateData.value);
  })
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div v-i="pubicData.length > 0" v-for="(publics, index) in pubicData" :key="index">
      {{ publics }}
    </div>
    <div v-i="privateData.length > 0" v-for="(privates, index) in privateData" :key="index">
      {{ privates }}
    </div>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
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
