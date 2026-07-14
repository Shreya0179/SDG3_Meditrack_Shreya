import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-section">
        <img src={logo} alt="MediTrack Logo" className="logo" />
        <h2>MediTrack</h2>
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {token ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
            
            <li>
              <Link to="/ai">AI Assistant</Link>
            </li>

            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;