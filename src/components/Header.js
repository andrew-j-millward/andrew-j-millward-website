import { Link, useLocation } from "react-router-dom";
import LinkSpan from "./LinkSpan";
import logo from "../Andrew-J-Millward-Portfolio-Logo-Modern-2.svg#svgView(viewBox(70,70,0,0))";

const Header = () => {
  const activePage = useLocation().pathname;
  return (
    <div>
      <header className="App-header">
        <LinkSpan
          page="home"
          address="/"
          active={activePage === "/" ? true : false}
        />
        <LinkSpan
          page="about me"
          address="/about"
          active={activePage === "/about" ? true : false}
        />
        <span>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </span>
        <LinkSpan
          page="portfolio"
          address="/portfolio"
          active={activePage === "/portfolio" ? true : false}
        />
        <LinkSpan
          page="contact me"
          address="/contact"
          active={activePage === "/contact" ? true : false}
        />
      </header>
    </div>
  );
};

export default Header;
