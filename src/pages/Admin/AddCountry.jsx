import {useState, useEffect } from "react"
import React from 'react'
import { useNavigate } from 'react-router-dom' 
import AdminDashLayout from './AdminDashLayout'
import { useLocation, Link } from 'react-router-dom'

const AddCountry = () => {
  const {pathname} = useLocation();
  const [countryName, setCountryName] = useState('')
  const [countryAdd, setCountryAdd] = useState('')
  const navigate = useNavigate()
  useEffect( () => (
    console.log(countryName)
  ), [countryName])
  return (
    <AdminDashLayout
      subNav={
        <div className="bg-primary">
          <div className="container d-flex justify-content-center">
            <ul className="nav nav-pills alternate nav-lg border-bottom-0">
              {/* <li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/AddCountry" ? "active" : ""}`} to="/dashboard/admin/AddCountry">Add Country</Link></li> */}
              <li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/CountriesCreated" ? " active" : ""}`} to="/dashboard/admin/CountriesCreated">Countries Created</Link></li>
            </ul>
          </div>
        </div>
      }
    
    >
      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-lg-11 mx-auto">
            <div className="row widget-steps">
              <div className="col-4 step active">
                <div className="step-name">Details</div>
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <a href="#" className="step-dot"></a>
              </div>
              <div className="col-4 step disabled">
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
        <h2 className="fw-400 text-center mt-3">Manage Country Bank</h2>
        <p className="lead text-center mb-4">Add countries who can get access to the global transfer fund system.</p>
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-9 mx-auto">
            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
              <h3 className="text-5 fw-400 mb-3 mb-sm-4">Country Details</h3>
              <hr className="mx-n3 mx-sm-n5 mb-4" />
              <form id="form-send-money" method="post">
                <div className="mb-3">
                  <label htmlFor="Country_User" className="form-label">Country Name</label>
                  <input type="text" value={countryName} className="form-control" data-bv-field="name" id="Country_User"
                    required placeholder="Enter Country Name" onChange={(e) => setCountryName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="Address" className="form-label">Country Head Address</label>
                  <input type="text" value={countryAdd} onChange={(e) => setCountryAdd(e.target.value)} className="form-control" data-bv-field="address" id="Address" required placeholder="Enter Country Head Address" />
                </div>

                <div className="mb-3">
                  <label htm lFor="CountryCode" className="form-label">Country Code Number</label>
                  <input type="number" value="" className="form-control" data-bv-field="name" id="CountryCode"
                    required placeholder="Enter the Country Code" />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputCountry" className="form-label">Country</label>
                  <select className="form-select" id="inputCountry" name="country_id">
                    <option value="">Select Country</option>
                    <option value="237">Democratic Republic of Congo</option>
                    <option value="79">Gambia</option>
                    <option value="82">Ghana</option>
                    <option value="90">Guinea</option>
                    <option value="91">Guinea-Bissau</option>
                    <option value="156">Nigeria</option>
                    <option value="185">Senegal</option>
                    <option value="210">Togo</option>
                    <option value="238">Zambia</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="youCurrency" className="form-label">Country Currency</label>
                  <select className="form-select" id="youCurrency" name="country_currency">
                    <option value="">Select Country Currency</option>
                    <option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
                    <option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
                  </select>
                </div>

                <div className="d-grid"><button className="btn btn-primary" onClick={() => navigate('/dashboard/admin/addCountryConfirm')}>Continue</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminDashLayout>
  )
}

export default AddCountry