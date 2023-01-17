import React from 'react'
import AdminDashLayout from './AdminDashLayout'
import ManageCountry from '../../components/ManageCountry'
import { useLocation, Link } from 'react-router-dom'


const CountriesCreated = () => {
  const {pathname} = useLocation()
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
        <div className="table-responsive-lg">
          <div className="table-wrapper">
            <ManageCountry />
          </div>
        </div>
      </div>
    </AdminDashLayout>
  )
}

export default CountriesCreated