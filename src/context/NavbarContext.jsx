import { createContext, useContext, useState, useEffect } from "react"

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
    const [role, setRoles] = useState("SuperAdmin")
    const [defaultUser, setdefaultUser] = useState({
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      country: '', 
      password: '',
      // screenshot: '',
      role: 'user',
    })

    const defaultUserAll = {
      name: 'Ezra Jonathan',
      email: 'ezra.erewharighe@gmail.com',
      country: 'Ghana', 
      password: 'timothyunreal90',
      screenshot: '',
    }

    useEffect(() => {
      console.log(defaultUser)
    }, [defaultUser])
    
  return (
    <NavbarContext.Provider value={{role, setRoles, setdefaultUser, defaultUser}}>
        { children }
    </NavbarContext.Provider>
    )
}

export default NavbarProvider

export const useNavbarContext = () => useContext(NavbarContext)

