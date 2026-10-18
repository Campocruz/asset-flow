// Import From React Router
import { NavLink, Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${theme}`} data-bs-theme={theme}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Asset Flow</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Factory
                </Link>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/building">Building</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/department">Department</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/machine">Machine</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-theme" onClick={() => toggleTheme()}>
              <span><i className={`bi bi-emoji-sunglasses${theme === 'dark' ? "-fill" : ""}`}></i></span>
            </button>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}