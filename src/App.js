import CitizenCards from "./components/CitizenCards";
import MonsterCards from "./components/MonsterCards";
import "./css/style.css";
function App() {
  return (
    <div>
      <h1>⚀ Kraljevstvo Kockica ⚅</h1>

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
