import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">Sobre mi</li>
                <li className="navbar-item">Proyectos</li>
                <li className="navbar-item">Formación</li>
            </ul>
        </nav>
    );
};

export default Navbar;