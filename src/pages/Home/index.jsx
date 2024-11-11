import "./Home.css";
import Aside from "../../components/Aside";
import Article from "../../components/Article";

export const Home = () => {
  
  return (
    <main className="flex">
      <Aside />
      <Article />
    </main>
  );
};
