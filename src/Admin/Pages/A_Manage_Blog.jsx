import React from 'react'

import A_navbar from '../Components/A_navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function A_Manage_Blog() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }
        else {
            fetch();
        }
    }, []);

    // useEffect(() => {
    //     fetch();
    // }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`);
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        blog: "",
        skim: "",
        skimdetails: "",
        skimImg: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setFormvalue(res.data);
    }

    const viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setFormvalue(res.data);
    }

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.blog == "") {
            toast.error('Blog is Required');
            // ans = false;
            return false;
        }

        if (formvalue.skim == "") {
            toast.error('Your Skim is Required');
            // ans = false;
            return false;
        }
        if (formvalue.skimdetails == "") {
            toast.error('Skim Details  is Required');
            // ans = false;
            return false;
        }
        if (formvalue.skimImg == "") {
            toast.error('Skim Images is Required');
            // ans = false;
            return false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.patch(`http://localhost:3000/blog/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                toast.success('Data Update Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    blog: "",
                    skim: "",
                    skimdetails: "",
                    skimImg: ""
                });
                fetch();
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
                                <h2>BLOG PAGE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container '>
                <div className='row'>
                    <div className="p-5 row">
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <div className="container gap-2 text-dark p-4 mt-3 col-sm-4 col-md-4 col-lg-4 " data-aos="fade-up" data-aos-duration="1500" >

                                        <div className="card p-4" style={{ maxHeight: 650, borderRadius: 35, }} >
                                            <img className="card-img-top text-dark" src={value.skimImg} alt="Card image" style={{ height: 250, borderRadius: 35, backgroundColor: 'transparent' }} />
                                            <div className="">
                                                <h4 className="card-title">{value.blog}</h4>
                                                <h4 className="card-title">{value.skim}</h4>
                                                <p className="card-text mt-3">{value.skimdetails}</p>
                                                <center className='d-flex'>
                                                    <button className='btn btn-danger p-2   mt-3 mx-1' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                    <button className='btn btn-success p-2  w-25 mt-3  mx-2' onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal">EDIT</button>
                                                    <button className='p-2 bg-success  text-white btn btn-success  w-25 mt-3  mx-2' onClick={() => viewdata(value.id)} data-bs-toggle="offcanvas" data-bs-target="#demo">View</button>
                                                </center>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                        {/* //model   edit */}

                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h4 className="modal-title">EDIT CATEGORY</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    <div className="modal-body">
                                        <form role="form" method='post' >
                                            <div className="form-group">
                                                <label>Enter Blog Name</label>
                                                <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.blog} name='blog' placeholder='Enter Blog Name' />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Skim</label>
                                                <textarea className="form-control" onChange={onchangehandel} value={formvalue.skim} name='skim' type="text" placeholder='Enter Skim' />
                                            </div>
                                            <div className="form-group">
                                                <label>Skim Details</label>
                                                <textarea className="form-control" type="text" onChange={onchangehandel} value={formvalue.skimdetails} name='skimdetails' placeholder='Enter Item Skim' />
                                            </div>
                                            <div className="form-group">
                                                <label>Add Skim IMG</label>
                                                <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.skimImg} name='skimImg' placeholder='Enter Skim IMG' />
                                            </div>

                                        </form>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={submitHandel} data-bs-dismiss="modal" >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* //Card    view  */}

                        <div className="offcanvas offcanvas-start" id="demo" style={{ width: 400 }}>
                            <div className="offcanvas-header">
                                <h1 className="offcanvas-title"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                            </div>
                            <div className="offcanvas-body d-flex">
                                <div className="container mt-3 d-flex" style={{ width: 350 }}>
                                    <div className="card d-flex p-3" >
                                        <img className="card-img-top" src={formvalue.skimImg} alt="Card image" style={{ width: '260px', height: '330px', padding: 10 }} />
                                        <h2>{formvalue.blog}</h2>
                                        <p className="card-text">{formvalue.skimdetails}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_Manage_Blog