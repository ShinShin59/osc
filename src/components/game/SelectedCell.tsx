import type { CSSProperties } from "react";
import { elements } from "@/data/periodic-table";
import { useGameStore } from "@/store/game";
import { ElementCell } from "./ElementCell";

const TABLE_CELL_SIZE = 64;
const SELECTED_SIZE = 100;
const SCALE = SELECTED_SIZE / TABLE_CELL_SIZE;

export function SelectedCell() {
  const lastNumber = useGameStore((state) => state.clicks.at(-1));
  const element = lastNumber ? elements.find((el) => el.number === lastNumber) : undefined;

  return (
    <div
      className="pointer-events-none absolute top-0 left-[20%] z-10"
      style={{ width: SELECTED_SIZE, height: SELECTED_SIZE }}
      aria-label={element ? `Élément sélectionné : ${element.name}` : "Aucun élément sélectionné"}
    >
      {element ? (
        <div
          key={element.number}
          className="size-full animate-in fade-in zoom-in-95 duration-200"
        >
          <div
            className="origin-top-left"
            style={
              {
                width: TABLE_CELL_SIZE,
                height: TABLE_CELL_SIZE,
                transform: `scale(${SCALE})`,
                "--cell-size": `${TABLE_CELL_SIZE}px`,
              } as CSSProperties
            }
          >
            <ElementCell
              element={element}
              className="cursor-default hover:brightness-100"
            />
          </div>
        </div>
      ) : (
        <div className="flex size-full items-center justify-center rounded-sm border border-dashed border-white/40 text-2xl font-bold text-white/50">
          ?
        </div>
      )}
    </div>
  );
}
