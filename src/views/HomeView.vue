<script setup lang="ts">
import FormInputSearch from '@/components/form/input/FormInputSearch.vue'
import { useHeroStore } from '@/stores/hero'

const store = useHeroStore()
</script>

<template>
  <main class="container">
    <section class="row justify-content-center mt-3">
      <div class="col-12 h3 text-center">
        Bienvenido a la seccion de los heroes
      </div>
      <div class="col-sm-10 col-md-8 col-lg-6 text-center mt-3">
        <FormInputSearch placeholder="Buscar" />
      </div>
      <div class="col-12 h6 text-center mt-3">
        En seccion de los heroes, vas a poder buscar y seleccionar a tu heroe favorito y sumarlo a
        tu equipo. El cual podras seleccionar 3 buenos y 3 malos.
      </div>
    </section>
    <section class="row">
      <div class="col-md-4 col-lg-6" v-for="hero of store.heroes">
        {{ hero.name }}
      </div>
    </section>
  </main>
</template>
