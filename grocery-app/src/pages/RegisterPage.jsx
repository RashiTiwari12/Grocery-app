import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import Endpoints from '../api/Endpoints';
const RegisterPage = () => {

    const [ requestResponse, setRequestResponse] =useState({
        textMessage: '',
        alertClass: ''
})
    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: '',

    }

    const onSubmit = (values) => {
     axios.post(Endpoints.REGISTER_URL, values)
     .then((respone) =>{
setRequestResponse({
    textMessage: respone.data.message,
    alertClass: 'alert alert-success'
})
     }, (error)=>{
        setRequestResponse({
            textMessage: error.respone.data.message,
            alertClass: 'alert alert-danger'
        })
     })
     .catch(error => console.log(error))
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required'),
        email: Yup.string().required('email is required').email('email must be a valid email'),
        mobile: Yup.string().required('mobile is required'),
        password: Yup.string().required('password is required').min(6, 'password must be at least 6 characters')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <h2>
                            register
                        </h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text"
                                className={formik.touched.firstName && formik.errors.firstName
                                    ? "form-control is-invalid" : "form-control"}   
                                 name='firstName' 
                                value={formik.values.firstName}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur} />
                                 {formik.touched.firstName && formik.errors.firstName ? (
                                    <small className='text-danger'>{formik.errors.firstName}</small>
                                 ) : null }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                 className={formik.touched.email && formik.errors.email
                                    ? "form-control is-invalid" : "form-control"}   
                                  name='email' 
                                value={formik.values.email}
                                 onChange={formik.handleChange}
                                  onBlur={formik.handleBlur} />
                                 {formik.touched.email && formik.errors.email ? (
                                    <small className='text-danger'>{formik.errors.email}</small>
                                 ) : null }
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mobile No.</label>
                                <input type="number"
                                 className={formik.touched.mobile && formik.errors.mobile
                                    ? "form-control is-invalid" : "form-control"}   
                                  name='mobile' 
                                value={formik.values.mobile}
                                 onChange={formik.handleChange} 
                                 onBlur={formik.handleBlur} />
                                 {formik.touched.mobile && formik.errors.mobile ? (
                                    <small className='text-danger'>{formik.errors.mobile}</small>
                                 ) : null }
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                className={formik.touched.password && formik.errors.password
                                    ? "form-control is-invalid" : "form-control"}   
                                name='password' 
                                value={formik.values.password}
                                 onChange={formik.handleChange} 
                                 onBlur={formik.handleBlur} />
                                 {formik.touched.password && formik.errors.password ? (
                                    <small className='text-danger'>{formik.errors.password}</small>
                                 ) : null }
                            </div>      
                            

                            <input type="submit" value="Register" className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registerd <a href="/login">Click here</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3"> </div>
        </div>
    )
}
export default RegisterPage