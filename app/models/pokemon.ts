export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  abilities: PokemonAbility[];
  images: PokemonImage;
  hp: string;
  types: string[];
  attacks: any;
  weaknesses: any;
  set: any;
  rarity: any;
  artist: any;
}

export interface PokemonAbility {
  name: string;
  text: string;
}

export interface PokemonImage {
  large: string;
  small: string;
}
