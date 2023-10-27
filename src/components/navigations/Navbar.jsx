import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          Jersey Waves
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
