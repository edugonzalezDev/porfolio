import perfilImage from "../../assets/perfil.png";
import "./Home.css";
import { Card } from "../../components/Card";

export const Home = () => {
  const projects = [
    {
      nombre: "Bisbier",
      descripcion:
        "Página web de una cervecería artesanal, desarrollada con React, React Router Dom, Material UI, Firebase",
      imageUrl: "/src/assets/bisbier.gif",
      projectLink: "https://github.com/edugonzalezDev/bisbier_ReactJS",
      year: 2023,
    },
    {
      nombre: "Sportit",
      descripcion:
        "Página web con HTML y CSS, desarrollada con HTML y CSS, con un diseño responsive y animaciones",
      imageUrl: "/src/assets/sportit.png",
      projectLink: "https://github.com/daiterranova/sportit",
      year: 2023,
    },
    {
      nombre: "ClinicaOdontologica",
      descripcion:
        "API REST desarrollada con Spring Boot, Spring Data JPA, Spring Web, Lombok, H2 Database",
      imageUrl: "/src/assets/clinicaodontologica.gif",
      projectLink: "https://github.com/edugonzalezDev/ClinicaOdontologica",
      year: 2024,
    },
    {
      nombre: "Porfolio",
      descripcion: "Página web personal, desarrollada con React",
      imageUrl: "/src/assets/porfolio.gif",
      projectLink: "https://github.com/edugonzalezDev/porfolio",
      year: 2024,
    },
  ];

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
