/* eslint-disable react/prop-types */
import "./Menu.css";
import {
  LuUser2,
  LuSquareCode,
  LuContact2,
  LuGraduationCap,
} from "react-icons/lu";
import UserNavCard from "../UserNavCard";

const Menu = ({ isOpen, setIsOpen }) => {
  
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
      )}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <UserNavCard isOpen={isOpen} />
        <ul>
          <li>
            <a href="#home">
              <LuUser2 className="menu-icono" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <LuSquareCode className="menu-icono" />
              <span>Proyectos</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <LuGraduationCap className="menu-icono" />
              <span>Formación</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <LuContact2 className="menu-icono" />
              <span>Contacto</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};
export default Menu;
