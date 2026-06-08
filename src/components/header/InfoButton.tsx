import { Info } from "lucide-react";
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

function InfoRow({
  label,
  value,
  labelClassName,
}: {
  label: string;
  value?: string;
  labelClassName: string;
}) {
  return (
    <p className="text-sm leading-relaxed">
      <span className={cn("font-medium uppercase", labelClassName)}>
        {label}
      </span>
      {value ? (
        <>
          {" "}
          <span className="text-white">{value}</span>
        </>
      ) : null}
    </p>
  );
}

export function InfoButton({ open, onOpenChange, onOpen }: OverlayControlProps) {
  return (
    <>
      <HeaderIconButton
        icon={Info}
        label="Informations"
        onClick={onOpen}
      />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn(dialogContentClass, "pt-8")}>
          <DialogIconBadge icon={Info} />
          <DialogHeader className="sr-only">
            <DialogTitle>Informations</DialogTitle>
            <DialogDescription>Crédits et mentions légales</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <p className="text-center text-sm font-medium text-white">
              VERSION 1.12
            </p>
            <InfoRow
              label="CONCEPTION"
              value="Robin Isnard"
              labelClassName="text-orange-400"
            />
            <InfoRow
              label="GRAPHISME"
              value="Amaël Isnard"
              labelClassName="text-amber-400"
            />
            <InfoRow
              label="REALISATION"
              value="Shin Shin"
              labelClassName="text-yellow-300"
            />
            <InfoRow
              label="CONTACT"
              value="contact@elementaire.fr"
              labelClassName="text-emerald-300"
            />
            <InfoRow
              label="SUPPORT"
              value="lien vers canal Discord, formulaire HTML, dépôt source, etc.)"
              labelClassName="text-sky-300"
            />
            <div className="space-y-1">
              <InfoRow
                label="MENTIONS LEGALES"
                labelClassName="text-pink-400"
              />
              <p className="pl-4 text-sm text-white">Licenses</p>
              <p className="pl-4 text-sm text-white">Cookies</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
