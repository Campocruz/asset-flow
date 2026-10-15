import { useEffect, useState } from "react";
import LoadingPage from "../../components/global/LoadingPage/LoadingPage";
import Form from "../../components/form/Form";

const urlDepartments = 'http://127.0.0.1:8080/api/v1/departments';
const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

const departmentFields = [
  { name: "code", label: "Codice" },
  { name: "name", label: "Nome" },
  { name: "description", label: "Descrizione" },
];

const departmentInit = [
  { "code": "", "name": "", "description": "" }
];

export default function DepartmentPage() {

  const [departmentForm, setDepartmentForm] = useState({ "code": "", "name": "", "description": "", "building": "" });
  const [departments, setDepartments] = useState();
  const [department, setDepartment] = useState();
  const [buildingList, setBuildingList] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => { setDepartments(data); setLoad(false); })
      .catch(err => console.log(err));

    fetch(urlBuildings)
      .then(response => response.json())
      .then(data => setBuildingList(data))
      .catch(err => console.log(err));
  }

  function fetchDataById(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl)
      .then(response => response.json())
      .then(data => { setDepartmentForm(data); setDepartment(data); })
      .catch(err => console.log(err));
  }

  function postData(url) {
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(departmentForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setDepartmentForm(departmentInit);
        fetchData(urlDepartments);
      })
      .catch(err => console.log(err));
  }

  function putData(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(departmentForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setDepartmentForm(departmentInit);
        setDepartment();
        fetchData(urlDepartments);
      })
      .catch(err => console.log(err));
  }

  function deleteData(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    console.log(completeUrl)
    fetch(completeUrl, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        if (departmentForm.id === id) setDepartmentForm(departmentInit);
        fetchData(urlDepartments);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setDepartmentForm({ ...departmentForm, [e.target.name]: e.target.value });
  };

  const showDepartment = (id) => {
    fetchDataById(urlDepartments, id);
  }

  const postDepartment = (e) => {
    e.preventDefault();
    postData(urlDepartments);
  }

  const editDepartment = (e, id) => {
    e.preventDefault();
    putData(urlDepartments, id);
  };

  const deleteDepartment = (id) => {
    deleteData(urlDepartments, id);
  };

  useEffect(() => {
    fetchData(urlDepartments)
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
                  <th scope="col">Description</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {departments?.map(department =>
                  <tr key={department.id}>
                    <th scope="row">{department.id}</th>
                    <td>{department.code}</td>
                    <td>{department.name}</td>
                    <td>{department.description}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => { showDepartment(department.id) }}><i className="bi bi-pencil-square"></i></button>-
                      <button className="btn btn-danger btn-sm" onClick={() => deleteDepartment(department.id)}><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          <div className="col-6">
            {department ? <h4>Edit Building</h4> : <h4>Add Building</h4>}
            {department ? <Form fields={departmentFields} data={departmentForm} handleChange={handleChange} save={(e) => editDepartment(e, department.id)} /> : <Form fields={departmentFields} data={departmentForm} handleChange={handleChange} save={(e) => postDepartment(e)} />}
          </div>
        </div>
      </div>
    </>
  )
}