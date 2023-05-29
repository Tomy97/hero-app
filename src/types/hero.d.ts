export type IData = {
  response: string
  results: IHero[]
  resultsFor: string
}

export type IHero = {
  response: string
  id: string
  name: string
  powerstats: Powerstats
  biography: Biography
  appearance: Appearance
  work: Work
  connections: Connections
  image: Image
}

export type Appearance = {
  gender: string
  race: string
  height: string[]
  weight: string[]
  eyeColor: string
  hairColor: string
}

export type Biography = {
  fullName: string
  alterEgos: string
  aliases: string[]
  placeOfBirth: string
  firstAppearance: string
  publisher: string
  alignment: string
}

export type Connections = {
  groupAffiliation: string
  relatives: string
}

export type Image = {
  url: string
}

export type Powerstats = {
  intelligence: string
  strength: string
  speed: string
  durability: string
  power: string
  combat: string
}

export type Work = {
  occupation: string
  base: string
}
