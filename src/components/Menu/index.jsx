import { useState } from 'react';
import './Menu.css';
import { LuUser2, LuSquareCode, LuContact2, LuGraduationCap } from "react-icons/lu";
import UserNavCard from '../UserNavCard';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <div className={`menu ${isOpen ? 'open' : ''}`}>
            <UserNavCard />
                <ul>
                    <li><LuUser2 /><a href="#home">Perfil</a></li>
                    <li><LuSquareCode /><a href="#about">Proyectos</a></li>
                    <li><LuGraduationCap /><a href="#services">Formación</a></li>
                    <li><LuContact2 /><a href="#contact">Contact</a></li>
                </ul>
            </div>
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        </>
    );
};
export default Menu;