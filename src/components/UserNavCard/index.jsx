import imagePerfil from "../../assets/perfil.png";
import './UserNavCard.css';

const UserNavCard = () => {
  return (
    <div className="user-nav-card">
          <img src={imagePerfil} alt="" className="user-nav-card-image" />
          <div className="user-nav-card-text">
            <h4 className="user-nav-card-title">Eduardo Gonzalez</h4>
            <span className="user-nav-card-subtitle">edugonzalezDev</span>
          </div>
        </div>
  )
}

export default UserNavCard