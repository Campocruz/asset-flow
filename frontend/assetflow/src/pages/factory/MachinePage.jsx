import { useEffect, useState } from "react"
import LoadingPage from "../../components/global/LoadingPage/LoadingPage";

const urlBuildings = 'http://127.0.0.1:8080/api/v1/machines';

export default function MachinePage() {

  const [machines, setMAchines] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => { setMAchines(data); setLoad(false); })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData(urlMachines)
  }, [])

  if (load) { return <LoadingPage /> }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {machines?.map(machine =>
                  <tr key={machine.id}>
                    <th scope="row">{machine.id}</th>
                    <td>{machine.assetCode}</td>
                    <td>{machine.name}</td>
                    <td>{machine.status}</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </>
  )
}