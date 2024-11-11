import './Footer.css'; 
import Social from '../Social';

export const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} edugonzalezDev. Todos los derechos reservados.</p>
            <Social />
        </footer>
    );
};