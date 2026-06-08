export type OverlayId = "stats" | "help" | "info" | "settings";

export type OverlayControlProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpen: () => void;
};

export const dialogContentClass =
  "border border-white/80 bg-[#2d3e47]/95 text-white ring-0 sm:max-w-md [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:hover:bg-white/10";

export const iconButtonClass =
  "text-white/90 hover:bg-white/10 hover:text-white dark:hover:bg-white/10";
