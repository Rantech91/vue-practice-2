<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        PokeAPI
      </router-link>
      <div>
        <RouterLink class="btn btn-outline-primary mr-2" to="/"
          >Home</RouterLink
        >
        <RouterLink class="btn btn-outline-primary" to="/pokemons"
          >Pokemons</RouterLink
        >
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>
