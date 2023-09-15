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


//ek website hai example www.example.pk wo nae chalti lekin agar example.pk likhty hain tu chal jati hai solve the problem
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
                <Link className="nav-link active" to="/TextForm">
                  TextForm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Api">
                  API
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Todo">
                  TodoApp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/File">
                  File
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login page firebase
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/News" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <Link className="nav-link" to="/Color">
                  change color
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Data">
                  Latitude,longitude
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calculator">
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Calendar">
                  Calendar
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

