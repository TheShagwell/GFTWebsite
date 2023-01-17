import React from "react"


const SendFundSuccess = () => {
    return (
        
//         <!-- Content
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
                                <span className="step-dot"></span> </div>
                            <div className="col-4 step complete">
                                <div className="step-name">Confirm</div>
                                <div className="progress">
                                    <div className="progress-bar"></div>
                                </div>
                                <span className="step-dot"></span> </div>
                            <div className="col-4 step complete">
                                <div className="step-name">Success</div>
                                <div className="progress">
                                    <div className="progress-bar"></div>
                                </div>
                                <span className="step-dot"></span> </div>
                        </div>
                    </div>
                </div>
                <h2 className="fw-400 text-center mt-3 mb-4">Send Money</h2>
                <div className="row">
                    <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                        {/* <!-- Send Money Success ============================================= --> */}
                        <div className="bg-white text-center shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            <div className="my-4">
                                <p className="text-success dark-blue text-20 lh-1"><i className="fas fa-check-circle"></i></p>
                                <p className="text-success dark-blue text-8 fw-500 lh-1">Success!</p>
                                <p className="lead">Transactions Complete</p>
                            </div>
                            <p className="text-3 mb-4">You've Succesfully sent <span className="text-4 fw-500">$3000</span> to <span className="fw-500">Adekunle Bolaji</span>, See transaction details under <a className="btn-link" href="#">Activity</a>.</p>
                            <hr className="mx-n3 mx-sm-n5 mb-3 mb-sm-4" />
                            <p className="text-3 mb-4">Your Money Transfer Code Number (MTCN) is <span className="text-4 fw-500">90-------</span></p>
                            <div className="d-grid"><button className="btn btn-primary">Send Money Again</button></div>
                            <a className="text-3 d-inline-block btn-link mt-4" href="#"><i className="fas fa-print"></i> Print</a> </div>
                    </div>
                </div>
            </div>
        </div>
        //  <!-- Content end -->
      
    )
}

export default SendFundSuccess