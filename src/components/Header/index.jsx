import "./style.css";
import home from "../../assets/home.png";

export const Header = () => {
  return (
    <header className="headerContainer">
      <span className="title">A PRAÇA</span>

      <div className="iconContainer">
        <img className="home" src={home} alt="home" />
      </div>
    </header>
  );
};
