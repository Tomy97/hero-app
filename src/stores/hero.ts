import type { IHero } from '@/types/hero'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IData } from '@/types/hero'
import type { Heroes, Hero } from '@/types/heroMock'
import axios from 'axios'

export const useHeroStore = defineStore(
  'hero',
  () => {
    const heroesToShow = ref<IHero[]>([])
    const myHeroes = ref<IHero[]>([])
    const disabled = ref<boolean>(false)

    const getSuperHeroes = async (search: string) => {
      if (heroesToShow.value,length) {
        console.log('No tiene el dato,  te muestro los mock')
        const { data } = await axios.get<IHero>('../db/heroes-initals.json')
        console.log(data)
      } else {
        console.log('ya tiene el dato')
        const { data } = await axios.get<IData>(
          `https://superheroapi.com/api.php/10225623741490454/search/${search}`
        )
        const { results } = data
        heroesToShow.value = results
      }

      return heroesToShow.value
    }

    const getMockHeroes = async () => {
      const { data } = await axios.get<IData>('../db/heroes-initals.json')
      const { heroes } = data
    }
    const addToMyHeroes = (hero: IHero) => {
      myHeroes.value.push(hero)
    }

    const removeFromMyHeroes = (id: number) => {
      myHeroes.value = myHeroes.value.filter((hero: IHero) => +hero.id !== +id)
    }

    return {
      heroesToShow,
      getSuperHeroes,
      addToMyHeroes,
      removeFromMyHeroes,
      disabled
    }
  },
  {
    persist: true
  }
)
