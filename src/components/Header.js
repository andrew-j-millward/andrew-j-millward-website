import { Link, useLocation } from "react-router-dom";
import LinkSpan from "./LinkSpan";
import logo from "../Andrew-J-Millward-Portfolio-Logo-Modern-2.svg";

const Header = ({ onSkip }) => {
  const activePage = useLocation().pathname;
  return (
    <div>
      <header className="App-header">
        <LinkSpan
          page="home"
          address="/"
          active={activePage === "/" ? true : false}
          onSkip={onSkip}
        />
        <LinkSpan
          page="about me"
          address="/about"
          active={activePage === "/about" ? true : false}
          onSkip={onSkip}
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
          onSkip={onSkip}
        />
        <LinkSpan
          page="contact me"
          address="/contact"
          active={activePage === "/contact" ? true : false}
          onSkip={onSkip}
        />
      </header>
    </div>
  );
};

export default Header;
