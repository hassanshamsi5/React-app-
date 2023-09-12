// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useParams, useLocation, Outlet, useSearchParams } from "react-router-dom";
function Header(props) {
  // const { id } = useParams()
  // const { state } = useLocation()
  // const [user, setUser] = useState({})
  // let [searchParams, setSearchParams] = useSearchParams()
  // console.log("search".searchParams.get("user"));

  // useEffect(() => {
  //   let userData = localStorage.getItem("user")
  //   setUser(JSON.parse(userData))
  // }, [])
  // const navigate = useNavigate()
  // const login = () => {
  //   navigate('../profile/HassanShamsi/me')
  // }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* Navbar ({user?.email}) */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <button className="btn btn-primary" onClick={login}>Login</button> */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/api">
                  API
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  TodoApp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/file">
                  File
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login page firebase
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/news" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News
          </Link>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/news">News</Link></li>
                  <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/General">General</Link></li>
                  <li><Link className="dropdown-item" to="/Entertaiment">Entertaiment</Link></li>
                  <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/color">
                  change color
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data">
                  Latitude,longitude
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cal">
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex rounded">
              <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;


