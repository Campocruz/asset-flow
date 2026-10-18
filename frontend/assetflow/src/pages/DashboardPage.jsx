import { useState, useEffect } from "react";
import GridCrads from "../components/dashboard/GridCards";
import { useTheme } from "../context/ThemeContext";
import LoadingPage from "../components/global/LoadingPage/LoadingPage";

const urlBuildings = 'http://127.0.0.1:8080/api/v1/buildings';

export default function DashboardPage() {
  const [buildings, setBuildings] = useState();
  const [load, setLoad] = useState(true);
  const { theme } = useTheme();

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
      <div className="mb-4" data-bs-theme={theme}>
        <h2 className="mb-0">Dashboard</h2>
        <p className="text-body-secondary mb-0">Fabbricati, reparti e macchine</p>
      </div>

      <GridCrads itemsList={buildings} />
    </>
  )
}