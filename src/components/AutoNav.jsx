import React from 'react'
import { useNavbarContext } from '../context/NavbarContext'
import AdminNav from '../Header/AdminHeader'
import CashierNav from './CashierNav'
import SeniorAdmin from './SeniorAdmin'

const AutoNav = (props) => {
    const { role } = useNavbarContext()
    
    if (role == 'SuperAdmin'){
        return <AdminNav {...props}/>
    }
    else if (role == 'cashier'){
        return <CashierNav {...props}/>
    }
    else {
        return <SeniorAdmin {...props}/>
    }
}

export default AutoNav