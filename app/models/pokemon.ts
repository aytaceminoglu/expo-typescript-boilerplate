export interface Pokemon {
  id: string
  name: string
  supertype: string
  hp: string
  subtypes: string[]
  abilities: {
    name: string,
    text: string,
    type: string
  }[]
  images: { small: string }
}
