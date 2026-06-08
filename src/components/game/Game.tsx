import { PeriodicTable } from "@/components/game/PeriodicTable";

export function Game() {
  return (
    <div className="relative h-full">
      <PeriodicTable className="absolute inset-0" />
    </div>
  );
}
