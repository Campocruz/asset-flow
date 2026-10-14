import { useEffect, useState } from "react";
import LoadingPage from "../../components/global/LoadingPage/LoadingPage";
import Form from "../../components/form/Form";

const urlDepartments = 'http://127.0.0.1:8080/api/v1/departments';
const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

export default function DepartmentPage() {

  const [departmentForm, setDepartmentForm] = useState({ "code": "", "name": "", "description": "", "building": "" });
  const [departments, setDepartments] = useState();
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

  function postData(e) {
    e.preventDefault();
    fetch(urlDepartments, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(departmentForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setDepartmentForm({ "code": "", "name": "", "description": "", "building": "" });
        fetchData(urlDepartments);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setDepartmentForm({ ...departmentForm, [e.target.name]: e.target.value });
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
                </tr>
              </thead>
              <tbody>
                {departments?.map(department =>
                  <tr key={department.id}>
                    <th scope="row">{department.id}</th>
                    <td>{department.code}</td>
                    <td>{department.name}</td>
                    <td>{department.description}</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          <div className="col-6">
            <h4>Add or Edit Department</h4>
            <Form data={departmentForm} handleChange={handleChange} save={postData} >
              <div className="col-md-12">
                <label htmlFor="building" className="form-label">Building</label>
                <select id="building" className="form-select" value={departmentForm.building} onChange={handleChange} name="building">
                  {buildingList?.map(building =>
                    <option key={building.id} value={building.id}>{building.code} - {building.name}</option>
                  )}
                </select>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}