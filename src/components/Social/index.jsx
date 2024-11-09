import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

import './Social.css'; 

const Social = () => {
  return (
    <div className="social-icons">
    <a href="https://github.com/edugonzalezDev" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
    </a>
    <a href="https://www.linkedin.com/in/egonzalezy/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
    </a>
    <a href="mailto:edugonzalezdev@gmail.com" target="_blank" rel="noopener noreferrer">	
        <BiLogoGmail size={30} />
    </a>
</div>
  )
}

export default Social