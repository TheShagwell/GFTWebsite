import React from 'react'
import {useState, useEffect } from "react"

const ManageCountry = () => {
	const [countryName, setCountryName] = useState('')
	const [countryAdd, setCountryAdd] = useState('')
	// const navigate = useNavigate()
	useEffect( () => (
	  console.log(countryName)
	), [countryName])
	return (
		<>
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h5 className="text-5 fw-400 m-3 text-white">Manage <b>Countries</b></h5>
					</div>
					<div className="col-sm-6">
						<a data-bs-target="#addEmployeeModal" className="btn btn-md btn-secondary-system btn-success" data-bs-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add Countries</span></a>
					</div>
				</div>
			</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Country Name</th>
						<th>Country Head Address</th>
						<th>Country Code Number</th>
						<th>Country</th>
						<th>Country Currency</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>GH</td>
						<td>Cnr Independence Ave & Liberia Rd Ground Floor, Accra Financial Centre, Accra, Ghana</td>
						<td>FIRNGHAC30-23GH</td>
						<td>Ghana</td>
						<td>Cedis</td>
						<td>
							<a data-bs-target="#addEmployeeModal" href="#editEmployeeModal" class="edit" data-bs-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a data-bs-target="#deleteEmployeeModal" href="#deleteEmployeeModal" class="delete" data-bs-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="modal fade" id="addEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="addEmployeeModal">Edit Countries Created</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
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
									<label htmlFor="CountryCode" className="form-label">Country Code Number</label>
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
							</form>
						</div>
						<div className="modal-footer d-flex justify-content-between flex-lg-column">
							<button type="button" className="btn btn-primary">Save changes</button>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>

			{/* Delete Part */}
			{/* <!-- Modal --> */}
			<div class="modal fade" id="deleteEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">Confirm</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<p>Are you sure you want to delete</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ManageCountry