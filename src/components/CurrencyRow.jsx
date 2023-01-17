

const CurrencyRow = ({ index }) => {
    const [CurrencyCode, setCurrencyCode] = useState('');
    const [CurrencySign, setCurrencySign] = useState('');
    const [CurrencyDesc, setCurrencyDesc] = useState('');
    const [CountryCode, setCountryCode] = useState('');
  return (
    <>
        <tr>
            <td>1</td>
            <td>NGN</td>
            <td>N</td>
            <td>Naira</td>
            <td>Nigeria</td>
            <td>
                <a data-bs-target={"#editEmployeeModal" + index} href={"#editEmployeeModal" + index} className="edit" data-bs-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a data-bs-target={"#deleteEmployeeModal" + index} href={"#deleteEmployeeModal" + index} className="delete" data-bs-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </tr>

        {/* Edit */}
			<div className="modal fade" id={"editEmployeeModal" + index} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="editEmployeeModal">Edit Currencies Created</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form id="form-send-money" onSubmit={ () => {}}>
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
							<button onClick={() => {}} type="button" className="btn btn-primary">Save changes</button>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default CurrencyRow