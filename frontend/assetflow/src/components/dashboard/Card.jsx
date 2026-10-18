export default function Card({ item }) {

  return (
    <>
      <div className="card h-100">
        <div className="card-header">
          <h5 className="mb-0"><i className="bi bi-building"></i>{item.name}</h5>
          <small className="text-body-secondary">{item.address}</small>
        </div>
        <div className="card-body">

          {item.departments?.map(depart =>
            <div className="border rounded p-2 mb-2">
              <h6 className="mb-2">
                <i className="bi bi-grid-3x3-gap"></i> {depart.name}
                <span className="badge text-bg-secondary ms-1">{depart.machines.length}</span>
              </h6>
              <ul className="list-group list-group-flush">
                {depart.machines?.map(machine =>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <span>{machine.name} <small className="text-body-secondary">{machine.code}</small></span>
                    <span className="badge text-bg-success">{machine.status}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

        </div>
        <div className="card-footer text-body-secondary small">{item.departments.length} reparti &middot; 3 macchine</div>
      </div>
    </>
  )
}