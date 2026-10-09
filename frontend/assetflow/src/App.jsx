
function App() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Asset Flow</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Dashboard</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Factory
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Building</a></li>
                    <li><a className="dropdown-item" href="#">Department</a></li>
                    <li><a className="dropdown-item" href="#">Machine</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <h2 className='bg-secondary'>Main</h2>
      </main>

      <footer>
        <div className="row justify-content-around">
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
