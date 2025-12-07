import CitizenCards from "./components/CitizenCards";
import MonsterCards from "./components/MonsterCards";
import "./css/style.css";
function App() {
  return (
    <div>
      <div className="naslov">
        <img
          src={`${process.env.PUBLIC_URL}/images/dice_icon_l.webp`}
          alt="Dice Icon"
          className="dice-icon-left wobble-image"
        />
        <h1 className="main-title">Kraljevstvo Kockica</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/dice_icon_r.webp`}
          alt="Dice Icon"
          className="dice-icon-right wobble-image"
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
