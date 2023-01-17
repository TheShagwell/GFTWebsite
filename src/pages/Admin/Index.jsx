import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="bg-white shadow-sm rounded p-4 mb-4">
                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Profile Completeness<span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">50%</span></h3>
                <hr className="mb-4 mx-n4" />
                <div className="row gy-4 profile-completeness">
                    <div className="col-sm-6 col-md-3">
                        <div className="border rounded text-center px-3 py-4"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-mobile-alt"></i></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle"></i></span>
                            <p className="mb-0">Mobile Added</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="border rounded text-center px-3 py-4"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-envelope"></i></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle"></i></span>
                            <p className="mb-0">Email Added</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="position-relative border rounded text-center px-3 py-4"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-credit-card"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle "></i></span>
                            <p className="mb-0"><a className="btn-link stretched-link" href="">Add Card</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="position-relative border rounded text-center px-3 py-4"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-university"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle "></i></span>
                            <p className="mb-0"><a className="btn-link stretched-link" href="">Add Bank Account</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm rounded py-4 mb-4">
                <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">Recent Activity</h3>

                <div className="transaction-title py-2 px-4">
                    <div className="row fw-00">
                        <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                        <div className="col col-sm-7">Description</div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                        <div className="col-3 col-sm-2 text-end">Amount</div>
                    </div>
                </div>

                <div className="transaction-list">
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">FirstBank Ghana </span> <span className="text-muted">Withdraw to Bank account</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-warning" data-bs-toggle="tooltip" title="In Progress"><i className="fas fa-ellipsis-h"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">FirstBank Senegal</span> <span className="text-muted">Payment Received</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">04</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">FirstBank Ghana</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $106</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">ATM</span> <span className="text-muted">Refund</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">ATM</span> <span className="text-muted">Payment Sent</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-bs-toggle="tooltip" title="Cancelled"><i className="fas fa-times-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">FirstBank Ghana</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                        <div className="row align-items-center flex-row">
                            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                            <div className="col col-sm-7"> <span className="d-block text-4">FirstBank Senegal</span> <span className="text-muted">Payment Received</span> </div>
                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                            <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                        </div>
                    </div>
                </div>

                <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row g-0">
                                    <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                                        <div className="my-auto text-center">
                                            <div className="text-17 text-white my-3"><i className="fas fa-building"></i></div>
                                            <h3 className="text-4 text-white fw-400 my-3">FirstBank Senegal Ltd</h3>
                                            <div className="text-8 fw-500 text-white my-4">$557.20</div>
                                            <p className="text-white">15 March 2021</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <h5 className="text-5 fw-400 m-3">Transaction Details
                                            <button type="button" className="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </h5>
                                        <hr />
                                        <div className="px-3">
                                            <ul className="list-unstyled">
                                                <li className="mb-2">Payment Amount <span className="float-end text-3">$562.00</span></li>
                                                <li className="mb-2">Fee <span className="float-end text-3">-$4.80</span></li>
                                            </ul>
                                            <hr className="mb-2" />
                                            <p className="d-flex align-items-center fw-500 mb-0">Total Amount <span className="text-3 ms-auto">$557.20</span></p>
                                            <hr className="mb-4 mt-2" />
                                            <ul className="list-unstyled">
                                                <li className="fw-500">Paid By:</li>
                                                <li className="text-muted">Envato Pty Ltd</li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="fw-500">Transaction ID:</li>
                                                <li className="text-muted">26566689645685976589</li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="fw-500">Description:</li>
                                                <li className="text-muted">Envato March 2021 Member Payment</li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="fw-500">Status:</li>
                                                <li className="text-muted">Completed<span className="text-success text-3 ms-1"><i className="fas fa-check-circle"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4"><a href="transactions.html" className="btn-link text-3">View all<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>

            </div>
        </div>
    )
}

export default Index