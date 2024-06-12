"use client"
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";



import * as yup from "yup";

export default function Page() {


    const route = useRouter();
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <Formik initialValues={{ UserId: "", Password: "" }}
                    validationSchema={yup.object({ UserId: yup.string().required("UserId Required"), Password: yup.string().required("Password Required") })}
                    onSubmit={(adminDetails) => {
                        axios.get("/api/adminapi")
                            .then(response => {
                                console.log(response.data)
                                let admin = response.data.find(() => name === adminDetails.UserId);
                                if (admin) {
                                    if (admin.password === adminDetails.Password) {
                                        route.push("/adimndashboard");

                                    } else {
                                        alert("Invalid Password");
                                    }
                                } else {
                                    alert("Access Denied!\nInvalid Credentials");
                                }
                            })


                    }}>
                    <Form className="bg-black p-5 text-white rounded-4">
                        <h2 className="bi bi-person-fill mb-2 text-primary"> Admin Login</h2>
                        <dl className="my-4">
                            <dt className="mb-2">User Id</dt>
                            <dd><Field type="text" className="form-control" name="UserId" placeholder="Enter User Id" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserId" /></dd>
                            <dt className="mt-4">Password</dt>
                            <dd><Field type="text" className="form-control mt-2" name="Password" placeholder="Enter Password" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Password" /></dd>
                        </dl>
                        <div className="mt-5">
                            <button type="Submit" className="btn btn-primary mx-2">Login</button>
                            <Link href="/Home"><button className="btn btn-danger mx-2">Cancle</button></Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}