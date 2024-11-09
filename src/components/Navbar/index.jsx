import Menu from "../Menu";
import "./Navbar.css";
import UserNavCard from "../UserNavCard";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Menu />
        <UserNavCard />
      </nav>
    </>
  );
};

export default Navbar;
