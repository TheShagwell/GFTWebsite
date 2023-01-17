import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminDashLayout from './AdminDashLayout'

const AddCountryConfirm = () => {
    const navigate = useNavigate()
    return (
        <AdminDashLayout
            subNav={
                <div className="bg-primary">
                    <div className="container d-flex justify-content-center">
                        <ul className="nav nav-pills alternate nav-lg border-bottom-0">
                            <li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/AddCountry" ? "active" : ""}`} to="/dashboard/admin/AddCountry">Add Country</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/CountriesCreated" ? " active" : ""}`} to="/dashboard/admin/CountriesCreated">Countries Created</Link></li>
                        </ul>
                    </div>
                </div>
            }
        >
            {/* <!-- Content============================================= --> */}
                <div id="content" className="py-4">
                    <div className="container">
                        {/* <!-- Steps Progress bar --> */}
                        <div className="row mt-4 mb-5">
                            <div className="col-lg-11 mx-auto">
                                <div className="row widget-steps">
                                    <div className="col-4 step complete">
                                        <div className="step-name">Details</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="request-money.html" className="step-dot"></a>
                                    </div>
                                    <div className="col-4 step active">
                                        <div className="step-name">Confirm</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="#" className="step-dot"></a>
                                    </div>
                                    <div className="col-4 step disabled">
                                        <div className="step-name">Success</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="#" className="step-dot"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="fw-500 text-center text-primary mt-3">Confirm Country Created</h2>
                        <p className="lead text-center mb-4">Kindly confirm the country you are about to create</p>
                        <div className="row">
                            <div className="col-md-9 col-lg-10 col-xl-9 mx-auto">
                                <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                    {/* <!-- Request Money Confirm Details
                    ============================================= --> */}
                                    <h3 className="text-5 fw-400 mb-3 mb-sm-4">Confirm Details</h3>
                                    <hr className="mx-n3 mx-sm-n5 mb-4" />
                                    <div className="row g-3 align-items-center">
                                        <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Contry Name:</p>
                                        <p className="col-sm-8 text-3">Ghana</p>
                                    </div>
                                    <div className="row g-3 align-items-center">
                                        <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Country Head Address:</p>
                                        <p className="col-sm-8 text-3">Cnr Independence Ave & Liberia Rd Ground Floor, Accra Financial Centre, Accra, Ghana</p>
                                    </div>
                                    <div className="row g-3 align-items-center">
                                        <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Country Code Number:</p>
                                        <p className="col-sm-8 text-3">FIRNGHAC30-23GH</p>
                                    </div>
                                    <div className="row g-3 align-items-center">
                                        <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Country Selected:</p>
                                        <p className="col-sm-8 text-3">Ghana</p>
                                    </div>
                                    <div className="row g-3 align-items-center">
                                        <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Country Currrency Selected:</p>
                                        <p className="col-sm-8 text-3">Ghana Cedis</p>
                                    </div>
                                    <form id="form-send-money" method="post">
                                        <div className="d-grid"><button className="btn btn-primary"  onClick={() => navigate('/dashboard/admin/addCountrySuccess')}>Continue</button></div>
                                    </form>
                                    {/* <!-- Country Created Confirm Details end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        {/* // <!-- Content end -->  */}
        </AdminDashLayout>
    )
}

export default AddCountryConfirm