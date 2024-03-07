

import { ReactComponent as Logo } from "../images/Logo.svg"
import { Routes, Route, Link } from 'react-router-dom';
import About from "./About";
import Home from "./Home";


const Header = () => {

    return (
      <>
        <header>
          <div className="header-logo">
            <Logo/>
          </div>
          <nav>
            <ul>
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/about" className="nav-item">About</Link>
              <Link to="/" className="nav-item">Menu</Link>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>

      </>
    );
};

export default Header;
