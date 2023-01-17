import AdminDashLayout from './AdminDashLayout'
import {useState, useEffect } from "react"
import { useLocation, Link } from 'react-router-dom'
import CurrencyRow from '../../components/CurrencyRow'


const Currency = () => {
  const [currencyCode, setCurrencyCode] = useState('')
	const [currencySign, setCurrencySign] = useState('')
	const [currencyDesc, setCurrencyDesc] = useState('')
	const [countryCode, setCountryCode] = useState('')
	const {pathname} = useLocation()
	// const navigate = useNavigate()


	const handleAddCurrency = async (e) => {
			e.preventDefault()

			if (!countryCode || !currencySign || !currencyDesc || !currencyCode) return
			const data = {
				currencyCode,
				currencySign,
                currencyDesc,
                countryCode
			}

			const res = await addCurrencies(data)
			console.log(res)
	}
	useEffect( () => (
	  console.log('Page loaded!')
	), [])
  return (
    <AdminDashLayout
		subNav={
			<div className="bg-primary">
				<div className="container d-flex justify-content-center">
					<ul className="nav nav-pills alternate nav-lg border-bottom-0">
						{/* <li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/AddCurrencies" ? "active" : ""}`} to="/dashboard/admin/AddCurrencies">Add Curriencies</Link></li> */}
						<li className="nav-item"><Link className={`nav-link ${pathname === "/dashboard/admin/CurrenciesCreated" ? " active" : ""}`} to="/dashboard/admin/currency">Curriences Created</Link></li>
					</ul>
				</div>
			</div>
		}
	>

      <div className="container">
        <div className="table-responsive-lg">
          <div className="table-wrapper">
          <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h5 className="text-5 fw-400 m-3 text-white">Manage <b>Currencies</b></h5>
					</div>
					<div className="col-sm-6">
						<a data-bs-target="#addEmployeeModal" href="#addEmployeeModal" className="btn btn-md btn-secondary-system btn-success" data-bs-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add Currencies</span></a>
					</div>
				</div>
			</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Currency Code</th>
						<th>Currency Sign</th>
						<th>Currency Desc</th>
						<th>Country Code</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* <CurrencyRow index="1" /> */}
				</tbody>
			</table>

			<div className="modal fade" id="addEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="addEmployeeModal">Add Currencies</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form id="form-send-money" onSubmit={handleAddCurrency}>
								<div className="mb-3">
									<label htmlFor="Country_User" className="form-label">Currency Code</label>
									<input type="text"  className="form-control" data-bv-field="name" id="Country_User"
										required placeholder="Enter Country Name" onChange={(e) => setCurrencyCode(e.target.value)} />
								</div>
								<div className="mb-3">
									<label htmlFor="Address" className="form-label">Currency Sign</label>
									<input type="text" onChange={(e) => setCurrencySign(e.target.value)} className="form-control" data-bv-field="address" id="Address" required placeholder="Enter Country Head Address" />
								</div>

								<div className="mb-3">
									<label htm lFor="CountryCode" className="form-label">Currency Desc</label>
									<input type="text" value="" className="form-control" data-bv-field="name" id="CountryCode"
										required placeholder="Enter the Country Code" onChange={(e) => setCurrencyDesc(e.target.value)} />
								</div>

								<div className="mb-3">
									<label htmlFor="Country_User" className="form-label">Country Code</label>
									<input type="text" className="form-control" data-bv-field="name" id="Country_User"
										required placeholder="Enter Country Name" onChange={(e) => setCountryCode(e.target.value)} />
								</div>

							</form>
						</div>
						<div className="modal-footer d-flex justify-content-between flex-lg-column">
							<button onClick={handleAddCurrency} type="button" className="btn btn-primary">Save changes</button>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>

			{/* Edit */}
			{/* <div className="modal fade" id="editEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="editEmployeeModal">Edit Currencies Created</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form id="form-send-money" onSubmit={handleAddCurrency}>
								<div className="mb-3">
									<label htmlFor="Country_User" className="form-label">Currency Code</label>
									<input type="text"  className="form-control" data-bv-field="name" id="Country_User"
										required placeholder="Enter Country Name" onChange={(e) => setCurrencyCode(e.target.value)} />
								</div>
								<div className="mb-3">
									<label htmlFor="Address" className="form-label">Currency Sign</label>
									<input type="text" onChange={(e) => setCurrencySign(e.target.value)} className="form-control" data-bv-field="address" id="Address" required placeholder="Enter Country Head Address" />
								</div>

								<div className="mb-3">
									<label htm lFor="CountryCode" className="form-label">Currency Desc</label>
									<input type="number" value="" className="form-control" data-bv-field="name" id="CountryCode"
										required placeholder="Enter the Country Code" onChange={(e) => setCurrencyDesc(e.target.value)} />
								</div>

								<div className="mb-3">
									<label htmlFor="Country_User" className="form-label">Country Code</label>
									<input type="text" className="form-control" data-bv-field="name" id="Country_User"
										required placeholder="Enter Country Name" onChange={(e) => setCountryCode(e.target.value)} />
								</div>

							</form>
						</div>
						<div className="modal-footer d-flex justify-content-between flex-lg-column">
							<button onClick={handleAddCurrency} type="button" className="btn btn-primary">Save changes</button>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div> */}


			{/* Delete Part */}
			{/* <!-- Modal --> */}
			<div className="modal fade" id="deleteEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Confirm</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p>Are you sure you want to delete</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
          </div>
        </div>
      </div>

    </AdminDashLayout>
  )
}

export default Currency