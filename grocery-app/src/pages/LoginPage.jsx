import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import Endpoints from '../api/Endpoints'

const LoginPage = () => {

    const [requestResponse, setRequestResponse]=useState({
        textMessage: "",
        alertClass: "",
        
    })
    const initialValues = {
        email: '',
        password: ''
    };
    const onSubmit = (values) => {
       axios.post(Endpoints.LOGIN_URL, values)    
       .then(
        (response) => {
    //    console.log(response.data)
    setRequestResponse({
        textMessage: "login successfully",
        alertClass: "alert alert-success"
    });
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
        }, (error)=>{
        //  console.log(error.response.data.message)
        setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger" 
        })
        }
       )
       .catch(error => console.log(error))
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email must be a valid email'),
        password: Yup.string().required('password is required').min(6, 'password must be at least 6 characters')
    });
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
                            Login
                        </h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            >
                            {
                                (formik) => {
                                    return (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field type="text" name="email"className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                                                 />
                                                <ErrorMessage name="email">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                     )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Field type="password" name="password"className={formik.touched.password && formik.errors.password  
                                            ? 'form-control is-invalid':  'form-control'}
                                                />
                                                <ErrorMessage name="password">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                 
                                                    )}
                                                </ErrorMessage>
                                            </div>


                                            <Field type="submit" name="login" value="Login" className="btn btn-primary btn-block" />
                                        </Form>
                                    )
                                }
                            }

                        </Formik>
                        <br />
                        <p className="text-center">
                            New user <a href="/register">Click here</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3"> </div>
        </div>
    )
}
export default LoginPage