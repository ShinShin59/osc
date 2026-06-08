import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { iconButtonClass, type OverlayControlProps } from "./shared";

export function SettingsButton({ open, onOpenChange, onOpen }: OverlayControlProps) {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) onOpen();
    onOpenChange(nextOpen);
  };

  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <Tooltip>
        <TooltipTrigger
          render={
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className={iconButtonClass}
                  aria-label="Réglages"
                />
              }
            />
          }
        >
          <Settings />
        </TooltipTrigger>
        <TooltipContent>Réglages</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end" className="w-auto min-w-0">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(value) => setLanguage(value as "fr" | "en")}
        >
          <DropdownMenuRadioItem value="fr" aria-label="Français" className="pr-6">
            FR
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" aria-label="English" className="pr-6">
            EN
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuItem
          className="justify-start px-1.5"
          aria-label={soundEnabled ? "Son activé" : "Son désactivé"}
          onClick={() => setSoundEnabled((enabled) => !enabled)}
        >
          {soundEnabled ? "🔊" : "🔇"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
