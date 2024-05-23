import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import A_navbar from '../Components/A_navbar';
import { Helmet } from 'react-helmet';


function A_Profile() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/');
        }
        else {
            fetch();
        }
    }, []);


    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data);
    }


    const [sdata, setsData] = useState({});
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
        console.log(res.data);
        setsData(res.data);
    }


    return (
        <div style={{ backgroundColor: ("#2372da39"), borderRadius: 15 }}>
            
            <A_navbar />
            <div>

                <div className="breadcumb-area text-primary " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>PROFILE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="border" >
                    <div className="container " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39"), borderRadius: 15 }}>
                       
                            <div className="card col-sm-12 col-md-12 col-lg-12  text-dark d-flex" >
                                <center>
                                <div className='col-sm-4 col-md-4 col-lg-4'>
                                        <img src={data.img} alt="" height={250} width={200}/>
                                    </div>
                                <div className="card-body col-sm-8 col-md-8 col-lg-8" data-aos="fade-up" data-aos-duration="3000">
                                    <h3>Name : {data.name} </h3>
                                    <h4 className="card-title">ID : {data.id} </h4>
                                    <h4 className="card-text">Contact : {data.mobile} </h4>
                                        <button data-toggle="modal" data-target="#myModal" onClick={() => redirect('/a_edit_profile/' + data.id)} className="btn btn-primary mt-3">
                                            EDIT PROFILE
                                        </button>
                                    </div>
                                </center>
                            </div>
                       
                    </div>

                </span>

            </div>

        </div>

    )
}

export default A_Profile