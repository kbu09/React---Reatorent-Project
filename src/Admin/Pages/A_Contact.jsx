import React from 'react'
import { Helmet } from 'react-helmet'
import A_navbar from '../Components/A_navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'


function A_Contact() {
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
        const res = await axios.get(`http://localhost:3000/contact`);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contact/${id}`);
        toast.success('Data Delete Successful');

        fetch();
    }


    return (
        <div style={{ backgroundColor: ("#2372da39"), height: 800 }}>


            <A_navbar />

            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>CONTACT</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mt-3 text-light " data-aos="fade-up" data-aos-duration="1500">
                <table className="table  mt-5 "
                    style={{ backgroundColor: ("#2372da39"), borderRadius: 20, textAlign: "center", fontWeight: 700, color: 'black' }}


                >
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Your Name</td>
                            <td>Your Email</td>
                            <td>Subject</td>
                            <td>Message</td>
                            <td>Delete</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <tr style={{ backgroundColor: ("#2372da39"), color: 'black' }} key={index} >
                                        <td >{value.id}</td>
                                        <td>{value.YourName}</td>
                                        <td>{value.YourEmail}</td>
                                        <td>{value.Subject}</td>
                                        <td>{value.Message}</td>
                                        <td> <button className='btn btn-danger p-3' onClick={() => deleteHandel(value.id)}>Delete</button>  </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default A_Contact