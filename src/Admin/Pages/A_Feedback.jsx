import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function A_Feedback() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }
    }, []);



    return (
        <div style={{ backgroundColor: ("#2372da39"), height: 800 }}>
           
            <A_navbar />

            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>COUSTOMER'S Query</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container mt-5 text-align " data-aos="fade-up" data-aos-duration="1500">

                <table className="table" style={{ backgroundColor: ("#2372da39"), borderRadius: 20, textAlign: "center", fontWeight: 700, color: 'black' }}>
                    <thead>
                        <tr>
                            <td>Firstname</td>
                            <td>Email</td>
                            <td>Subject</td>
                            <td>Message</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>example.com</td>
                            <td>For Staff</td>
                            <td>Please make sure your staff behave properly</td>


                        </tr>

                        <tr>
                            <td>kishan</td>
                            <td>example.com</td>
                            <td>For table</td>
                            <td>Please make sure your Table clean</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div >


    )
}

export default A_Feedback