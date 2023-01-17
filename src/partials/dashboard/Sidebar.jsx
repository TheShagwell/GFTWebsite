import React from 'react'
import { useNavbarContext } from '../../context/NavbarContext';

const Sidebar = () => {
    
    const {defaultUser} = useNavbarContext();

    return (
        <aside className="col-lg-3">
            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="profile-thumb mt-3 mb-4"> <img width={100} height={100} style={{objectFit: 'cover'}} className="rounded-circle" src={defaultUser?.screenshot || '../images/profile-thumb.jpg'}  alt="" />
                    <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture">
                        <i className="fas fa-camera position-absolute"></i>
                        <input type="file" className="custom-file-input" id="customFile" />
                    </div>
                </div>
                <p className="text-3 fw-500 mb-2">Hello, {defaultUser?.name || 'Adekunle Bolaji'}</p>
                <p className="mb-2"><a href="settings-profile.html" className="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p>
            </div>

            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
                <h3 className="text-9 fw-400">&#8358;0.00</h3>
                <p className="mb-2 text-muted opacity-8">Available Balances</p>
                <hr className="mx-n3" />
            </div>

            <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                <h3 className="text-5 fw-400 my-4">Need Help?</h3>
                <p className="text-muted opacity-8 mb-4">Have questions or concerns regarding your account?<br /> Our experts are here to help!.</p>
                <div className="d-grid"><a href="#" className="btn btn-primary">Chat with Us</a></div>
            </div>

        </aside>
    )
}

export default Sidebar