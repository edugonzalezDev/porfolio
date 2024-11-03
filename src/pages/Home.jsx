import perfilImage from "../assets/perfil.png";
import "./Home.css";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <article className="article">
      <img src={perfilImage} className="perfil" alt="Foto de perfil" />
      <h1>Hola, mi nombre es Eduardo 👋</h1>
      <p>
        Desarrollador Full Stack en transición con sólida experiencia en
        Logística
      </p>
      <h2>Proyectos</h2>
      <Card
        title={"Proyecto 1"}
        description={"descripcion del proyecto"}
        imageUrl={"/src/assets/bisbier.gif"}
        projectLink={""}
      />
    </article>
  );
};
