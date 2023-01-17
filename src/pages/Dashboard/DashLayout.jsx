// import { useNavbarContext } from '../../context/NavbarContext'
import { Outlet } from 'react-router-dom'
import Footer from '../../partials/dashboard/Footer'
import Header from '../../Header/Header'
import Sidebar from '../../partials/dashboard/Sidebar'
import SeniorAdmin from '../../components/SeniorAdmin'
import AutoNav from '../../components/AutoNav'

const DashLayout = () => {
	const role = "SuperAdmin"
	return (
		<div>
			<div id="main-wrapper">
				{/* Header */}
				<Header whom="user"/>
				{/* Header */}
				<div id="content" className="py-4">
					<div className="container">
						<div className="row">
							{/* Sidebar */}
							<Sidebar />
							{/* Sidebar */}

							<div className="col-lg-9">
								<Outlet />
							</div>
						</div>
					</div>
				</div>
				{/* Footer */}
				<Footer />
				{/* Footer */}
			</div>
		</div>
	)
}

export default DashLayout