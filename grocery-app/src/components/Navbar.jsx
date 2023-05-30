import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
    const {numberCart} = useSelector(state=> state)
    const [loginStatus, setLoginStatus] = useState(false)

    useEffect(()=>{
        let token=localStorage.getItem('token')
        if(!token){
            setLoginStatus(false)
        }else{
            setLoginStatus(true)
        }
    }, [loginStatus])

    const onLogoutHandler =()=>{
        localStorage.clear();
        setLoginStatus(false)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Grocery App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      
                       
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>

                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <Link className='btn btn-primary'>Cart <span className="badge badge-light">{numberCart}</span></Link>
                       {
                        loginStatus ? (
                            <Link onClick={onLogoutHandler} className="btn btn-danger">Logout</Link>
                        ): (
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        )
                       }
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar