export interface PokemonListResult {
  name: string;
  url: string;
}

export interface PokemonStatDetail {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonTypeDetail {
  type: {
    name: string;
  };
}

export interface PokemonFromApi {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  stats: PokemonStatDetail[];
  types: PokemonTypeDetail[];
  base_experience: number;
}

export type ProcessedPokemon = Omit<PokemonFromApi, "stats" | "types"> & {
  weight: number;
  height: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  types: string[];
};
