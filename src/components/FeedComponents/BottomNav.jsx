import "./BottomNav.css";

import homeIcon from "../../assets/casa.svg";
import searchIcon from "../../assets/lupa.svg";
import reelsIcon from "../../assets/reels.svg";
import profileIcon from "../../assets/perfil-sem-foto.jpeg";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-btn">
        <img src={homeIcon} alt="Home" />
      </button>

      <button className="nav-btn">
        <img src={searchIcon} alt="Buscar" />
      </button>

<button className="nav-btn nav-plus" aria-label="Criar">
  <span className="plus-char">+</span>
</button>


      <button className="nav-btn">
        <img src={reelsIcon} alt="Reels" />
      </button>

      <button className="nav-btn profile">
        <img src={profileIcon} alt="Perfil" />
      </button>
    </nav>
  );
}
