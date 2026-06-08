export type ElementCategory =
  | "Alkali metal"
  | "Alkaline earth metal"
  | "Transition metal"
  | "Post-transition metal"
  | "Metalloid"
  | "Nonmetal"
  | "Halogen"
  | "Noble gas"
  | "Lanthanide"
  | "Actinide";

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  groupBlock: ElementCategory;
  cPKHexColor: string;
  electronConfiguration: string;
  electronegativity: number | null;
  atomicRadius: number | null;
  ionizationEnergy: number | null;
  electronAffinity: number | null;
  oxidationStates: string;
  standardState: string;
  meltingPoint: number | null;
  boilingPoint: number | null;
  density: number | null;
  yearDiscovered: string;
}
