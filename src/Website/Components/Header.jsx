import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Header() {

  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    toast.success('You are Log Out ');
    redirect('/');
    return false;
  }

  return (
    <>
      <Helmet>

        <script src="Website/js/main.js"></script>

      </Helmet>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a to className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3" />
              Restoran
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">

              <NavLink to="/" className="nav-item nav-link ">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-item nav-link">
                Service
              </NavLink>
              <NavLink to="/menu_one" className="nav-item nav-link">
                Menu
              </NavLink>
              <NavLink to="/blog" className="nav-item nav-link">
                Blog
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu m-0">
                  <NavLink to="/booking" className="dropdown-item">
                    Booking
                  </NavLink>
                  <NavLink to="/our_team" className="dropdown-item">
                    Our Team
                  </NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">
                    Testimonial
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>

            </div>

            {(() => {
              if (localStorage.getItem('userid')) {
                return (
                  <>
                    <NavLink to="/user_profile" className="btn btn-primary nav-item nav-link">
                      <i className="fa fa-user mx-1 text-dark" aria-hidden="true" />
                      <span className="mx-1 text-dark"> {localStorage.getItem('username')}</span>
                    </NavLink>

                    <a href="javascript:void(0)" onClick={userlogout}>
                      <span className="btn btn-primary nav-item nav-link mx-3 text-dark">
                        Log out
                      </span>
                    </a>
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







          </div>
        </nav>

      </div>
    </>
  );
}

export default Header;
