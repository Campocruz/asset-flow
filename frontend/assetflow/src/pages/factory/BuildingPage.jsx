import { useEffect, useState } from "react";
import LoadingPage from '../../components/global/LoadingPage/LoadingPage'

const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

export default function BuildinPage() {

  const [buildings, setBuildings] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => { setBuildings(data); setLoad(false); })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData(urlBuildings);
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
                {buildings?.map(building =>
                  <tr key={building.id}>
                    <th scope="row">{building.id}</th>
                    <td>{building.code}</td>
                    <td>{building.name}</td>
                    <td>{building.address}</td>
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