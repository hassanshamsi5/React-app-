import { useState } from "react"
import { useNavigate } from "react-router-dom"
function App() {
    const navigate = useNavigate()
const [email,setEmail]=useState("")
const [password,setpassword]=useState("")
const login = ()=>{
    let user ={
        email,
        password
    }
   localStorage.setItem("user",JSON.stringify(user))
   navigate('../Header')
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"  value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button onClick={login} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App