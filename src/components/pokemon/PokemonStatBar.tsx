import { cn } from "@/lib/utils";

const MAX_STAT_VALUE = 200;

interface PokemonStatBarProps {
  label: string;
  value: number;
}

export const PokemonStatBar = ({ label, value }: PokemonStatBarProps) => {
  const percentage = Math.min((value / MAX_STAT_VALUE) * 100, 100);

  const barColor = cn({
    "bg-red-500": value < 60,
    "bg-yellow-400": value >= 60 && value < 90,
    "bg-green-500": value >= 90 && value < 120,
    "bg-cyan-400": value >= 120,
  });

  return (
    <div className="flex items-center gap-2 mb-2 w-full">
      <span className="w-1/3 text-sm font-medium text-right">{label}</span>
      <div className="w-2/3 bg-muted rounded-full h-5 relative">
        <div
          className={cn(
            "h-5 rounded-full transition-all duration-500",
            barColor
          )}
          style={{ width: `${percentage}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white mix-blend-difference">
          {value}
        </span>
      </div>
    </div>
  );
};
