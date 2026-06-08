import { Legende } from "@/components/game/Legende";
import { PeriodicTable } from "@/components/game/PeriodicTable";
import { SelectedCell } from "@/components/game/SelectedCell";

export function Game() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative min-h-0 flex-1">
        <PeriodicTable className="absolute inset-0" />
        <SelectedCell />
      </div>
      <Legende />
    </div>
  );
}
