import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function A_Login() {

    const redirect = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('uid')) {
            redirect('/a_dashborad');
        }
    }, []);


    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;

        if (formvalue.email == "") {
            toast.error('Email Field is required');
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
                if (res_arr.data[0].password == formvalue.password) {
                    if (res_arr.data[0].status == "Unblock") {
                        localStorage.setItem('uid', res_arr.data[0].id);
                        localStorage.setItem('uname', res_arr.data[0].name);

                        toast.success('Login Success');
                        return redirect('/a_dashborad');
                    }
                    else {
                        toast.error('Account Blocked Contact SHOP');
                        setFormvalue({ ...formvalue, email: "", password: "" });
                        return false;
                    }
                }
                else {
                    toast.error('Password does not match');
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    return false;
                }
            }
            else {
                toast.error('Email does not Exist');
                setFormvalue({ ...formvalue, email: "", password: "" });
                return false;
            }
        }
    }





    return (
        <div style={{
            backgroundImage: "URL('https://img.freepik.com/free-photo/crop-plate-with-vegetable-salad_23-2147753679.jpg')", height: 775,
            backgroundSize: 'cover'
        }} >
            <>
                < Helmet >

                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </Helmet >

                <div className='d-flex text-light ' data-aos="fade-up" data-aos-duration="1500">
                    <table style={{ height: 650, width: 650, marginTop: 10 }} className='mx-auto '>
                        <tbody><tr>
                            <td>
                                <center>
                                    <br /><table style={{ backgroundImage: "URL('https://images.unsplash.com/photo-1517178313064-9447953f46e8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGZvb2R8ZW58MHx8MHx8fDA%3D' )", height: 380, width: 380, borderRadius: 50, }}>
                                        <tbody><tr>
                                            <td>
                                                <form method="post" onSubmit={submitHandel} style={{ height: 500, }}>
                                                    <center>
                                                        <h1 className='mt-4'>Login</h1>
                                                    </center>
                                                    <br />
                                                    <label style={{ marginLeft: '15%', fontSize: 'larger' }}> User Email :</label> <br />
                                                    <input className='p-2' type="email" onChange={onChangehandel} value={formvalue.email} name='email' placeholder="Enter Your Email" style={{ marginLeft: '20%', height: 30, width: 220, marginTop: 20 }} />
                                                    <br />
                                                    <br />
                                                    <label style={{ marginLeft: '15%', fontSize: 'larger' }}> Password : </label> <br />
                                                    <input className='p-2' type="password" onChange={onChangehandel} value={formvalue.password} name='password' placeholder="Enter Your Password " style={{ marginLeft: '20%', height: 30, width: 220, marginTop: 20 }} />
                                                    <br /><br />
                                                    <input style={{ marginLeft: '15%' }} className="form-check-input" type="checkbox" name="remember" /> Remember me

                                                    <p style={{ marginLeft: '15%' }} className='mt-3 text-white'> Forgot Password : <a href="#">Click Here</a></p>

                                                    <center>
                                                        <button type="submit" className="btn btn-primary mt-1">Submit</button>
                                                    </center>
                                                    <br />
                                                    {/* <p style={{ marginLeft: '10%', color: "white" }}> Create New One account? <b className='text-white' ><NavLink to="/a_signup">Click Here</NavLink></b>
                                                    </p> */}

                                                </form></td>
                                        </tr>
                                        </tbody></table>
                                </center>
                            </td>
                        </tr>
                        </tbody></table>




                </div >


            </>




        </div >
    )
}

export default A_Login