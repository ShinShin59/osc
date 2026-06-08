import * as ptd from "periodic-table-data";
import { ElementCell } from "@/components/game/ElementCell";
const hydrogen = ptd.symbols.H;
const iron = ptd.symbols.Fe;
const uranium = ptd.symbols.U;

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 p-6">
      <ElementCell element={hydrogen} />
      <ElementCell element={iron} />
      <ElementCell element={uranium} />
    </div>
  );
}

export default App;
