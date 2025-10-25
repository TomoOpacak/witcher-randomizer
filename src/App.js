import CitizenCards from "./components/CitizenCards";
import MonsterCards from "./components/MonsterCards";
import "./css/style.css";
function App() {
  return (
    <div>
      <div className="naslov">
        <h1>⚀</h1>
        <h1>Kraljevstvo Kockica</h1>
        <h1>⚅</h1>
      </div>

      <MonsterCards />
      <CitizenCards />
      <footer>
        <p>
          This page is made for educational purposes and only for personal use.
        </p>
        <p>Translation made by Reattera</p>
      </footer>
    </div>
  );
}

export default App;
