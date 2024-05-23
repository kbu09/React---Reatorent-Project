import React from 'react'
import { Helmet } from 'react-helmet'
import A_navbar from '../Components/A_navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


function A_Manage_Employee() {

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
        const res = await axios.get(`http://localhost:3000/admin`);
        setData(res.data);
    }



    const Status_Handel = async (id) => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
        if (res.data.status == "Block") {
            const res1 = await axios.patch(`http://localhost:3000/admin/${id}`, { status: "Unblock" });
            if (res1.status == 200) {
                console.log(res.data);
                toast.success('User Unblock ');
                fetch();

            }
        }
        else {
            const res1 = await axios.patch(`http://localhost:3000/admin/${id}`, { status: "Block" });
            if (res1.status == 200) {
                localStorage.removeItem('uid');
                localStorage.removeItem('uname');
                console.log(res.data);
                toast.success('User block');
                fetch();
            }
        }

    }


    return (
        <div style={{ backgroundColor: ("#2372da39"), height: 800 }}>


            <A_navbar />

            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>MANAGE EMPLOYEE </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mt-3 text-light" data-aos="fade-up" data-aos-duration="1500">
                <table className="table  mt-5 "
                    style={{ backgroundColor: ("#2372da39"), borderRadius: 20, textAlign: "center", fontWeight: 700, color: 'black' }}
                >
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Your Name</td>
                            <td> Your Email</td>
                            <td>Contact</td>
                            <td>Cureent Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <tr style={{ backgroundColor: ("#2372da39"), color: 'black' }} key={index} >
                                        <td >{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td> <button className='btn btn-danger p-3' onClick={() => Status_Handel(value.id)}> {value.status}</button>  </td>
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




export default A_Manage_Employee
