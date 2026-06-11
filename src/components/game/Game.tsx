import { History } from "@/components/game/History";
import { MysteryElement } from "@/components/game/mystery/MysteryElement";
import { PlayerElement } from "@/components/game/player/PlayerElement";
import { PeriodicTable } from "@/components/game/PeriodicTable";

export function Game() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <section aria-label="Element sélectionnés et élément mystère" className="">
        <div className="flex gap-2">
          <PlayerElement />
          <MysteryElement />
        </div>
        <History />
      </section>

      <PeriodicTable />
    </main>
  );
}
