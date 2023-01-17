import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AutoNav from '../../components/AutoNav'

const AdminDashLayout = ({children, subNav}) => {
    const {pathname} = useLocation();
  return (
    <div>
        <div id="main-wrapper">
            <AutoNav/>
            { subNav }
            {/* MAIN CONTENT */}
            <div id="content" className="py-4">
                {children}
            </div>
        </div>
	</div>
  )
}

export default AdminDashLayout