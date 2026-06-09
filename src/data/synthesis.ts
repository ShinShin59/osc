import synthesisJson from "@/data/enriched/synthesis.json";
import {
  SYNTHESIS_LABELS,
  type SynthesisDataset,
  type SynthesisOrigin,
} from "@/data/synthesis-types";

const dataset = synthesisJson as SynthesisDataset;

export function getSynthesisOrigins(atomicNumber: number): SynthesisOrigin[] {
  return dataset.byNumber[String(atomicNumber)] ?? ["artificial"];
}

export function formatSynthesis(atomicNumber: number): string {
  const origins = getSynthesisOrigins(atomicNumber);
  if (origins.length >= 2) {
    return "Multiple";
  }
  return SYNTHESIS_LABELS[origins[0] ?? "artificial"];
}
