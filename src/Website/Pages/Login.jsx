import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';


function Login() {

    const redirect = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('userid')) {
            redirect('/');
        }
    }, []);



    const [formvalue, setFormvalue] = useState({
        id: "",
        email: "",
        password: ""

    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;

        if (formvalue.email == "") {
            toast.error('Your Email is Required');
            // ans = false;
            return false;
        }

        if (formvalue.password == "") {
            toast.error('Your Password is Required');
            // ans = false;
            return false;
        }

        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.get(`http://localhost:3000/user_signup?email=${formvalue.email}`);
            console.log(res);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock") {
                        localStorage.setItem('userid', res.data[0].id);
                        localStorage.setItem('username', res.data[0].name);

                        toast.success('Login Success');
                        return redirect('/');
                    }
                    else {
                        toast.error('Account Blocked Contact SHOP');
                        setFormvalue({ ...formvalue, email: "", password: "" });
                        return false;
                    }
                }
                else {
                    toast.error('Password does not match');
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    return false;
                }
            }
            else {
                toast.error('Email does not Exist');
                setFormvalue({ ...formvalue, email: "", password: "" });
                return false;
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
                        <h1 className="display-3 text-white mb-3 animated slideInDown">LOG IN</h1>

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
                                                    <input type="email" className="form-control" onChange={onchangehandel} value={formvalue.email} name='email' id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="password" className="form-control" onChange={onchangehandel} value={formvalue.password} name='password' id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Password</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">LOG IN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>

                        <div className=" container text-center wow fadeInUp mt-5" data-wow-delay="0.1s">

                            <h5 className="mb-5">For Log In Detalis Please Click Here
                                <Link to="/signup" ><i class="fa-solid fa-right-to-bracket mx-2"></i>
                                </Link>

                            </h5>


                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login