import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
}

export function ViewToggle({ view, setView }: ViewToggleProps) {
  return (
    <div className="flex justify-center my-4 gap-2">
      <Button
        variant={view === "grid" ? "default" : "secondary"}
        onClick={() => setView("grid")}
        className="cursor-pointer"
      >
        <Grid className="h-4 w-4 mr-2" />
        Grid
      </Button>
      <Button
        variant={view === "table" ? "default" : "secondary"}
        onClick={() => setView("table")}
        className="cursor-pointer"
      >
        <List className="h-4 w-4 mr-2" />
        Table
      </Button>
    </div>
  );
}
