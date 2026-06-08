import { CircleHelp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogIconBadge } from "./DialogIconBadge";
import { HeaderIconButton } from "./HeaderIconButton";
import { dialogContentClass, type OverlayControlProps } from "./shared";

export function HelpButton({ open, onOpenChange, onOpen }: OverlayControlProps) {
  return (
    <>
      <HeaderIconButton icon={CircleHelp} label="Aide" onClick={onOpen} />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn(dialogContentClass, "pt-8")}>
          <DialogIconBadge icon={CircleHelp} />
          <DialogHeader className="sr-only">
            <DialogTitle>Aide</DialogTitle>
            <DialogDescription>
              Règles, légendes et sources de données
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed text-white">
            <p>
              Explications sur les règles, les légendes du jeu et les sources de
              données (...)
            </p>
            <p>
              Explications sur les règles, les légendes du jeu et les sources de
              données (...) Explications sur les règles, les légendes du jeu et
              les sources de données (...)
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
