import perfilImage from "./assets/perfil.png";
import "./App.css";

function App() {
  return (
    <>
      <img src={perfilImage} className="perfil" alt="Foto de perfil" />
      <h1>Hola, mi nombre es Eduardo 👋</h1>
      <p>
        Desarrollador Full Stack en transición con sólida experiencia en
        Logística
      </p>
    </>
  );
}

export default App;
