import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function A_navbar() {

    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/a_login');
        return false;
    }

    
    return (
        <div data-aos="fade-down" data-aos-duration="1500">

            <Helmet>
                <link href="/Admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="/Admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="/Admin/assets/css/style.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
                <script src="/Admin/assets/js/jquery-1.10.2.js"></script>
                <script src="/Admin/assets/js/bootstrap.js"></script>
                <link href="/Admin/Blog/css/style.css" rel="stylesheet" />
                <link href="/Admin/Blog/css/responsive/responsive.css" rel="stylesheet" />
                {/* <script src="Admin/assets/js/custom.js"></script> */}
            </Helmet>

            {/* LOGO HEADER START*/}
            <div className="set-radius-zero " >
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" href="index.html">
                            <img src="/Admin/assets/img/logo.png" />
                        </NavLink>
                    </div>
                    <div className="right-div">
                        <NavLink to="javascript:void(0)" onClick={userlogout} className="btn btn-danger pull-right">LOG OUT</NavLink>
                    </div>
                </div>
            </div>
            {/* LOGO HEADER END*/}

            {/* NAVBAR */}
            <section className="menu-section set-radius-zero text-light mt-3 " style={{ backgroundColor: ("#3072c83a") }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="navbar-collapse collapse ">
                                <ul id="menu-top" className="nav">
                                    <li><NavLink to="/a_dashborad" active >DASHBOARD</NavLink></li>
                                    <li>
                                        <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee
                                        </NavLink>
                                        <ul className="dropdown-menu " role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink to="/a_employee">Add Employee
                                            </NavLink></li>
                                            <li role="presentation"><NavLink to="/a_manege_emp">Manage Employee</NavLink>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown"> Categories
                                        </NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink to="/a_add_cat">Add Cat
                                            </NavLink></li>
                                            <li role="presentation"><NavLink to="/a_manage_cat">Manage cat</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown"> Menu
                                        </NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink to="/a_addmenu">Add Menu
                                            </NavLink></li>
                                            <li role="presentation"><NavLink to="/a_manege_menu">Manage Menu</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li><NavLink to="/a_feedback">FeedBack</NavLink></li> */}



                                    <li>
                                        <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown"> Blog
                                        </NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink to="/a_add_blog">Add Blog
                                            </NavLink></li>
                                            <li role="presentation"><NavLink to="/a_manage_blog">Manage Blog</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <NavLink href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown"> Manage
                                        </NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation">
                                                <NavLink to="/a_manage_user">Manage User</NavLink>
                                            </li>
                                            <li role="presentation"><NavLink to="/a_manage_employee">Manage Employee</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><NavLink to="/a_onlinetable">Table_Book</NavLink></li>
                                    <li><NavLink to="/a_contact">Contact</NavLink></li>
                                    {/* <li><NavLink to="/a_profile">Profile</NavLink></li> */}




                                    {(() => {
                                        if (localStorage.getItem('uid')) {
                                            return (
                                                <>
                                                    <NavLink to="/a_profile">
                                                        <i className="fa fa-user mx-1 text-dark" aria-hidden="true" />
                                                        <span className="mx-1 text-dark"> {localStorage.getItem('uname')}</span>
                                                      
                                                    </NavLink>
                                                    {/* <a href="javascript:void(0)" onClick={userlogout}>
                                                        <span className="btn btn-primary nav-item nav-link mx-3 bg-danger ">
                                                            Log out
                                                        </span>
                                                    </a> */}
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <NavLink to="/log_in" className="btn btn-primary py-2 px-4 nav-item nav-link">
                                                    Log In
                                                </NavLink>

                                            )
                                        }
                                    })()}


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default A_navbar