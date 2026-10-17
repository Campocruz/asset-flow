import { useNavigate } from 'react-router';

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <section className="text-center py-5 my-5">
        <h1 className="display-1 fw-bold text-body-secondary">404</h1>
        <h2 className="mb-3">Pagina non trovata</h2>
        <p className="text-body-secondary mb-4">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <a href="index.html" className="btn btn-primary me-2"><i className="bi bi-house"></i> Torna alla home</a>
        <a href="dashboard.html" className="btn btn-outline-secondary">Vai alla dashboard</a>
      </section>
    </>
  )
}