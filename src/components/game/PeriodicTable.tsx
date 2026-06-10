import type { CSSProperties } from "react";
import { elements } from "@/data/elements";
import { canCommit, resolveDisplayNumber } from "@/lib/rules";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game";
import { TABLE_CELL_MAX_SIZE } from "./const";
import { ElementCell } from "./ElementCell";

type PeriodicTableProps = {
  className?: string;
};

export function PeriodicTable({ className }: PeriodicTableProps) {
  const hoveredNumber = useGameStore((state) => state.hoveredNumber);
  const committedNumber = useGameStore((state) => state.committedNumber);
  const roundStatus = useGameStore((state) => state.roundStatus);
  const setHoveredNumber = useGameStore((state) => state.setHoveredNumber);
  const commitSelection = useGameStore((state) => state.commitSelection);

  const highlightedNumber = resolveDisplayNumber({ hoveredNumber, committedNumber });

  return (
    <div className={cn("@container min-h-0 overflow-auto px-2 py-2", className)}>
      <div
        className="mx-auto grid w-full gap-px"
        onMouseLeave={() => setHoveredNumber(null)}
        style={
          {
            "--table-cell-max": `${TABLE_CELL_MAX_SIZE}px`,
            "--cell-size": "min(var(--table-cell-max), calc((100cqw - 17px) / 18))",
            gridTemplateColumns: "repeat(18, var(--cell-size))",
            gridTemplateRows:
              "repeat(7, var(--cell-size)) calc(var(--cell-size) * 0.06) repeat(2, var(--cell-size))",
          } as CSSProperties
        }
      >
        {elements.map((el) => (
          <div key={el.number} style={{ gridColumn: el.xpos, gridRow: el.ypos }}>
            <ElementCell
              element={el}
              selected={el.number === highlightedNumber}
              onMouseEnter={() => setHoveredNumber(el.number)}
              onClick={() => {
                if (canCommit(roundStatus)) {
                  commitSelection(el.number);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
