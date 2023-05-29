import type { IHero } from '@/types/hero'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IData } from '@/types/hero'
import axios from 'axios'

export const useHeroStore = defineStore('hero', () => {
  const heroes = ref<IHero[] | string>([])

  const getSuperHeroes = async (search: string) => {
    const { data } = await axios.get<IData>(
      `https://superheroapi.com/api.php/10225623741490454/search/${search}`
    )
    const { results } = data
    heroes.value = results
    if (typeof heroes.value === 'undefined') {
      heroes.value = 'No se encontraron resultados'
    }
    console.log(heroes.value)

    return heroes.value
  }
  return {
    heroes,
    getSuperHeroes
  }
})
