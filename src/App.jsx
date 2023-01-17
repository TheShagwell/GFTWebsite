import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import DashLayout from './pages/Dashboard/DashLayout'
import Fund from './pages/Dashboard/Fund'
import Transactions from './pages/Dashboard/Transactions'

import Home from './pages/Landing/Home'
import Login from './pages/Landing/Login'
import Register from './pages/Landing/Register'
import Forgot from './pages/Landing/Forgot'
import RequestFund from './partials/dashboard/RequestFund'
import RequestFundConfirm from './partials/dashboard/RequestFundConfirm'
import RequestFundSuccess from './partials/dashboard/RequestFundSuccess'
import SendFund from './partials/dashboard/SendFund'
import SendFundConfirm from './partials/dashboard/SendFundConfirm'
import SendFundSuccess from './partials/dashboard/SendFundSuccess'
import AddCountry from './pages/Admin/AddCountry'
import CountriesCreated from './pages/Admin/CountriesCreated'
import Adminlayout from './pages/Admin/Adminlayout'
import Index from './pages/Admin/Index'
// import AddCountryConfirm from './pages/Admin/AddCountryConfirm'
// import AddCountrySuccess from './pages/Admin/AddCountrySuccess'
// import AddCurriencies from './pages/Admin/AddCurrencies'
import CurrienciesCreated from './pages/Admin/CurrenciesCreated'
import Currency from './pages/Admin/Currency'
import SendMoney from './pages/Landing/SendMoney'
import ReceiveMoney from './pages/Landing/ReceiveMoney'


const App = () => {
  const { pathname } = useLocation()

  const pages = [
    { path: "/", element: <Home />, child: null },
    { path: "/sendmoney", element: <SendMoney />, child: null },
    { path: "/receivemoney", element: <ReceiveMoney />, child: null },
    { path: "/login", element: <Login />, child: null  },
    { path: "/register", element: <Register />, child: null  },
    { path: "/forgot", element: <Forgot />, child: null  },
    { path: "/dashboard", element: <DashLayout />, child: [
      { path: "/dashboard/", element: <Dashboard />},
      { path: "/dashboard/transaction", element: <Transactions />},
    ]},
    { path: "/dashboard/fund", element: <Fund />, child: [
      { path: "/dashboard/fund/send", element: <SendFund />},
      { path: "/dashboard/fund/send/confirm", element: <SendFundConfirm />},
      { path: "/dashboard/fund/send/success", element: <SendFundSuccess />},
      { path: "/dashboard/fund/request", element: <RequestFund />},
      { path: "/dashboard/fund/request/confirm", element: <RequestFundConfirm />},
      { path: "/dashboard/fund/request/success", element: <RequestFundSuccess />},
    ]},
    {path: "/dashboard/admin", element: <Adminlayout />, child:[
      { path: "/dashboard/admin/", element: <Index />},
    ]},
    { path: "/dashboard/admin/addcountry", element: <AddCountry />},
    { path: "/dashboard/admin/CountriesCreated", element: <CountriesCreated />},
    // { path: "/dashboard/admin/AddCurriences", element: <AddCurriencies />},
    { path: "/dashboard/admin/CurrienciesCreated", element: <CurrienciesCreated />},
    { path: "/dashboard/admin/currency", element: <Currency />},
    // { path: "/dashboard/admin/addCountryConfirm", element: <AddCountryConfirm />},
    // { path: "/dashboard/admin/addCountrySuccess", element: <AddCountrySuccess />},
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
  }, [pathname])
  
  return (
    <Routes>
      { pages.map((page, index) => !page.child ? (
        <Route key={`${index}-${page.path}`} {...page} />
      ): (
        <Route {...page} key={`${index}-${page.path}`}>
          { page.child?.map((item, _index) => <Route key={`${index}-${item.path}-${_index}`} {...item} />) }
        </Route>
      )) }
    </Routes>
  )
}

export default App