export interface Pokemon {
  id: string
  name: string
  supertype: string
  abilities: { name: string }[]
  images: { small: string }
}
