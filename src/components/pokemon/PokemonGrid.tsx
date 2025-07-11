import type { ProcessedPokemon } from "@/types";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: ProcessedPokemon[];
  onSelectPokemon: (pokemon: ProcessedPokemon) => void;
}

export function PokemonGrid({ pokemons, onSelectPokemon }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onSelectPokemon={onSelectPokemon}
        />
      ))}
    </div>
  );
}
