import React from 'react'
import AdminDashLayout from './AdminDashLayout'

const AddCountrySuccess = () => {
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
      {/* //<!-- Content ============================================= --> */}
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
             <h2 className="fw-400 text-center mt-3 mb-4">Request Money</h2>
             <div className="row">
                 <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                     {/* <!-- Request Money Success
         ============================================= --> */}
                     <div className="bg-white text-center shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                         <div className="my-4">
                             <p className="text-success dark-blue text-20 lh-1"><i className="fas fa-check-circle"></i></p>
                             <p className="text-success dark-blue text-8 fw-500 lh-1">Success!</p>
                             <p className="lead">Country Bank Created Completed</p>
                         </div>
                         <p className="text-3 mb-4">You've successfully created <span className="text-primary text-4 fw-500">Ghana FirstBank </span> access to the application.</p>
                         <div className="d-grid"><button className="btn btn-primary">Go Back Home</button></div>
                         <a className="text-3 d-inline-block btn-link mt-4" href="#"><i className="fas fa-print"></i> Print</a> </div>
                     {/* <!-- Request Money Success end --> */}
                 </div>
             </div>
         </div>
     </div>
     {/* // <!-- Content end --> */}
    </AdminDashLayout>
  )
}

export default AddCountrySuccess