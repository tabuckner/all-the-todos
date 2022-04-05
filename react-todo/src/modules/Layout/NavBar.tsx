import { FunctionComponent } from "react";
import logo from '../../logo.svg'

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-bar__title">React ToDo List</div>
      <div className="nav-bar__auth">
        <button>Log In</button>
      </div>
    </div>
  );
}

export default NavBar;