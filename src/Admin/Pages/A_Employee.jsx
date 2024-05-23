import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet'

import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function A_Employee() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        EnterName: "",
        EnterEmail: "",
        ContactNumber: "",
        EnterMessage: "",
        AttachFile: "",
        Role: ""

    });


    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function vali() {
        var ans = true;
        if (formvalue.EnterName == "") {
            toast.error('Your Name is Required');
            // ans = false;
            return false;
        }

        if (formvalue.EnterEmail == "") {
            toast.error('Your Email is Required');
            // ans = false;
            return false;
        }
        if (formvalue.ContactNumber == "") {
            toast.error('Contact Number is Required');
            // ans = false;
            return false;
        }
        if (formvalue.EnterMessage == "") {
            toast.error('Enter Message is Required');
            // ans = false;
            return false;
        }
        if (formvalue.AttachFile == "") {
            toast.error('Attach File is Required');
            // ans = false;
            return false;
        }
        if (formvalue.Role == "") {
            toast.error('Role is Required');
            // ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/employee`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    EnterName: "",
                    EnterEmail: "",
                    ContactNumber: "",
                    EnterMessage: "",
                    AttachFile: "",
                    Role: ""

                });
            }
        }
    }

    return (
        <div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />
            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>ADD AN EMPlOYEE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: ("#2372da39") }}>
                <div className="col-md-12 p-5" data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }} >


                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>
                        <form role="form" onSubmit={submitHandel} method='post' >
                            <div className="form-group">
                                <label>Enter Full Name</label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.EnterName} name='EnterName' type="text" placeholder='Enter Employee Name' />
                            </div>
                            <div className="form-group">
                                <label>Enter Email</label>
                                <input className="form-control" type="email" onChange={onchangehandel} value={formvalue.EnterEmail} name='EnterEmail' placeholder='Enter Employee Email' />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.ContactNumber} name='ContactNumber' type="text" placeholder='Enter Employee Number' />
                            </div>
                            <div className="form-group">
                                <label>Enter Message</label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.EnterMessage} name='EnterMessage' type="text" style={{ minHeight: 100 }} placeholder='Enter Msg' />
                            </div>
                            <div className="form-group">
                                <label>Attach IMG </label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.AttachFile} name='AttachFile' type="url" placeholder='Add Employee IMG' />
                            </div>

                            <div className="form-group">
                                <label >For Role </label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.Role} name='Role' type="text" placeholder='Add Employees Role' />
                            </div>
                            <button type="submit" className="btn btn-success mx-4">ADD </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default A_Employee

