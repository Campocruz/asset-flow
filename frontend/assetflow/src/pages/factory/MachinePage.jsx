import { useEffect, useState } from "react"
import LoadingPage from "../../components/global/LoadingPage/LoadingPage";
import Form from "../../components/form/Form";

const urlMachines = 'http://127.0.0.1:8080/api/v1/machines';
const urlDepartmens = 'http://127.0.0.1:8080/api/v1/departments';

export default function MachinePage() {

  const [machineForm, setMachineForm] = useState({ "assetCode": "", "name": "", "status": "" });
  const [machines, setMAchines] = useState();
  const [departmentsList, setDepartmensList] = useState();
  const [load, setLoad] = useState(true);

  function fetchData(urlMachine, urlDepartment) {
    fetch(urlMachine)
      .then(response => response.json())
      .then(data => { setMAchines(data); setLoad(false); })
      .catch(err => console.log(err));

    fetch(urlDepartment)
      .then(response => response.json())
      .then(data => setDepartmensList(data))
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setMachineForm({ ...machineForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchData(urlMachines, urlDepartmens);
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
                  <th scope="col">Asset Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
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
            <h4>Add or Edit Machine</h4>
            <Form data={machineForm} handleChange={handleChange}>
              <div className="col-md-12">
                <label htmlFor="department_id" className="form-label">Departments</label>
                <select id="department_id" className="form-select" value={machineForm.department_id} onChange={handleChange}>
                  {departmentsList?.map(department =>
                    <option key={department.id} value={department.id}>{department.code} - {department.name}</option>
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
