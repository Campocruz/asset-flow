import { useTheme } from "../../context/ThemeContext";

export default function Footer() {

  const { theme } = useTheme();

  return (
    <>
      <footer className="container" data-bs-theme={theme}>
        <div className="row justify-content-around">
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li><a href="">Primo</a></li>
              <li><a href="">Secondo</a></li>
              <li><a href="">Terzo</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}