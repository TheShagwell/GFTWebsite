import React from "react"
import { useNavigate } from 'react-router-dom' 

const SendFundConfirm = () => {
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
                                <a href="send-money.html" className="step-dot"></a>
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
                <h2 className="fw-400 text-center mt-3">Send Money</h2>
                <p className="lead text-center mb-4">Setup beneficiary details to send money</p>
                <div className="row">
                    <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                        <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                            <h3 className="text-5 fw-400 mb-3 mb-sm-4">Cash Withdrawal</h3>
                            <hr className="mx-n3 mx-sm-n5 mb-4" />
                            {/* <!-- Send Money Confirm ===== --> */}
                            <form id="form-send-money" method="post">
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label fw-500">FullName<span className='text-danger fw-500'>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullname"
                                        placeholder="Enter Your FullName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="number"
                                        className="form-label fw-500"
                                    >
                                        Phone Number
                                        <span className="text-danger fw-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="number"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="mode" className="form-label">Mode of Collection</label>
                                    <select className="form-select" id="mode" name="mode">  
                                        <option value="DVL">Driver's License</option>
                                        <option value="interPass">International Passport</option>
                                        <option value="pvc">Permanent Voters card</option>
                                        <option value="nin">National Identity Card</option>
                                        <option value="dtc">Direct-to-account</option>
                                    </select>
                                </div>  
                                <div className="mb-3">
                                    <label for="mode" className="form-label">Identification number</label>
                                    <input type="text" className="form-control" data-bv-field="answers1" id="answers1"
                                        placeholder="Enter means of ID Number"
                                    />
                                </div>
                                <div className="mb-4 mb-sm-5">
                                    <label htmlfor="description" className="form-label">Fund Description</label>
                                    <textarea className="form-control" rows="4" id="description" required placeholder="Payment Description"></textarea>
                                </div>
                                <hr className="mx-n3 mx-sm-n5 mb-3 mb-sm-4" />
                                <h3 className="text-5 fw-400 mb-3 mb-sm-4">Confirm Details</h3>
                                <hr className="mx-n3 mx-sm-n5 mb-4" />
                                <p className="mb-1">Send Amount <span className="text-3 float-end">1,000.00 USD</span></p>
                                <p className="mb-1">Total fees <span className="text-3 float-end">7.21 USD</span></p>
                                <hr />
                                <p className="text-4 fw-500">Total<span className="float-end">1,007.21 USD</span></p>
                                <div className="d-grid"><button class="btn btn-primary"  onClick={() => navigate('/dashboard/fund/send/success')}>Send Money</button></div>
                            </form>
                            {/* <!-- Send Money Confirm end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //  <!-- Content end -->

    )
}

export default SendFundConfirm;