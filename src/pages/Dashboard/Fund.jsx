import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from '../../Header/Header'

const Fund = () => {
	const { pathname } = useLocation()
		return (
			<div>
				<div id="main-wrapper">
					<Header whom="user" />
						<div className="bg-primary" style={{backgroundColor: "#003b65 !important" }}>
							<div className="container d-flex justify-content-center">
								<ul className="nav nav-pills alternate nav-lg border-bottom-0">
									<li className="nav-item"> <Link className={`nav-link ${pathname === "/dashboard/fund/send" ? "active" : ""}`} to="/dashboard/fund/send">Send</Link></li>
									<li className="nav-item"> <Link className={`nav-link ${pathname === "/dashboard/fund/request" ? " active" : ""}`} to="/dashboard/fund/request">Request</Link></li>
								</ul>
							</div>
						</div>
					{/* MAIN CONTENT */}
					<div id="content" className="py-4">
						<Outlet />
					</div>
				</div>
			</div>
		)
}

export default Fund