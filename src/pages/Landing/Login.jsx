import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavbarContext } from '../../context/NavbarContext';
import { useTranslation } from 'react-i18next';

const Login = () => {

    const { t } = useTranslation();

    const {defaultUser} = useNavbarContext()

    const navigate = useNavigate()

    const [login, setlogin] = useState({
        email: '',
        password: '',
    })

    const handleSubmitOnClick = (e) => {
        e.preventDefault()
        if (!login.email || !login.password){
            toast("Please fill in all details", {type: 'error'})
            return
        }
        if (login.email == defaultUser.email && login.password == defaultUser.password){
            toast("login successful", {type: 'success'})
            if (defaultUser.role == 'user'){
                setTimeout(() => navigate('/dashboard'), 2000)
            } else {
                setTimeout(() => navigate('/dashboard/admin/'), 2000)
                
            }
        } else{
            toast("incorrect credentials", {type: 'error'})
        }
    }

    return (
        <div>
            <ToastContainer/>
            <div id="main-wrapper ">
                <div className="container-fluid front px-0">
                    <div className="row g-0 min-vh-100">
                        <div className="col-md-6">
                            <div className="hero-wrap d-flex align-items-center h-100">
                                <div className="hero-mask opacity-8 bg-blue"></div>
                                <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: "url('/images/First-Bank-Nigeria-15.jpg')" }}></div>
                                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                    <div className="row g-0">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <div className="logo mt-5 mb-5 mb-md-0">
                                                <a className="d-flex" href="/dashboard"><img src="/images/First-Bank.svg" width="121" height="33" alt="First-bank-logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 my-auto mb-5">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <h1 className="text-11 text-black mb-4">{t('loginTitle')} 🎉</h1>
                                            <p className="text-4 lh-base mb-5 text-black">{t('loginText')}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="container my-4">
                                <div className="row g-0">
                                    <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                                        <div className="mb-3">
                                            <h3 className="fw-700 text-primary">{t('loginTextMainTitle')}</h3>
                                            <span>{t('loginTextParagraphy')}</span>
                                        </div>
                                        <form id="loginForm" className='registerd' method="post">
                                            <div className="mb-3">
                                                <label htmlFor="emailAddress" className="form-label fw-500">{t('inputEmailTitle')}<span className='text-danger fw-500'>*</span></label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="emailAddress" 
                                                    required 
                                                    placeholder={t('inputEmailText')}
                                                    value={login.email}
                                                    onChange={(e) => setlogin((prev) => ({...prev, email:e.target.value}))}
                                                     />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="loginPassword" className="form-label fw-500">{t('inputPasswordTitle')}<span className='text-danger fw-500'>*</span></label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="loginPassword" 
                                                    required 
                                                    placeholder={t('inputPasswordText')}
                                                    value={login.password}
                                                    onChange={(e) => setlogin((prev) => ({...prev, password:e.target.value}))}
                                                />
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" id="remember-me" name="remember" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="remember-me">{t('inputRememberText')}</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm text-end"><Link className="btn-link" to="/forgot">{t('inputForgotText')}</Link></div>
                                            </div>
                                            <div className="d-grid mb-3"><button className="btn btn-primary" onClick={handleSubmitOnClick} type="submit" to="/">{t('inputLoginBtnText')}</button></div>
                                        </form>
                                        <p className="text-3 text-center text-muted">{t('DontAccountText')} <Link className="btn-link" to="/register">{t('DontAccountBtnText')} </Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login