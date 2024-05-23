import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header';


function User_profile() {
    
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('userid'))) {
            redirect('/');
        }
        else {
            fetch();
        }
    }, []);


    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user_signup/${localStorage.getItem('userid')}`);
        console.log(res.data);
        setData(res.data);
       
    }
    return (

        <div>
           

            <Header />

            <div>
                <div class="w-auto bg-dark container" style={{ height: 85 }}>
                </div>



                <div className=" text-primary wow fadeIn" data-wow-delay="0.1s"
                    style={{
                        backgroundImage: 'url(data:image/jpeg;base64,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)',
                        height: 200, backgroundSize: 'contain'
                    }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className=" text-center text-white">
                                    <h1 className=" text-white">   My Profile</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span class="border  ">
                    <div className="container wow fadeInDown" data-wow-delay="0.1s">
                        <div className="container mt-3 border-2 row  ">
                            <div className="card col-sm-12 col-md-12 col-lg-12 bg-info text-white">
                                <center>
                                    <div className="card-body">
                                        <h3>Name : {data.name} </h3>
                                        <h4 className="card-title">ID : {data.id} </h4>
                                        <h4 className="card-text">Contact : {data.contact} </h4>
                                        <button data-toggle="modal" data-target="#myModal" onClick={() => redirect('/manage_profile/' + data.id)} className="btn btn-primary">
                                            Edit Profile
                                        </button>

                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>

                </span>


            </div>

        </div>

    )
}



export default User_profile