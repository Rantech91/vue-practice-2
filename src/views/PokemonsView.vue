<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, getData, loading, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando Informacion</p>
  <div class="alert alert-danger" v-if="error">{{ error }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li class="list-group-item" v-for="poke in data.results">
        <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
      </li>
    </ul>
    <button
      class="btn btn-warning me-2"
      :disabled="!data.previous"
      @click="getData(data.previous)"
    >
      Previous
    </button>
    <button
      class="btn btn-primary"
      :disabled="!data.next"
      @click="getData(data.next)"
    >
      Next
    </button>
  </div>
</template>
