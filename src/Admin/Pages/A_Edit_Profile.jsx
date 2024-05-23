import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import A_navbar from '../Components/A_navbar';

function A_Edit_Profile() {

    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            editdata();
        }
        else {
            redirect('/a_login');
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        img: "",
        email: "",
        mobile: ""

    });

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('Photo Field is required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required');
            ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/admin/${id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({
                    ...formvalue, id: "",
                    name: "",
                    img: "",
                    email: "",
                    mobile: ""
                });
                redirect('/a_profile');
                toast.success('Data Update Success');
            }
        }
    }

    return (
        < div style={{ backgroundColor: ("#2372da39") }}>
            <A_navbar />


            <div >
                <div className="breadcumb-area text-primary" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(/Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2> EDIT PROFILE </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className='p-5 mt-5 mb-5  col-sm-12 col-md-12 col-lg-12 ' style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }} >
                    <form action="/action_page.php" method="post" onSubmit={submitHandel} className='col-sm-12 col-md-12 col-lg-12' >

                        <div className="mt-1  ">
                            <label >Name:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.name} className="form-control" id="email" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mt-3  ">
                            <label htmlFor="email" className="form-label">Photo ID:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.img} className="form-control" id="email" placeholder="Enter Images" name="img" />
                        </div>
                        <div className="mt-3  ">
                            <label >Email:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mt-3  ">
                            <label >Mobile Number:</label>
                            <input type="number" onChange={onChangehandel} value={formvalue.mobile} className="form-control " id="email" placeholder="Enter Mobile Number" name="mobile" />
                        </div>
                        <button type="" className="btn btn-primary mt-1 mx-1 mt-5" onClick={submitHandel}>Update</button>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default A_Edit_Profile