import { Card } from "../../components/Card";
import { projects } from "../../utils/db";
import "./Article.css";

const Article = () => {
  return (
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
  )
}

export default Article