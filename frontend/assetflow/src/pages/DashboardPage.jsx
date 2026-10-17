export default function DashboardPage() {
  return (
    <>
      <div className="mb-4">
        <h2 className="mb-0">Dashboard</h2>
        <p className="text-body-secondary mb-0">Fabbricati, reparti e macchine</p>
      </div>

      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">

        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="mb-0"><i className="bi bi-building"></i> Fabbricato A</h5>
              <small className="text-body-secondary">Via Roma 12, Milano</small>
            </div>
            <div className="card-body">

              <div className="border rounded p-2 mb-2">
                <h6 className="mb-2">
                  <i className="bi bi-grid-3x3-gap"></i> Montaggio
                  <span className="badge text-bg-secondary ms-1">2</span>
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Pressa idraulica <small className="text-body-secondary">AS-001</small></span>
                    <span className="badge text-bg-success">Attiva</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Saldatrice <small className="text-body-secondary">AS-002</small></span>
                    <span className="badge text-bg-warning">Manutenzione</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded p-2 mb-2">
                <h6 className="mb-2">
                  <i className="bi bi-grid-3x3-gap"></i> Verniciatura
                  <span className="badge text-bg-secondary ms-1">1</span>
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Cabina di verniciatura <small className="text-body-secondary">AS-003</small></span>
                    <span className="badge text-bg-success">Attiva</span>
                  </li>
                </ul>
              </div>

            </div>
            <div className="card-footer text-body-secondary small">2 reparti &middot; 3 macchine</div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="mb-0"><i className="bi bi-building"></i> Fabbricato B</h5>
              <small className="text-body-secondary">Via Milano 5, Monza</small>
            </div>
            <div className="card-body">

              <div className="border rounded p-2 mb-2">
                <h6 className="mb-2">
                  <i className="bi bi-grid-3x3-gap"></i> Magazzino
                  <span className="badge text-bg-secondary ms-1">2</span>
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Carrello elevatore <small className="text-body-secondary">AS-004</small></span>
                    <span className="badge text-bg-success">Attiva</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>Nastro trasportatore <small className="text-body-secondary">AS-005</small></span>
                    <span className="badge text-bg-danger">Ferma</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded p-2 mb-2">
                <h6 className="mb-2">
                  <i className="bi bi-grid-3x3-gap"></i> Collaudo
                  <span className="badge text-bg-secondary ms-1">0</span>
                </h6>
                <p className="text-body-secondary small mb-0">Nessuna macchina associata.</p>
              </div>

            </div>
            <div className="card-footer text-body-secondary small">2 reparti &middot; 2 macchine</div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="mb-0"><i className="bi bi-building"></i> Fabbricato C</h5>
              <small className="text-body-secondary">Via Torino 30, Lecco</small>
            </div>
            <div className="card-body">
              <p className="text-body-secondary small mb-0">Nessun reparto presente.</p>
            </div>
            <div className="card-footer text-body-secondary small">0 reparti &middot; 0 macchine</div>
          </div>
        </div>

      </div>
    </>
  )
}