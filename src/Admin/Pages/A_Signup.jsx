import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function A_Signup() {

    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            redirect('/a_dashborad');
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        img: "",
        email: "",
        mobile: "",
        password: "",
        status: ""
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required');
            ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('Password Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
            console.log(res_arr);
            if (res_arr.data.length > 0) {
                toast.error('Email id already Exist !');
                setFormvalue({
                    ...formvalue,
                    id: "",
                    name: "",
                    img: "",
                    email: "",
                    mobile: "",
                    password: "",
                    status: ""
                });
            }

            else {
                const res = await axios.post(`http://localhost:3000/admin`, formvalue);
                console.log(res);
                if (res.status == 201) {
                    toast.success('Data Add Success Please Go back & Login');
                    setFormvalue({
                        ...formvalue,
                        id: "",
                        name: "",
                        img: "",
                        email: "",
                        mobile: "",
                        password: "",
                        status: ""
                    });
                }
            }
        }
    }

    return (
        <>


            <div className='pt-5' style={{ backgroundImage: "URL('https://img.freepik.com/free-photo/crop-plate-with-vegetable-salad_23-2147753679.jpg')", backgroundSize: 'cover', height: 775 }} >

                <div className='p-5 w-25 mx-auto ' data-aos="fade-up" data-aos-duration="1500" style={{
                    backgroundImage: "URL('https://www.aquapazza-boston.com/news/wp-content/uploads/2023/10/shutterstock_1923031190.jpg')",
                    backgroundColor: 'rgb(172, 137, 179)', height: 640, width: 650, borderRadius: 40, marginTop: 10
                }}>
                    <form action="/action_page.php" method="post" onSubmit={submitHandel}>
                        <center> <h1>Sign Up</h1></center>
                        <div className="mt-1">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.name} className="form-control" id="email" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Photo ID:</label>
                            <input type="text" onChange={onChangehandel} value={formvalue.img} className="form-control" id="email" placeholder="Enter Images" name="img" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Mobile Number:</label>
                            <input type="tel" onChange={onChangehandel} value={formvalue.mobile} className="form-control " id="email" placeholder="Enter Mobile Number" name="mobile" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="pwd" className="form-label"> Password:</label>
                            <input type="password" onChange={onChangehandel} value={formvalue.password} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-check mb-3 mt-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-1 mx-1">Submit</button>

                        <Link to="/a_login"> <button type="submit" className="btn btn-primary mt-1 mx-5"> LOG IN </button> </Link>

                    </form>
                </div >
            </div>
        </>
    )
}

export default A_Signup