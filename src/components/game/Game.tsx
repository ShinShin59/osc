import { PeriodicTable } from "@/components/game/PeriodicTable";

export function Game() {
  return (
    <div className="relative min-h-screen">
      <PeriodicTable className="absolute inset-0" />
    </div>
  );
}
