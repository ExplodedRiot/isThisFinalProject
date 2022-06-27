import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>

                            <div className="row">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">Car Oil</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to={'#'}>
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">Air Filter</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-info o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">Spark Plug</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">Car Battery</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-secondary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">AC Filter</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fas fa-fw fa-life-ring"></i>
                                            </div>
                                            <div className="mr-5">Car Accesories</div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="#">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right"><i className="fas fa-angle-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                


                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fas fa-table"></i>
                                    Spare Part List
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Brand</th>
                                                <th>Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>TOP ONE HP Synthetic 20W-50</td>
                                                <td>Car Oil</td>
                                                <td>TOP 1</td>
                                                <td>299.000</td>
                                            </tr>
                                            <tr>
                                                <td>CASTROL POWER 1 10W40 4T</td>
                                                <td>Car Oil</td>
                                                <td>CASTROL</td>
                                                <td>70.000</td>
                                            </tr>
                                            <tr>
                                                <td>Lucas Oil SAE 10W-40</td>
                                                <td>Car Oil</td>
                                                <td>Lucas</td>
                                                <td>198.000</td>
                                            </tr>
                                            <tr>
                                                <td>SHELL ADVANCE AX5 15W-40</td>
                                                <td>Car Oil</td>
                                                <td>SHELL</td>
                                                <td>48.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Honda FBHON-4670</td>
                                                <td>Air Filter</td>
                                                <td>HONDA</td>
                                                <td>469.530</td>
                                            </tr>
                                            <tr>
                                                <td>Honda Air Filter 17220-5AA-A00</td>
                                                <td>Air Filter</td>
                                                <td>HONDA</td>
                                                <td>249.750</td>
                                            </tr>
                                            <tr>
                                                <td>ru-4990 open element universal 3"</td>
                                                <td>Air Filter</td>
                                                <td>KnN</td>
                                                <td>1.050.000</td>
                                            </tr>
                                            <tr>
                                                <td>EVO DR15SXC</td>
                                                <td>Spark Plug</td>
                                                <td>Brisk</td>
                                                <td>300.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Spark Plug</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Spark Plug</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Spark Plug</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Spark Plug</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Spark Plug</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            <tr>
                                                <td>Iridium HONDA Vario 110cc (Karbu / Fi ESP)</td>
                                                <td>Air Filter</td>
                                                <td>DENSO</td>
                                                <td>105.000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>

                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Pemuda Framework 2022</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}
