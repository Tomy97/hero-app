<script setup lang="ts">
import { useHeroStore } from '@/stores/hero'

const store = useHeroStore()

const updateModelValue = async (event: any) => {
  const newValue = (event.target as HTMLInputElement).value
  if (newValue.length >= 3) {
    await store.getSuperHeroes(newValue)
  }
}
</script>
<template>
  <input class="form-control" placeholder="Buscar un heroe" @keyup="updateModelValue($event)" />
</template>
