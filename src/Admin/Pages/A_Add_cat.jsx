import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


function A_Add_cat() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }
        // else {
        //     fetch();
        // }
    }, []);

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        Menu_Type: "",
        Menu_img: "",

    });




    function vali() {
        var ans = true;
        if (formvalue.Menu_Type == "") {
            toast.error('Menu Type is Required');
            ans = false;
            return false;
        }
        if (formvalue.Menu_img == "") {
            toast.error('Menu Images is Required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            console.log(res);
            if (res.status == 201) {

                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    Menu_Type: "",
                    Menu_img: "",


                });
            }
        }
    }

    return (

        <div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />
            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>ADD CATEGORIES</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: ("#2372da39") }}>
                <div className="col-md-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }} >
                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>


                        <form role="form" onSubmit={submitHandel} method='post' >
                            <div className="form-group">
                                <label>Enter CATEGORIES Type </label>
                                <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.Menu_Type} name='Menu_Type' placeholder='Enter Menu Type' />
                            </div>
                            <div className="form-group">
                                <label> CATEGORIES Images </label>
                                <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.Menu_img} name='Menu_img' placeholder='Enter Menu Images' />
                            </div>
                            <button type="submit" className="btn btn-success mx-4">ADD </button>
                        </form>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default A_Add_cat

