import { useEffect, useState } from "react";
import LoadingPage from '../../components/global/LoadingPage/LoadingPage'
import Form from "../../components/form/Form";

const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

export default function BuildinPage() {

  const [buildForm, setBuildForm] = useState({ "code": "", "name": "", "address": "" });
  const [buildings, setBuildings] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => { setBuildings(data); setLoad(false); })
      .catch(err => console.log(err));
  }

  function postData(e) {
    e.preventDefault();
    fetch(urlBuildings, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setBuildForm({ "code": "", "name": "", "address": "" });
        fetchData(urlBuildings);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setBuildForm({ ...buildForm, [e.target.name]: e.target.value });
  };

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
            <h4>Add or Edit Building</h4>
            <Form data={buildForm} handleChange={handleChange} save={postData} />
          </div>
        </div>
      </div>
    </>
  )
}