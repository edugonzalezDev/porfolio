import Menu from '../Menu';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
        <Menu />
            <ul className="navbar-list">
                <li className="navbar-item">edugonzalez.dev</li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;