import type { ColumnDef } from "@tanstack/react-table";
import type { ProcessedPokemon } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { PokemonTypeBadge } from "./PokemonTypeBadge";

const SortableHeader = ({
  column,
  children,
}: {
  column: any;
  children: React.ReactNode;
}) => (
  <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {children}
    <ArrowUpDown className="ml-2 h-4 w-4" />
  </Button>
);

export const getColumns = (
  onSelectPokemon: (pokemon: ProcessedPokemon) => void
): ColumnDef<ProcessedPokemon>[] => [
  {
    accessorKey: "sprites.front_default",
    header: "Imagen",
    cell: ({ row }) => (
      <img
        src={row.original.sprites.front_default}
        alt={row.original.name}
        className="w-16 h-16 mx-auto"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column}>Nombre</SortableHeader>
    ),
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.original.name}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "types",
    header: ({ column }) => (
      <SortableHeader column={column}>Tipo</SortableHeader>
    ),
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 items-center">
        {row.original.types.map((type) => (
          <PokemonTypeBadge key={type} type={type} />
        ))}
      </div>
    ),
    filterFn: (row, _columnId, value) => {
      return value ? row.original.types.includes(value as string) : true;
    },
    sortingFn: (rowA, rowB) =>
      (rowA.original.types[0] || "").localeCompare(
        rowB.original.types[0] || ""
      ),
  },
  {
    accessorKey: "weight",
    header: ({ column }) => (
      <SortableHeader column={column}>Peso (kg)</SortableHeader>
    ),
    cell: ({ row }) => <div>{row.original.weight}</div>,
  },
  {
    accessorKey: "height",
    header: ({ column }) => (
      <SortableHeader column={column}>Altura (m)</SortableHeader>
    ),
    cell: ({ row }) => <div>{row.original.height}</div>,
  },
  {
    id: "stats_hp",
    accessorFn: (row) => row.stats.hp,
    header: ({ column }) => (
      <SortableHeader column={column}>Salud</SortableHeader>
    ),
  },
  {
    id: "stats_attack",
    accessorFn: (row) => row.stats.attack,
    header: ({ column }) => (
      <SortableHeader column={column}>Ataque</SortableHeader>
    ),
  },
  {
    id: "stats_defense",
    accessorFn: (row) => row.stats.defense,
    header: ({ column }) => (
      <SortableHeader column={column}>Defensa</SortableHeader>
    ),
  },
  {
    id: "stats_specialAttack",
    accessorFn: (row) => row.stats.specialAttack,
    header: ({ column }) => (
      <SortableHeader column={column}>At. Esp.</SortableHeader>
    ),
  },
  {
    id: "stats_specialDefense",
    accessorFn: (row) => row.stats.specialDefense,
    header: ({ column }) => (
      <SortableHeader column={column}>Def. Esp.</SortableHeader>
    ),
  },
  {
    id: "stats_speed",
    accessorFn: (row) => row.stats.speed,
    header: ({ column }) => (
      <SortableHeader column={column}>Velocidad</SortableHeader>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelectPokemon(row.original)}
      >
        Detalles
      </Button>
    ),
    enableHiding: false,
  },
];
