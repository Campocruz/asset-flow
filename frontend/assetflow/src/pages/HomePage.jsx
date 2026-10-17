import { Link } from "react-router";

export default function HomePage() {
  return (
    <>
      <section className="text-center py-5">
        <h1 className="display-5 fw-bold">Gestisci fabbricati, reparti e macchine</h1>
        <p className="lead text-body-secondary mb-4">
          Ogni fabbricato ha i suoi reparti, ogni reparto le sue macchine.
          Tutto sotto controllo in un unico posto.
        </p>
        <Link to="/dashboard" className="btn btn-primary btn-lg me-2">Vai alla dashboard</Link>
        <Link to="/machine" className="btn btn-outline-secondary btn-lg">Aggiungi una macchina</Link>
      </section>

      <section className="row row-cols-1 row-cols-md-3 g-3 pb-5">

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="bi bi-building fs-1"></i>
              <h5 className="card-title mt-2">Fabbricati</h5>
              <p className="card-text text-body-secondary">Le sedi in cui si trovano i reparti.</p>
              <Link to="/building" className="btn btn-outline-primary btn-sm">Gestisci</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="bi bi-grid-3x3-gap fs-1"></i>
              <h5 className="card-title mt-2">Reparti</h5>
              <p className="card-text text-body-secondary">Le aree di lavoro di ogni fabbricato.</p>
              <Link to="/department" className="btn btn-outline-primary btn-sm">Gestisci</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="bi bi-gear fs-1"></i>
              <h5 className="card-title mt-2">Macchine</h5>
              <p className="card-text text-body-secondary">Gli asset associati ai reparti.</p>
              <Link to="/machine" className="btn btn-outline-primary btn-sm">Gestisci</Link>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}