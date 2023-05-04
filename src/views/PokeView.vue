<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const poke = ref({});

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
};
getData();

const back = () => {
  router.push("/pokemons");
};
</script>

<template>
  <div v-if="poke">
    <img :src="poke.sprites?.front_default" />
    <h1>Pokemon Name: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>Pokemon no existe</h1>

  <button @click="back" class="btn btn-outline-primary">volver</button>
</template>
