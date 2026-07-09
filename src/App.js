import CitizenCards from "./components/CitizenCards";
import MonsterCards from "./components/MonsterCards";
import "./css/style.css";
function App() {
  return (
    <div className="main">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/icons/logo_title.webp`}
          alt="Dice Icon"
          className="logo-title"
        />
      </div>

      <MonsterCards />
      <CitizenCards />
      <footer>
        <p>
          Ova stranica je napravljena u obrazovne svrhe i samo za osobnu
          upotrebu.
        </p>
      </footer>
    </div>
  );
}

export default App;
