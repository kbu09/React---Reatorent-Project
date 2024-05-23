import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const redirect = useNavigate();


    useEffect(() => {

        if (localStorage.getItem('userid')) {
            redirect('/');
        }
    }, []);



    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        contact: "",
        password: "",
        status: ""

    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Your Name is Required');
            // ans = false;
            return false;
        }

        if (formvalue.email == "") {
            toast.error('Your Email is Required');
            // ans = false;
            return false;
        }
        if (formvalue.contact == "") {
            toast.error('Contact is Required');
            // ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('Password is Required');
            // ans = false;
            return false;
        }

        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {

            const res_arr = await axios.get(`http://localhost:3000/user_signup?email=${formvalue.email}`);
            console.log(res_arr);
            if (res_arr.data.length > 0) {
                toast.error('Email id already Exist !');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    name: "",
                    email: "",
                    contact: "",
                    password: "",
                    status: ""

                });
            }




            else {
                const res = await axios.post(`http://localhost:3000/user_signup`, formvalue);
                console.log(res);

                if (res.status == 201) {
                    // alert('Data Add Successful');
                    toast.success("DATA added sucees");
                    setFormvalue({
                        ...formvalue,
                        id: "",
                        name: "",
                        email: "",
                        contact: "",
                        password: "",
                        status: ""


                    });
                }
            }
        }
    }



    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Helmet>
            <Header />
            <div>
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">SIGN UP</h1>

                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">For Reach Us</h5>
                            <h1 className="mb-5">Please Fill Your Detals</h1>
                        </div>
                        <div className="row g-4 ">
                            <div className="col-md-10 mt-5 mx-auto">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <form onSubmit={submitHandel} method='post'>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" onChange={onchangehandel} value={formvalue.name} name='name' id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" onChange={onchangehandel} value={formvalue.email} name='email' id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" onChange={onchangehandel} value={formvalue.contact} name='contact' id="subject" placeholder="Subject" />
                                                    <label htmlFor="subject">Contact</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="password" className="form-control" onChange={onchangehandel} value={formvalue.password} name='password' id="subject" placeholder="Subject" />

                                                    <label htmlFor="message">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">SIGN UP</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>

                        <div className=" container text-center wow fadeInUp mt-5" data-wow-delay="0.1s">

                            <h4 className="mb-5">For Log In Detalis Click Here
                                <Link to="/log_in" ><i class="fa-solid fa-right-to-bracket mx-2"></i>
                                </Link>

                            </h4>


                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Signup