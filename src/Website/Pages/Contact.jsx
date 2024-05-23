import React from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import axios from 'axios';
import { useState } from 'react'
import { toast } from 'react-toastify';



function Contact() {


    const [formvalue, setFormvalue] = useState({
        id: "",
        YourName: "",
        YourEmail: "",
        Subject: "",
        Message: ""

    });

    const onchangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function vali() {
        var ans = true;
        if (formvalue.YourName == "") {
            toast.error('Your Name is Required');
            // ans = false;
            return false;
        }

        if (formvalue.YourEmail == "") {
            toast.error('Your Email is Required');
            // ans = false;
            return false;
        }
        if (formvalue.Subject == "") {
            toast.error('Subject is Required');
            // ans = false;
            return false;
        }
        if (formvalue.Message == "") {
            toast.error('Message is Required');
            // ans = false;
            return false;
        }

        return ans;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res = await axios.post(`http://localhost:3000/contact`, formvalue);
            console.log(res);
            if (res.status == 201) {
                // alert('Data Add Successful');
                toast.success("DATA added sucees");
                setFormvalue({
                    ...formvalue,
                    id: "",
                    YourName: "",
                    YourEmail: "",
                    Subject: "",
                    Message: ""

                });
            }
        }
    }



    return (
        <>
            <Header />
            <div>
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                            <h1 className="mb-5">Contact For Any Query</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <form onSubmit={submitHandel} method='post'>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" onChange={onchangehandel} value={formvalue.YourName} name='YourName' id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" onChange={onchangehandel} value={formvalue.YourEmail} name='YourEmail' id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" onChange={onchangehandel} value={formvalue.Subject} name='Subject' id="subject" placeholder="Subject" />
                                                    <label htmlFor="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" onChange={onchangehandel} value={formvalue.Message} name='Message' placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                                                    <label htmlFor="message">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact