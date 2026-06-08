import { cn } from "@/lib/utils";
import type { Element, ElementCategory } from "@/types/element";

type CategoryStyle = {
  backgroundColor: string;
  text: "light" | "dark";
};

const CATEGORY_COLORS: Record<ElementCategory, CategoryStyle> = {
  "Alkali metal": { backgroundColor: "#e74c3c", text: "light" },
  "Alkaline earth metal": { backgroundColor: "#f39c12", text: "dark" },
  "Transition metal": { backgroundColor: "#f1c40f", text: "dark" },
  "Post-transition metal": { backgroundColor: "#2ecc71", text: "dark" },
  Metalloid: { backgroundColor: "#1abc9c", text: "dark" },
  Nonmetal: { backgroundColor: "#3498db", text: "light" },
  Halogen: { backgroundColor: "#ecf0f1", text: "dark" },
  "Noble gas": { backgroundColor: "#d35400", text: "light" },
  Lanthanide: { backgroundColor: "#e84393", text: "light" },
  Actinide: { backgroundColor: "#9b59b6", text: "light" },
};

type ElementCellProps = {
  element: Element;
  className?: string;
};

function formatAtomicMass(mass: number): string {
  return mass.toFixed(2);
}

export function ElementCell({ element, className }: ElementCellProps) {
  const { backgroundColor, text } = CATEGORY_COLORS[element.groupBlock];
  const isLightText = text === "light";

  return (
    <div
      className={cn(
        "flex aspect-square w-32 flex-col rounded-sm border border-black/20 p-1.5",
        isLightText ? "text-white" : "text-gray-900",
        className,
      )}
      style={{ backgroundColor }}
    >
      <div className="flex items-start justify-between text-[10px] leading-none">
        <span>{element.atomicNumber}</span>
        <span>{formatAtomicMass(element.atomicMass)}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <span className="text-3xl font-bold leading-none">{element.symbol}</span>
      </div>

      <div className="flex flex-col items-center gap-0.5 text-center leading-tight">
        <span className="truncate text-[10px] font-medium">{element.name}</span>
        <span
          className={cn(
            "truncate text-[8px]",
            isLightText ? "text-white/70" : "text-gray-900/60",
          )}
        >
          {element.groupBlock}
        </span>
      </div>
    </div>
  );
}
