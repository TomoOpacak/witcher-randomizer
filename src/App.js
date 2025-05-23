import CitizenCards from "./components/CitizenCards";
import MonsterCards from "./components/MonsterCards";
import "./css/style.css";
function App() {
  return (
    <div>
      <h1 className="title">Vještac - Nasumična igra</h1>
      <MonsterCards />
      <CitizenCards />
      <footer>
        <p>
          This page is made for educational purposes and only for personal use.
          All art provided from Gwent Card Game.
        </p>
        <p>Translation made by Reattera</p>
      </footer>
    </div>
  );
}

export default App;
