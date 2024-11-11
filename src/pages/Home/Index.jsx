import perfilImage from "../../assets/perfil.png";
import "./Home.css";
import { Card } from "../../components/Card";
import { projects } from "../../utils/db";

export const Home = () => {
  
  return (
    <main className="flex">
      <aside>
        <img src={perfilImage} className="perfil" alt="Foto de perfil" />
        <h1>Hola, mi nombre es Eduardo 👋</h1>
        <p>
          Desarrollador Full Stack en transición con sólida experiencia en
          Logística
        </p>
      </aside>
      <article className="article">
        <h2>Proyectos</h2>
        {projects.map((project, index) => (
            
          <Card
            key={index}
            title={project.nombre}
            description={project.descripcion}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            year={project.year}
          />
          
        ))}
      </article>
    </main>
  );
};
