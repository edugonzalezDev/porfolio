/* eslint-disable react/prop-types */
import './Card.css';

export const Card = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={projectLink} className="card-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};
