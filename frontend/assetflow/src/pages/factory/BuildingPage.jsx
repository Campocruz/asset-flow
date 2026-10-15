import { useEffect, useState } from "react";

import LoadingPage from '../../components/global/LoadingPage/LoadingPage';
import Form from "../../components/form/Form";

const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

const buildingFields = [
  { name: "code", label: "Codice" },
  { name: "name", label: "Nome" },
  { name: "address", label: "Indirizzo" },
];

const buildingInit = [
  { "code": "", "name": "", "address": "" }
];

export default function BuildinPage() {

  const [buildForm, setBuildForm] = useState(buildingInit);
  const [buildings, setBuildings] = useState();
  const [building, setBuilding] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => { setBuildings(data); setLoad(false); })
      .catch(err => console.log(err));
  }

  function fetchDataById(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl)
      .then(response => response.json())
      .then(data => { setBuildForm(data); setBuilding(data); })
      .catch(err => console.log(err));
  }

  function postData(url) {
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setBuildForm(buildingInit);
        fetchData(urlBuildings);
      })
      .catch(err => console.log(err));
  }

  function putData(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(buildForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setBuildForm(buildingInit);
        setBuilding();
        fetchData(urlBuildings);
      })
      .catch(err => console.log(err));
  }

  function deleteData(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        if (buildForm.id === id) setBuildForm(buildingInit);
        fetchData(urlBuildings);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setBuildForm({ ...buildForm, [e.target.name]: e.target.value });
  };

  const showBuilding = (id) => {
    fetchDataById(urlBuildings, id);
  }

  const postBuild = (e) => {
    e.preventDefault();
    postData(urlBuildings);
  }

  const editBuild = (e, id) => {
    e.preventDefault();
    putData(urlBuildings, id);
  };

  const deleteBuilding = (id) => {
    deleteData(urlBuildings, id);
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
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {buildings?.map(building =>
                  <tr key={building.id}>
                    <th scope="row">{building.id}</th>
                    <td>{building.code}</td>
                    <td>{building.name}</td>
                    <td>{building.address}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => { showBuilding(building.id) }}><i className="bi bi-pencil-square"></i></button>-
                      <button className="btn btn-danger btn-sm" onClick={() => deleteBuilding(building.id)}><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          <div className="col-6">
            {building ? <h4>Edit Building</h4> : <h4>Add Building</h4>}
            {building ? <Form fields={buildingFields} data={buildForm} handleChange={handleChange} save={(e) => editBuild(e, building.id)} /> : <Form fields={buildingFields} data={buildForm} handleChange={handleChange} save={(e) => postBuild(e)} />}
          </div>
        </div>
      </div>
    </>
  )
}