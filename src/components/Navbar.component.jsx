import './Navbar.component.css';

const Navbar = () => {
    return (
      <nav className="menu-container">
        <div className="navbar-logo">
          <img src="/src/assets/logoimg.png" alt="Logo" />
          <p>ÖkoHelden</p>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Startseite</a></li>
          <li><a href="#about">Spiel</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
        <div className="navbar-user">
          <span>Welcome, User</span>
        </div>
      </nav>
    );
  }

export default Navbar