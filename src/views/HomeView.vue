<script setup lang="ts">
import FormInputSearch from '@/components/form/input/FormInputSearch.vue'
import { useHeroStore } from '@/stores/hero'

const store = useHeroStore()
</script>

<template>
  <main class="container">
    <section class="row justify-content-center mt-3">
      <div class="col-12 h3 text-center">Bienvenido a la seccion de los heroes</div>
      <div class="col-sm-10 col-md-8 col-lg-6 text-center mt-3">
        <FormInputSearch placeholder="Buscar" />
      </div>
      <div class="col-12 h6 text-center mt-3">
        En seccion de los heroes, vas a poder buscar y seleccionar a tu heroe favorito y sumarlo a
        tu equipo. El cual podras seleccionar 3 buenos y 3 malos.
      </div>
    </section>
    <section class="row">
      <template v-if="typeof store.heroesToShow === 'undefined'">
        <div class="col-12 h4 text-center mt-3">
          No se pudieron encontrar heroes asociados a tu busqueda
        </div>
      </template>
      <template v-else-if="!store.heroesToShow.length">
        <div class="col-12 h4 text-center mt-3">No hay heroes para mostrar</div>
      </template>
      <template v-else>
        <div class="col-md-4 col-lg-6" v-for="hero of store.heroesToShow" :key="hero.id">
          <div class="card">
            <template v-if="hero.image.url">
              <img :src="hero.image.url" class="card-img-top" :alt="hero.name" />
            </template>
            <template v-else>
              <svg
                class="card-img-top"
                width="100%"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#d1d1d1"></rect>
              </svg>
            </template>
            <div class="card-body">
              <h5 class="card-title text-center">{{ hero.name }}</h5>
              <hr />
              <div class="h5 text-start text-capitalize">biografia</div>
              <div class="row">
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> nombre real: </strong>
                    {{ hero.biography['full-name'] }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Alter ego: </strong>
                    {{ hero.biography['alter-egos'] }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Lugar de nacimiento: </strong>
                    {{ hero.biography['place-of-birth'] }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Primera aparición: </strong>
                    {{ hero.biography['first-appearance'] }}
                  </span>
                </div>
                <div class="col-12">
                  <span class="text-capitalize">
                    <strong> Condición: </strong>
                    <span
                      class="fw-bold"
                      :class="hero.biography.alignment === 'good' ? 'text-success' : 'text-danger'"
                    >
                      {{ hero.biography.alignment }}
                    </span>
                  </span>
                </div>
                <hr />
                <div class="h5 text-start text-capitalize">Stats</div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Inteligencia: </strong>
                    {{ hero.powerstats.intelligence }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Fuerza: </strong>
                    {{ hero.powerstats.strength }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Velocidad: </strong>
                    {{ hero.powerstats.speed }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Durabilidad: </strong>
                    {{ hero.powerstats.durability }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Poder: </strong>
                    {{ hero.powerstats.power }}
                  </span>
                </div>
                <div class="col-12">
                  <span>
                    <strong class="text-capitalize"> Combate: </strong>
                    {{ hero.powerstats.combat }}
                  </span>
                </div>
              </div>
              .col-12
              <button
                class="btn btn-primary"
                @click="store.addToMyHeroes(hero)"
                :disabled="store.disabled"
              >
                Agregar a mi equipo
              </button>
            </div>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<style scoped>
.card-img-top {
  max-height: 100vh;
  object-fit: cover;
}
</style>
