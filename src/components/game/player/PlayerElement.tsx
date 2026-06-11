import { PlayerCard } from "@/components/game/player/PlayerCard";
import { PlayerCell } from "@/components/game/player/PlayerCell";

export function PlayerElement() {
  return (
    <div className="flex min-w-0 flex-1 justify-between gap-1.5">
      <PlayerCell />
      <PlayerCard />
    </div>
  );
}
