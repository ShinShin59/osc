import { BarChart3 } from "lucide-react";
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

export function StatsButton({ open, onOpenChange, onOpen }: OverlayControlProps) {
  return (
    <>
      <HeaderIconButton
        icon={BarChart3}
        label="Statistiques"
        onClick={onOpen}
      />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn(dialogContentClass, "pt-8")}>
          <DialogIconBadge icon={BarChart3} />
          <DialogHeader>
            <DialogTitle className="text-center text-white">
              Statistiques
            </DialogTitle>
            <DialogDescription className="text-center text-white/80">
              Contenu à venir.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
