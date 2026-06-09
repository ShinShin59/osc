import { cn } from "@/lib/utils";

export type CarteIdentiteRowState = "on" | "off";

type CarteIdentiteRowProps = {
  icon: string;
  value: string;
  state?: CarteIdentiteRowState;
};

export function CarteIdentiteRow({ icon, value, state = "off" }: CarteIdentiteRowProps) {
  const isOff = state === "off";

  return (
    <li className="flex items-center gap-x-1.5">
      <img
        src={icon}
        alt=""
        aria-hidden
        className={cn("size-[19px] shrink-0 object-contain", isOff && "brightness-0 opacity-30")}
      />
      <span
        className={cn(
          "text-[12px] font-bold leading-none",
          isOff ? "text-black/35" : "text-[#a8d8ea]",
        )}
      >
        {value}
      </span>
    </li>
  );
}
