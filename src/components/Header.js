

import { ReactComponent as Logo } from "../images/Logo.svg"
import { Routes, Route, Link } from 'react-router-dom';
import About from "./About";
import Booking from "./Booking";
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
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/booking" element={<Booking bookingPage={1} />}></Route>
            <Route path="/booking2" element={<Booking bookingPage={2} />}></Route> 
            <Route path="/booking3" element={<Booking bookingPage={3} />}></Route> 
          </Routes>
        </main>
      </>
    );
};

export default Header;
