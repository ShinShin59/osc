import { useState } from "react";
import { HelpButton } from "@/components/header/HelpButton";
import { InfoButton } from "@/components/header/InfoButton";
import { SettingsButton } from "@/components/header/SettingsButton";
import { StatsButton } from "@/components/header/StatsButton";
import type { OverlayId } from "@/components/header/shared";

export function Header() {
  const [activeOverlay, setActiveOverlay] = useState<OverlayId | null>(null);

  const openOverlay = (overlay: OverlayId) => {
    setActiveOverlay(overlay);
  };

  const handleOverlayOpenChange = (overlay: OverlayId, open: boolean) => {
    if (open) {
      setActiveOverlay(overlay);
      return;
    }
    setActiveOverlay((current) => (current === overlay ? null : current));
  };

  return (
    <header>
      <nav
        className="flex items-center justify-end gap-1 px-2 py-1"
        aria-label="Actions"
      >
        <StatsButton
          open={activeOverlay === "stats"}
          onOpen={() => openOverlay("stats")}
          onOpenChange={(open) => handleOverlayOpenChange("stats", open)}
        />
        <HelpButton
          open={activeOverlay === "help"}
          onOpen={() => openOverlay("help")}
          onOpenChange={(open) => handleOverlayOpenChange("help", open)}
        />
        <InfoButton
          open={activeOverlay === "info"}
          onOpen={() => openOverlay("info")}
          onOpenChange={(open) => handleOverlayOpenChange("info", open)}
        />
        <SettingsButton
          open={activeOverlay === "settings"}
          onOpen={() => openOverlay("settings")}
          onOpenChange={(open) => handleOverlayOpenChange("settings", open)}
        />
      </nav>

      <h1>
        <img
          src={`${import.meta.env.BASE_URL}images/title.png`}
          alt="ELEMENTAIRE — Retrouvez l'élément mystère"
          className="w-full"
        />
      </h1>
    </header>
  );
}
