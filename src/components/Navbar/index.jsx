import Menu from "../Menu";
import "./Navbar.css";
import UserNavCard from "../UserNavCard";
import { useState } from "react";
const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar`}  onClick={toggleMenu}>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        {!isOpen && <UserNavCard isOpen={isOpen} />}
      </nav>
    </>
  );
};

export default Navbar;
