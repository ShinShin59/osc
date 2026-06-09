export const SYNTHESIS_ORIGINS = [
  "big-bang",
  "dying-star",
  "supernova",
  "cosmic-rays",
  "neutron-star-merger",
  "radioactive-decay",
  "artificial",
] as const;

export type SynthesisOrigin = (typeof SYNTHESIS_ORIGINS)[number];

export const SYNTHESIS_LABELS: Record<SynthesisOrigin, string> = {
  "big-bang": "Big Bang",
  "dying-star": "Étoile mourante",
  supernova: "Supernova",
  "cosmic-rays": "Collision de rayons cosmiques",
  "neutron-star-merger": "Fusion d'étoiles à neutrons",
  "radioactive-decay": "Désintégration radioactive",
  artificial: "Artificiel",
};

export type SynthesisDataset = {
  source: string;
  generatedAt: string;
  thresholdPercent: number;
  byNumber: Record<string, SynthesisOrigin[]>;
};
