// import { Link } from "react-router-dom";
// function Header(props) {
//   return (
//     <div>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Navbar
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Link
//                 </Link>
//               </li>
//             </ul>
//             <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
//               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                 <label className="form-check-label" htmlFor ="flexSwitchCheckDefault">Enable DarkMode</label>
//             </div>
//           </div>
//         </div>
//       </nav>

//     </div>
//   )
// }

// export default Header;

import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li className="nav-item">
                <Link className="nav-link" to="/alert">

                </Link>
              </li>
            </ul>
            <div className="d-flex rounded">
              <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
            </div>
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
