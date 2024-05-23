import React from 'react'
import A_navbar from '../Components/A_navbar'
import HelmetExport, { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


function A_Add_Blog() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }

    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        blog: "",
        skim: "",
        skimdetails: "",
        skimImg: ""
    });

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


    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/blog`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    blog: "",
                    skim: "",
                    skimdetails: "",
                    skimImg: ""
                });
            }
        }
    }



    return (
        <>
                  <A_navbar />
            <div data-aos="fade-down" data-aos-duration="1500"> 
                <div className="breadcumb-area text-primary" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>ADD BLOG </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da6f") }}>


                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>
                        <form role="form" onSubmit={submitHandel} method='post'>
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



                            <button type="submit" className="btn btn-success mx-3 mt-3">ADD </button>
                            <button type="reset" className="btn btn-primary mx-3 mt-3">Reset</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default A_Add_Blog