

import { Link } from 'react-router-dom';


const Footer = () => {


  return (
    <footer>
      <div className='footer_stack'>
        {/* Site Map */}
        <section className="sitemap">
          <h3>Sitemap</h3>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="menu">Menu</Link></li>
            <li><Link to="reservations">Reservations</Link></li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              Address: <span>439 N Wells St, Chicago, IL 60654</span>
            </li>
            <li>
              Phone: (312) 828-9800
            </li>
            <li>
              <span className='no-wrap'>Mail: contact@littlelemon.com</span>
            </li>
          </ul>
        </section>

        {/* Lets connect */}
        <section className="connect">
          <h3>Let&apos;s Connect</h3>
          <div className='stack_H'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/facebook-logo.png")} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/X-Logo.png")} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/instagram-logo.png")} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/youtube-logo.png")} alt="Youtube" />
            </a>
          </div>
        </section>
      </div>
      <p>©Little Lemon Restaurant @ 2024</p>
    </footer>
  );
};

export default Footer;
