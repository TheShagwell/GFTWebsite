import React from 'react'
import { useNavigate } from 'react-router-dom' 

const RequestFundConfirm = () => {
    const navigate = useNavigate()
    return (
//           <!-- Content
//   ============================================= -->
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
                <h2 className="fw-400 text-center mt-3">Request Money</h2>
                <p className="lead text-center mb-4">You are requesting money from <span className="fw-500">demo@gmail.com</span></p>
                <div className="row">
                    <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                        <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            {/* <!-- Request Money Confirm Details
            ============================================= --> */}
                            <h3 className="text-5 fw-400 mb-3 mb-sm-4">Confirm Details</h3>
                            <hr className="mx-n3 mx-sm-n5 mb-4" />
                            <div className="row g-3 align-items-center">
                                <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Name:</p>
                                <p className="col-sm-8 text-3">Smith Rhodes</p>
                            </div>
                            <div className="row g-3 align-items-center">
                                <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Email:</p>
                                <p className="col-sm-8 text-3">demo@gmail.com</p>
                            </div>
                            <div className="row g-3 align-items-center">
                                <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Country:</p>
                                <p className="col-sm-8 text-3">Australia</p>
                            </div>
                            <div className="row g-3 align-items-center">
                                <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Payment due by:</p>
                                <p className="col-sm-8 text-3">09-13-2021</p>
                            </div>
                            <div className="row g-3 align-items-center">
                                <p className="col-sm-4 text-muted text-sm-end fw-500 mb-0 mb-sm-3">Requested Amount:</p>
                                <p className="col-sm-8 text-4 fw-500">1,000.00 USD</p>
                            </div>
                            <div className="row g-3 align-items-baseline">
                                <p className="col-sm-4 text-muted text-sm-end mb-0 mb-sm-3">Description:</p>
                                <p className="col-sm-8 text-3">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et.</p>
                            </div>
                            <form id="form-send-money" method="post">
                                <div className="d-grid"><button className="btn btn-primary" onClick={() => navigate('/dashboard/fund/request/success')}>Request Money</button></div>
                            </form>
                            {/* <!-- Request Money Confirm Details end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
// <!-- Content end --> 
    )
}

      
export default RequestFundConfirm