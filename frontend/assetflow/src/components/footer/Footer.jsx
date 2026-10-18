import { Link } from "react-router";

export default function Footer() {

  return (
    <>
      <footer className="container">
        <div className="row justify-content-around">
          <div className="col-3">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}