import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function A_AddMenu() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }

    }, []);

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        Menu_id: "",
        EnterDishName: "",
        EnterPrice: "",
        ItemDetails: "",
        ItemImg: "",

    });




    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.Menu_id == "") {
            toast.error(' Menu Type is Required');
            // ans = false;
            return false;
        }
        if (formvalue.EnterDishName == "") {
            toast.error(' Dish Name is Required');
            // ans = false;
            return false;
        }

        if (formvalue.EnterPrice == "") {
            toast.error(' Price is Required');
            // ans = false;
            return false;
        }

        if (formvalue.ItemDetails == "") {
            toast.error('Item Details is Required');
            // ans = false;
            return false;
        }
        if (formvalue.ItemImg == "") {
            toast.error('Item Img File is Required');
            // ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/menu`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success('Data Add Successful');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    Menu_id: "",
                    EnterDishName: "",
                    EnterPrice: "",
                    ItemDetails: "",
                    ItemImg: "",
                });
            }
        }
    }

    return (
        < div style={{ backgroundColor: ("#2372da39") }} >
            <A_navbar />
            <div style={{ backgroundColor: ("#2372da39") }} data-aos="fade-down" data-aos-duration="1500">
                <div className="breadcumb-area text-primary" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>ADD MENU</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className="col-md-12 p-5" style={{ backgroundColor: ("#2372da6f") }}>
                    <div data-aos="fade-up" data-aos-duration="1500" className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50, }}>
                        <form role="form" onSubmit={submitHandel} method='post'>
                            <div className="form-group">
                                <div> <label>Menu Categorties</label></div>
                                <select onChange={onchangehandel} value={formvalue.Menu_id} name="Menu_id" className="form-control"  >
                                    <option value="">Select MENU TYPE</option>
                                    {
                                        data && data.map((value) => {
                                            return (
                                                <option>{value.Menu_Type}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="form-group">
                                <label>Enter Dish Name</label>
                                <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.EnterDishName} name='EnterDishName' placeholder='Enter Dish Name' />
                            </div>
                            <div className="form-group">
                                <label>Enter Price</label>
                                <input className="form-control" onChange={onchangehandel} value={formvalue.EnterPrice} name='EnterPrice' type="text" placeholder='Enter Price' />
                            </div>
                            <div className="form-group">
                                <label>Item Details</label>
                                <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.ItemDetails} name='ItemDetails' placeholder='Enter Item Details' />
                            </div>
                            <div className="form-group">
                                <label>Add IMG</label>
                                <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.ItemImg} name='ItemImg' placeholder='Enter Item IMG' />
                            </div>
                            <button type="submit" className="btn btn-success mx-3 mt-3">ADD </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_AddMenu