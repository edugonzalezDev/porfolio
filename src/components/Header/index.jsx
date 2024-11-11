import Navbar from "../Navbar"
import Social from "../Social"
import "./Header.css"
export const Header = () => {
  return (
    <header className="header">
        <Navbar />
        <Social />
    </header>
  )
}