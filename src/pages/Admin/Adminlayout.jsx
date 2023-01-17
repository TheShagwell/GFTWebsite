import { Outlet } from 'react-router-dom'
import Footer from '../../partials/dashboard/Footer'
import AdminHeader from '../../Header/AdminHeader'
import Sidebar from '../../partials/dashboard/Sidebar'

const Adminlayout = () => {
  return (
	  <div>
		  <div id="main-wrapper">
			  {/* Header */}
			  <AdminHeader whom="admin" />
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

export default Adminlayout