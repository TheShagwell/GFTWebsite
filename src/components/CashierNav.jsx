import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom'

const AdminNav = ({whom}) => {
    const { pathname } = useLocation()
    const navLinks = [
        { to: "/dashboard/senioradmin", name: "Dashboard", for:"Cashier" },
        // { to: "/dashboard/", name: "Dashboard", for:"user" },
        // { to: "/dashboard/admin", name: "Dashboard", for:"admin" },
        // { to: "/dashboard/admin/addcountry", name: "Add Country", for:"admin" },
        // { to: "/dashboard/admin/user", name: "Users", for:"admin" },
        // { to: "/dashboard/transaction", name: "Transactions", for:"user" },
        // { to: "/dashboard/fund/send", name: "Send Fund", for:"user" },
        // { to: "/dashboard/fund/request", name: "Request Fund", for:"user" },
    ]
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-between">
                            <div className="logo me-3">
                                <Link className="d-flex" to="/dashboard/"><img src="/images/First-Bank.svg" width="121" height="33" alt="First-bank-logo" /></Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>

                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav me-auto">
                                        { navLinks.map((link, index) => <li key={index + link.to}  className={pathname === link.to ? "active" : ""}><Link to={link.to}>{link.name}</Link></li>)}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="header-column justify-content-end">
                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">
                                    <li className="dropdown language"> <a className="dropdown-toggle" href="#">En</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">English</a></li>
                                            <li><a className="dropdown-item" href="#">French</a></li>
                                            <li><a className="dropdown-item" href="#">Русский</a></li>
                                            <li><a className="dropdown-item" href="#">简体中文</a></li>
                                            <li><a className="dropdown-item" href="#">Türkçe</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown notifications"> <a className="dropdown-toggle" href="#"><span className="text-5"><i className="far fa-bell"></i></span><span className="count">3</span></a>
                                        <ul className="dropdown-menu">
                                            <li className="text-center text-3 py-2">Notifications (3)</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>A new digital FIRC document is available for you to download<span className="text-1 text-muted d-block">22 Jul 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Updates to our privacy policy. Please read.<span className="text-1 text-muted d-block">04 March 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Update about Payyed fees<span className="text-1 text-muted d-block">18 Feb 2021</span></a></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item text-center text-primary px-0" href="notifications.html">See all Notifications</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown profile ms-2">
                                        <a className="px-0 dropdown-toggle" href="#"><img className="rounded-circle" src="/images/profile-thumb-sm.jpg" alt="" /></a>
                                        <ul className="dropdown-menu">
                                            <li className="text-center text-3 py-2">Hi, Adekunle Bolaji</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="settings-profile.html"><i className="fas fa-user"></i>My Profile</a></li>
                                            <li><a className="dropdown-item" href="settings-Security.html"><i className="fas fa-shield-alt"></i>Security</a></li>
                                            <li><a className="dropdown-item" href="settings-payment-methods.html"><i className="fas fa-credit-card"></i>Payment Methods</a></li>
                                            <li><a className="dropdown-item" href="settings-notifications.html"><i className="fas fa-bell"></i>Notifications</a></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="help.html"><i className="fas fa-life-ring"></i>Need Help?</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i>Sign Out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AdminNav