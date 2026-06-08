import type { LucideIcon } from "lucide-react";

type DialogIconBadgeProps = {
  icon: LucideIcon;
};

export function DialogIconBadge({ icon: Icon }: DialogIconBadgeProps) {
  return (
    <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center justify-center border border-white/80 bg-[#2d3e47] px-2.5 py-1.5">
      <Icon className="size-4 text-white" />
    </div>
  );
}
