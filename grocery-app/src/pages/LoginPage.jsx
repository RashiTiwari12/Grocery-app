
const LoginPage =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h2>
                            Login
                        </h2>
                        <hr/>
                        <form>
                            <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="text" className="form-control"/>
                            </div>
                            

                            <input type="submit" value="Login" className="btn btn-primary btn-block" />
                        </form>
                        <br/>
                        <p className="text-center">
                            Already Registerd <a href="/register">Click here</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3"> </div>
        </div>
    )
}
export default LoginPage