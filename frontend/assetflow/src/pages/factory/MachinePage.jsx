import { useEffect, useState } from "react"
import LoadingPage from "../../components/global/LoadingPage/LoadingPage";
import Form from "../../components/form/Form";

const urlMachines = 'http://127.0.0.1:8080/api/v1/machines';
const urlDepartmens = 'http://127.0.0.1:8080/api/v1/departments';

const machineFields = [
  { name: "assetCode", label: "Codice Asset" },
  { name: "name", label: "Nome" },
  { name: "status", label: "Stato" },
];

const machineInit = [
  { "assetCode": "", "name": "", "status": "" }
];

export default function MachinePage() {

  const [machineForm, setMachineForm] = useState(machineInit);
  const [machines, setMAchines] = useState();
  const [machine, setMAchine] = useState();
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

  function fetchDataById(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl)
      .then(response => response.json())
      .then(data => { setMachineForm(data); setDepartmensList(data); })
      .catch(err => console.log(err));
  }

  function postData(url) {
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(machineForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setMachineForm(machineInit);
        fetchData(urlMachines);
      })
      .catch(err => console.log(err));
  }

  function putData(url, id) {
    id = Number(id);
    const completeUrl = `${url}/${id}`;
    fetch(completeUrl, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(machineForm) })
      .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        setMachineForm(machineInit);
        setMAchine();
        fetchData(urlMachines);
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
        if (machineForm.id === id) setDepartmentForm(machineInit);
        fetchData(urlMachines);
      })
      .catch(err => console.log(err));
  }

  const handleChange = (e) => {
    setMachineForm({ ...machineForm, [e.target.name]: e.target.value });
  };

  const showMachine = (id) => {
    fetchDataById(urlMachines, id);
  }

  const postMachine = (e) => {
    e.preventDefault();
    postData(urlMachines);
  }

  const editMachine = (e, id) => {
    e.preventDefault();
    putData(urlMachines, id);
  };

  const deleteMachine = (id) => {
    deleteData(urlMachines, id);
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
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {machines?.map(machine =>
                  <tr key={machine.id}>
                    <th scope="row">{machine.id}</th>
                    <td>{machine.assetCode}</td>
                    <td>{machine.name}</td>
                    <td>{machine.status}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => { showMachine(machine.id) }}><i className="bi bi-pencil-square"></i></button>-
                      <button className="btn btn-danger btn-sm" onClick={() => deleteMachine(machine.id)}><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          <div className="col-6">
            {machine ? <h4>Edit Machine</h4> : <h4>Add Machine</h4>}
            {machine ? <Form fields={machineFields} data={machineForm} handleChange={handleChange} save={(e) => editMachine(e, machine.id)} /> : <Form fields={machineFields} data={machineForm} handleChange={handleChange} save={(e) => postMachine(e)} />}
          </div>
        </div>
      </div>
    </>
  )
}
