// Styling
import { ThemeButton } from "../styles";
import lightLogo from "../light-logo.jpg";
import darkLogo from "../dark-logo.png";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../styles";
import { NavItem } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem to="/products" style={{ margin: 10, float: "right" }}>
          Products
        </NavItem>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
