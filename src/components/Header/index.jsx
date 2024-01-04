import "./style.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

export const Header = () => {
  return (
    <header className="headerContainer">
      <span className="title">A PRAÇA</span>

      <div className="iconContainer">
        <img className="icon" src={instagram} alt="instagram" />

        <img className="icon" src={facebook} alt="facebook" />
      </div>
    </header>
  );
};
