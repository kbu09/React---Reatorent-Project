import React from 'react'
import A_navbar from '../Components/A_navbar'
import { useNavigate } from 'react-router-dom'
import {  useEffect } from 'react'


function A_Dashboard() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/a_login');
        }
    }, []);


    return (
        < div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />

            <div data-aos="fade-down" data-aos-duration="1500" className="breadcumb-area" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div data-aos="fade-in" className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2> DASHBOARD</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="content-wrapper set-radius-zero " data-aos="fade-up" data-aos-duration="1000" >
                <div className="container">

                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="alert alert-info back-widget-set text-center">
                                <i className="fa fa-history fa-5x" />
                                <h3>5000 rs</h3>
                                Amount Pending For Approval
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="alert alert-success back-widget-set text-center">
                                <i className="fa fa-bars fa-5x" />
                                <h3>100+ Dishes</h3>
                                Add New Category
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="alert alert-warning back-widget-set text-center">
                                <i className="fa fa-recycle fa-5x" />
                                <h3>Today's 56+ Visits</h3>
                                To Be Made For New Orders
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6">
                            <div className="alert alert-danger back-widget-set text-center">
                                <i className="fa fa-briefcase fa-5x" />
                                <h3>30+ Feedback </h3>
                                That Should Be Resolved Now
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div id="carousel-example" className="carousel slide slide-bdr" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img src="Admin/assets/img/1.jpg" alt />
                                    </div>
                                    <div className="item">
                                        <img src="Admin/assets/img/2.jpg" alt />
                                    </div>
                                    <div className="item">
                                        <img src="Admin/assets/img/3.jpg" alt />
                                    </div>
                                </div>
                                {/*INDICATORS*/}
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-example" data-slide-to={0} className="active" />
                                    <li data-target="#carousel-example" data-slide-to={1} />
                                    <li data-target="#carousel-example" data-slide-to={2} />
                                </ol>
                                {/*PREVIUS-NEXT BUTTONS*/}
                                <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" />
                                </a>
                                <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="panel panel-primary ">
                                <div className="panel-heading">
                                    Recent Chat History
                                </div>
                                <div className="panel-body chat-widget-main">
                                    <div className="chat-widget-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor.
                                    </div>
                                    <div className="chat-widget-name-left">
                                        <img className="media-object img-circle img-left-chat" src="Admin/assets/img/user2.png" />
                                        <h4> Amanna Seiar</h4>
                                        <h5>Time 2:00 pm at 25th july</h5>
                                    </div>
                                    <hr />
                                    <div className="chat-widget-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="chat-widget-name-right">
                                        <img className="media-object img-circle img-right-chat" src="Admin/assets/img/user2.png" />
                                        <h4> Amanna Seiar</h4>
                                        <h5>Time 2:00 pm at 25th july</h5>
                                    </div>
                                    <hr />
                                    <div className="chat-widget-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="chat-widget-name-left">
                                        <img className="media-object img-circle img-left-chat" src="Admin/assets/img/user2.png" />
                                        <h4> Amanna Seiar</h4>
                                        <h5>Time 2:00 pm at 25th july</h5>
                                    </div>
                                    <hr />
                                    <div className="chat-widget-right">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="chat-widget-name-right">
                                        <img className="media-object img-circle img-right-chat" src="Admin/assets/img/user2.png" />
                                        <h4> Amanna Seiar</h4>
                                        <h5>Time 2:00 pm at 25th july</h5>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Recent Coustomer Photos
                                </div>
                                <div className="panel-body text-center recent-users-sec">
                                    <img className="img-thumbnail" src="Admin/assets/img/user.gif" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user2.png" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user.gif" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user2.png" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user.gif" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user2.png" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user.gif" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user2.png" />
                                    <img className="img-thumbnail" src="Admin/assets/img/user.gif" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="panel panel-success">
                                <div className="panel-heading">
                                    Responsive Table Example
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>User No.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                    <td>100090</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>100090</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default A_Dashboard