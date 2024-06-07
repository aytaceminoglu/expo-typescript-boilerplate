export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  abilities: PokemonDetail[];
  images: PokemonImage;
  hp: string;
  types: string[];
  attacks: PokemonDetail[];
  weaknesses: PokemonDetail[];
  set: any;
  rarity: any;
  artist: any;
}

export interface PokemonDetail {
  name: string;
  text: string;
}

export interface PokemonImage {
  large: string;
  small: string;
}
