import { useNavigate } from 'react-router';

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center align-item-center">
        <section className="text-center vh-100">
          <h1><strong>404</strong></h1>
          <p>Page not Foound</p>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>Home Page</button>
        </section>
      </div>
    </>
  )
}