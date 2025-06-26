import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "./lib/api";
import type {
  PokemonFromApi,
  PokemonStatDetail,
  ProcessedPokemon,
} from "./types";
import { Skeleton } from "@/components/ui/skeleton";
import { PokemonGrid } from "@/components/pokemon/PokemonGrid";
import { PokemonModal } from "@/components/pokemon/PokemonModal";
import { ViewToggle } from "@/components/shared/ViewToggle";
import { PokemonTable } from "@/components/pokemon/PokemonTable";
import Footer from "./components/shared/Footer";

const processPokemonData = (pokemon: PokemonFromApi): ProcessedPokemon => {
  const stats = {
    hp:
      pokemon.stats.find((stat: PokemonStatDetail) => stat.stat.name === "hp")
        ?.base_stat || 0,
    attack:
      pokemon.stats.find(
        (stat: PokemonStatDetail) => stat.stat.name === "attack"
      )?.base_stat || 0,
    defense:
      pokemon.stats.find(
        (stat: PokemonStatDetail) => stat.stat.name === "defense"
      )?.base_stat || 0,
    specialAttack:
      pokemon.stats.find(
        (stat: PokemonStatDetail) => stat.stat.name === "special-attack"
      )?.base_stat || 0,
    specialDefense:
      pokemon.stats.find(
        (stat: PokemonStatDetail) => stat.stat.name === "special-defense"
      )?.base_stat || 0,
    speed:
      pokemon.stats.find(
        (stat: PokemonStatDetail) => stat.stat.name === "speed"
      )?.base_stat || 0,
  };
  return {
    ...pokemon,
    weight: pokemon.weight / 10,
    height: pokemon.height / 10,
    stats,
    types: pokemon.types.map((t: any) => t.type.name),
  };
};

function App() {
  const [pokemons, setPokemons] = useState<ProcessedPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [view, setView] = useState<"grid" | "table">("grid");
  const [selectedPokemon, setSelectedPokemon] =
    useState<ProcessedPokemon | null>(null);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const pokemonList = await getPokemonList();
        const detailPromises = pokemonList.map((p) => getPokemonDetails(p.url));
        const detailedPokemonsRaw = await Promise.all(detailPromises);
        const processedPokemons = detailedPokemonsRaw.map(processPokemonData);
        setPokemons(processedPokemons);
      } catch (err) {
        console.error("Error fetching Pokémon data:", err);
        setError("No se pudieron cargar los datos.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPokemons();
  }, []);

  const handleSelectPokemon = (pokemon: ProcessedPokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="relative flex justify-center items-center mb-8 h-16 md:h-20">
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
            <img
              src="/pokelogo.png"
              alt="Pokémon Logo"
              className="h-11 w-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Pokémon Explorer
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Versión con Vite, Tailwind y Shadcn/UI
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 p-2">
                <Skeleton className="h-32 w-32 rounded-lg" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-destructive font-bold">Error: {error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <ViewToggle view={view} setView={setView} />

            <div className="mt-8">
              {view === "grid" ? (
                <PokemonGrid
                  pokemons={pokemons}
                  onSelectPokemon={handleSelectPokemon}
                />
              ) : (
                <PokemonTable
                  data={pokemons}
                  onSelectPokemon={handleSelectPokemon}
                />
              )}
            </div>

            <PokemonModal
              pokemon={selectedPokemon}
              isOpen={!!selectedPokemon}
              onClose={handleCloseModal}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
