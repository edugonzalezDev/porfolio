import './Footer.css'; 
import Social from '../Social';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} edugonzalezDev. Todos los derechos reservados.</p>
            <Social />
        </footer>
    );
};

export default Footer;