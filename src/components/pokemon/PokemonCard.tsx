import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProcessedPokemon } from "@/types";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PokemonCardProps {
  pokemon: ProcessedPokemon;
  onSelectPokemon: (pokemon: ProcessedPokemon) => void;
}

export function PokemonCard({ pokemon, onSelectPokemon }: PokemonCardProps) {
  return (
    <Card
      className="flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelectPokemon(pokemon)}
    >
      <div>
        <CardContent className="px-4 relative flex flex-col items-center justify-center">
          <Badge variant="secondary" className="absolute top-1 right-2 z-10">
            #{String(pokemon.id).padStart(3, "0")}
          </Badge>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
          />
          <p className="font-semibold capitalize text-center mt-2">
            {pokemon.name}
          </p>
        </CardContent>
      </div>
      <CardFooter className="px-2 mt-[-1rem] bg-muted/50 border-t">
        {/* El botón ya no necesita su propio onClick, ya que la tarjeta lo maneja */}
        <Button variant="ghost" className="w-full pointer-events-none">
          <Eye className="h-4 w-4 mr-2" />
          Ver Detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
