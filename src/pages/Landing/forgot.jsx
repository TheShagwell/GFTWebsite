import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const forgot = () => {
    const { t } = useTranslation();
  return (
    <div>
        <div id="main-wrapper" className="min-vh-100 front d-flex flex-column">
        <div className="ankara"></div>
            {/* <!-- Login Form ============================================= --> */}
            <div className="container front my-auto">
                <div className="row g-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto py-5">
                        <div className="logo d-flex justify-content-center mt-5 mb-3">
                            <a className="d-flex" href="index.html">
                                <img src="/images/First-Bank.svg" width="140" height="33" alt="First-bank-logo" />
                            </a>
                        </div>
                        <div className="mb-5 text-center">
                            <h2 className="fw-700 text-primary">{t('forgotPasswd')}</h2>
                            <span className='text-4'>{t('forgotPasswdText1')}, {t('forgotPasswdText2')}</span>
                        </div>
                        <form id="loginForm" className='registerd' method="post">
                            <div className="vertical-input-group">
                                <div className="input-group">
                                    <input type="email" className="form-control" id="emailAddress" required placeholder={t('inputEmailText')}/>
                                </div>
                            </div>
                            <div className="d-grid my-4">
                                <button className="btn btn-primary shadow-none" type="submit" to="/forgot">{t('forgotPasswdBtn')}</button>
                            </div>
                        </form>
                        <p className="text-3 text-center text-muted mb-2">{t('forgotPasswdBtnHelp')} <Link className="btn-link" to="">{t('forgotPasswdBtnHelp2')}</Link></p>
                        <p className="text-center mb-0"><Link className="btn-link" to="">{t('forgotPasswdBtnLogout')}.</Link></p>
                    </div>
                </div>
            </div>
            {/* <!-- Login Form End --> */}

        </div>  
    </div>
  )
}

export default forgot


