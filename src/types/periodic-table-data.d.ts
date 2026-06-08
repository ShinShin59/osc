declare module "periodic-table-data" {
  import type { Element } from "@/types/element";

  export const tableData: Element[];
  export const symbols: Record<string, Element>;
  export const names: Record<string, Element>;
  export const numbers: Record<number, Element>;
  export function getInfoBySymbol(symbol: string): Element | Record<string, never>;
  export function getInfoByName(name: string): Element | Record<string, never>;
  export function getInfoByNumber(atomicNumber: number): Element | Record<string, never>;
}
