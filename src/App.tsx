import { Game } from "@/components/game/Game";
import { Header } from "@/components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen mx-auto max-w-7xl">
      <Header />
      <Game />
    </div>
  );
}

export default App;
