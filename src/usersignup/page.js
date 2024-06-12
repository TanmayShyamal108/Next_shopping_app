"use client"

import React from 'react'
import { useFormik } from 'formik'

const page = () => {
    const formik = useFormik({
        initialValues: {
            UserId: '',

            Password: '',
            Email: '',
            Mobile: ''
        },
        onSubmit: (user) => {
            console.log(user);
        }
    })
    return (
        <div className="container-fluid bg-black text-white ">
            <div className="d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>

                <form onSubmit={formik.handleSubmit} className='border border-danger rounded p-2'>
                    <h4>Register User</h4>
                    <dl>
                        <dt>User Id</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="UserId" /></dd>


                        <dt>Password</dt>
                        <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                        <dt>Email</dt>
                        <dd><input type="email" onChange={formik.handleChange} name="Email" /></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    </dl>
                    <button className="btn btn-primary">Register</button>

                </form>
            </div>
        </div>
    )
}

export default page