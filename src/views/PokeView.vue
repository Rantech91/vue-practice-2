<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const router = useRouter();
const route = useRoute();

const { getData, data, loading, error } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const back = () => {
  router.push("/pokemons");
};
</script>

<template>
  <div class="alert alert-danger" v-if="error">{{ error }}</div>
  <p v-if="loading">Cargando Informacion</p>

  <div v-if="data">
    <img :src="data.sprites?.front_default" />
    <h1>Pokemon Name: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>Pokemon no existe</h1>

  <button @click="back" class="btn btn-outline-primary">volver</button>
</template>
