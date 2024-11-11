/* eslint-disable react/prop-types */
import './Card.css';
import { FaGithub } from 'react-icons/fa';

export const Card = ({ title, description, imageUrl="/src/assets/default.png" , projectLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={projectLink} className="card-link" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color='white'/>
        </a>
      </div>
    </div>
  );
};
