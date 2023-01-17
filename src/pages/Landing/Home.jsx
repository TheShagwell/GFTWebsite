import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import { FcGlobe } from "react-icons/fc";
// import 'currency-flags'

const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'eu'
    },
    {
      code: 'yo',
      name: 'Yoruba',
      country_code: 'ng'
    },
  ]


const Home = () => {

  const currentLanguageCode = Cookies.get('i18next')  || 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)

  const navigate = useNavigate()
  
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])


	return (
		<div>
			<div id="main-wrapper">
				<header id="header" className="bg-transparent header-text-light">
					<div className="container">
						<div className="header-row">
							<div className="header-column justify-content-between">
								<div className="logo me-3">
									<a className="d-flex" href="index.html">
										<img src="/images/First-Bank.svg" width="121" height="33" alt="First-bank-logo" />
									</a>
								</div>

								<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
									data-bs-target="#header-nav"> 
									<span></span> 
									<span></span> 
									<span></span> 
								</button>
								<nav className="primary-menu navbar navbar-expand-lg">
									<div id="header-nav" className="collapse navbar-collapse">
										<ul className="navbar-nav me-auto">
											{/* <li><Link to="/sendmoney">{t('userHeaderlink2')}</Link></li>
											<li><Link to="/receivemoney">{t('userHeaderlink3')}</Link></li> */}
											{/* <li><Link to="/receivemoney">{t('userHeaderlink4')}</Link></li> */}
											
										</ul>
									</div>
								</nav>
							</div>
							<div className="header-column justify-content-end">
								<nav className="login-signup navbar navbar-expand">
									<ul className="navbar-nav">
										<li className="align-items-center h-auto ms-sm-3">
											<Link className='text-white' to="/login">{t('home_btn_1')}</Link>
										</li>
										<li className="align-items-center h-auto ms-sm-3">
											<Link className="btn btn-primary" to="/register">{t('home_btn_2')}</Link>
										</li>
									</ul>
									{/* <div className="d-flex justify-content-end"> */}
									<div div className="dropdown" >
										<a className="btn btn-link dropdown-toggle text-white text" style={{ border: 'none', outline: 'none'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<FcGlobe size={24} />
										</a>
										<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
											<li><span className="dropdown-item-text">{t('language')}</span></li>
											{languages.map(({ code, name, country_code }) => (
												<li className='text-primary' key={country_code}>
													<button type="button" className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
														<span className={`fi fi-${country_code} mx-2`} style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
														{name}
													</button>
												</li>
											))}
										</ul>
									</div >
									{/* </div> */}
								</nav>
							</div>
						</div>
					</div>
				</header>

				<div id="content">
					{/* <!-- Send/Request Money============================================= --> */}
					<section className="hero-wrap">
						<div className="hero-mask opacity-5 bg-dark"></div>
						<div className="hero-bg" style={{backgroundImage:`url('images/secure.jpg')`}}></div>
						<div className="hero-content d-flex min-vh-100">
							<div className="container my-auto py-5">
								<div className="row mt-4 pt-5">
									<div className="col-lg-6 col-xl-7 my-auto text-center text-lg-start pb-4 pb-lg-0">
										<h2 className="text-14 fw-600 text-white mb-4">{t('home_main-Title1')}<br className="d-none d-xl-block" /> {t('home_main-Title2')} <br className="d-none d-xl-block" /> {t('home_main-Title3')}</h2>
										<p className="lead text-light mb-4">{t('home_main-paragraphy-text1')}</p>
									</div>
									
									<div className="col-lg-6 col-xl-5 my-auto">
										<ul className="nav nav-tabs nav-justified alternate bg-white rounded-top" id="myTab" role="tablist">
											<li className="nav-item" > 
												<span className="nav-link active text-white bg-primary" 
												id="send-money-tab" 
												data-bs-toggle="tab" 
												href="#send-money" 
												role="tab" 
												aria-controls="send-money" 
												aria-selected="true"
												>
													<span>Send Money</span>	
													{/* <span className="fw-600 text-8">1GBP = 200NGN</span> */}
													
												</span>
											</li>
										</ul>
										<div className="tab-content p-4 bg-white rounded-bottom" id="myTabContent">
											<div className="tab-pane fade show active" id="send-money" role="tabpanel" aria-labelledby="send-money-tab">
												<form id="form-send-money" method="post">
													<div className="">
														<label htmlFor="youSend" className="form-label">You Send from</label>
														<div className="input-group">
															<span className="input-group-text form-control p-0">
																<div className="dropdown bootstrap-select bg-transparent form-control dropup">
																	<select 
																		id="youSendCurrency" 
																		className="selectpicker bg-transparent form-control" 
																		data-style="form-select bg-transparent border-0" 
																		data-container="body" 
																		data-live-search="true" 
																		required="" 
																		tabIndex="null">
																		<optgroup label="Popular Currency">
																			<option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">USD</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																		</optgroup>
																		<option data-divider="true"></option>
																		<optgroup label="Other Currency">
																			<option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
																			<option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
																			<option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
																			<option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
																			<option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
																			<option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
																			<option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
																			<option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
																			<option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
																			<option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
																			<option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
																			<option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
																			<option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
																			<option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
																			<option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
																			<option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
																			<option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
																			<option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
																			<option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
																			<option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																			<option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
																			<option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
																			<option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
																			<option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
																			<option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
																			<option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
																			<option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
																			<option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
																			<option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
																			<option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
																			<option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
																			<option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
																			<option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
																			<option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
																			<option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
																			<option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
																			<option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
																			<option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
																			<option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
																			<option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
																			<option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
																			<option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
																			<option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
																			<option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
																			<option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
																		</optgroup>
																	</select>
																	<button 
																		type="button" 
																		tabIndex="-1" 
																		className="btn dropdown-toggle bs-placeholder form-select bg-transparent border-0 show" 
																		data-bs-toggle="dropdown" 
																		role="combobox" 
																		aria-owns="bs-select-1" 
																		aria-haspopup="listbox" 
																		aria-expanded="true" 
																		title="USD" 
																		data-id="youSendCurrency">
																		<div className="filter-option">
																			<div className="filter-option-inner">
																				<div className="filter-option-inner-inner">
																					<i className=" currency-flag currency-flag-gbp me-1"></i>&nbsp;United Kingdom
																				</div>
																			</div>
																		</div>
																	</button>
																</div>
															</span>
														</div>
													</div>
													<div className="mb-3 ">
														<div className="input-group mt-1">
																<input 
																	type="text" 
																	className="form-control" 
																	data-bv-field="youSend" 
																	id="youSend" 
																	value="1,000" 
																	placeholder="Enter amount"
																/>
															<span className="input-group-text p-0">
																<div className="dropdown bootstrap-select bg-transparent form-control dropup">
																	<select 
																		id="youSendCurrency" 
																		className="selectpicker bg-transparent form-control" 
																		data-style="form-select bg-transparent border-0" 
																		data-container="body" 
																		data-live-search="true" 
																		required="" 
																		tabIndex="null">
																		<optgroup label="Popular Currency">
																			<option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">USD</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																		</optgroup>
																		<option data-divider="true"></option>
																		<select label="Other Currency">
																			<option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
																			<option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
																			<option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
																			<option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
																			<option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
																			<option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
																			<option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
																			<option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
																			<option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
																			<option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
																			<option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
																			<option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
																			<option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
																			<option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
																			<option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
																			<option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
																			<option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
																			<option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
																			<option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
																			<option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																			<option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
																			<option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
																			<option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
																			<option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
																			<option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
																			<option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
																			<option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
																			<option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
																			<option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
																			<option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
																			<option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
																			<option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
																			<option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
																			<option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
																			<option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
																			<option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
																			<option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
																			<option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
																			<option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
																			<option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
																			<option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
																			<option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
																			<option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
																			<option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
																			<option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
																		</select>
																	</select>
																	<button 
																		type="button" 
																		tabIndex="-1" 
																		className="btn dropdown-toggle bs-placeholder form-select bg-transparent border-0 show" 
																		data-bs-toggle="dropdown" 
																		role="combobox" 
																		aria-owns="bs-select-1" 
																		aria-haspopup="listbox" 
																		aria-expanded="true" 
																		title="USD" 
																		data-id="youSendCurrency">
																		<div className="filter-option">
																			<div className="filter-option-inner">
																				<div className="filter-option-inner-inner">
																					<i className=" currency-flag currency-flag-usd me-1"></i>&nbsp;USD
																				</div>
																			</div>
																		</div>
																	</button>
																</div>
															</span>
														</div>
													</div>
													<div className="">
														<label htmlFor="youSend" className="form-label">Beneficiary Country</label>
														<div className="input-group">
																{/* <input 
																	type="text" 
																	className="form-control" 
																	data-bv-field="youSend" 
																	id="youSend" 
																	value="1,000" 
																	placeholder="Enter amount"
																/> */}
															<span className="input-group-text form-control p-0">
																<div className="dropdown bootstrap-select bg-transparent form-control dropup">
																	<select 
																		id="youSendCurrency" 
																		className="selectpicker bg-transparent form-control" 
																		data-style="form-select bg-transparent border-0" 
																		data-container="body" 
																		data-live-search="true" 
																		required="" 
																		tabIndex="null">
																		<optgroup label="Popular Currency">
																			<option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">USD</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																		</optgroup>
																		<option data-divider="true"></option>
																		<select label="Other Currency">
																			<option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
																			<option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
																			<option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
																			<option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
																			<option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
																			<option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
																			<option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
																			<option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
																			<option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
																			<option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
																			<option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
																			<option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
																			<option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
																			<option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
																			<option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
																			<option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
																			<option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
																			<option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
																			<option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
																			<option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																			<option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
																			<option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
																			<option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
																			<option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
																			<option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
																			<option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
																			<option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
																			<option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
																			<option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
																			<option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
																			<option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
																			<option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
																			<option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
																			<option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
																			<option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
																			<option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
																			<option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
																			<option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
																			<option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
																			<option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
																			<option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
																			<option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
																			<option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
																			<option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
																			<option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
																		</select>
																	</select>
																	<button 
																		type="button" 
																		tabIndex="-1" 
																		className="btn dropdown-toggle bs-placeholder form-select bg-transparent border-0 show" 
																		data-bs-toggle="dropdown" 
																		role="combobox" 
																		aria-owns="bs-select-1" 
																		aria-haspopup="listbox" 
																		aria-expanded="true" 
																		title="USD" 
																		data-id="youSendCurrency">
																		<div className="filter-option">
																			<div className="filter-option-inner">
																				<div className="filter-option-inner-inner">
																					<i className=" currency-flag currency-flag-ngn me-1"></i>&nbsp;Nigeria
																				</div>
																			</div>
																		</div>
																	</button>
																</div>
															</span>
														</div>
													</div>
													<div className="mb-3">
														<div className="input-group mt-1">
																<input 
																	type="text" 
																	className="form-control" 
																	data-bv-field="youSend" 
																	id="youSend" 
																	value="468,780.65" 
																	placeholder="Enter amount"
																/>
															<span className="input-group-text p-0">
																<div className="dropdown bootstrap-select bg-transparent form-control dropup">
																	<select id="youSendCurrency" className="selectpicker bg-transparent form-control" data-style="form-select bg-transparent border-0" data-container="body" data-live-search="true" required="" tabIndex="null">
																		<optgroup label="Popular Currency">
																			<option data-icon="currency-flag currency-flag-usd me-1" data-subtext="United States dollar" value="">USD</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																		</optgroup>
																		<option data-divider="true"></option>
																		<optgroup label="Other Currency">
																			<option data-icon="currency-flag currency-flag-aed me-1" data-subtext="United Arab Emirates dirham" value="">AED</option>
																			<option data-icon="currency-flag currency-flag-ars me-1" data-subtext="Argentine peso" value="">ARS</option>
																			<option data-icon="currency-flag currency-flag-aud me-1" data-subtext="Australian dollar" value="">AUD</option>
																			<option data-icon="currency-flag currency-flag-bdt me-1" data-subtext="Bangladeshi taka" value="">BDT</option>
																			<option data-icon="currency-flag currency-flag-bgn me-1" data-subtext="Bulgarian lev" value="">BGN</option>
																			<option data-icon="currency-flag currency-flag-brl me-1" data-subtext="Brazilian real" value="">BRL</option>
																			<option data-icon="currency-flag currency-flag-cad me-1" data-subtext="Canadian dollar" value="">CAD</option>
																			<option data-icon="currency-flag currency-flag-chf me-1" data-subtext="Swiss franc" value="">CHF</option>
																			<option data-icon="currency-flag currency-flag-clp me-1" data-subtext="Chilean peso" value="">CLP</option>
																			<option data-icon="currency-flag currency-flag-cny me-1" data-subtext="Chinese yuan" value="">CNY</option>
																			<option data-icon="currency-flag currency-flag-czk me-1" data-subtext="Czech koruna" value="">CZK</option>
																			<option data-icon="currency-flag currency-flag-dkk me-1" data-subtext="Danish krone" value="">DKK</option>
																			<option data-icon="currency-flag currency-flag-egp me-1" data-subtext="Egyptian pound" value="">EGP</option>
																			<option data-icon="currency-flag currency-flag-eur me-1" data-subtext="Euro" value="">EUR</option>
																			<option data-icon="currency-flag currency-flag-gbp me-1" data-subtext="British pound" value="">GBP</option>
																			<option data-icon="currency-flag currency-flag-gel me-1" data-subtext="Georgian lari" value="">GEL</option>
																			<option data-icon="currency-flag currency-flag-ghs me-1" data-subtext="Ghanaian cedi" value="">GHS</option>
																			<option data-icon="currency-flag currency-flag-hkd me-1" data-subtext="Hong Kong dollar" value="">HKD</option>
																			<option data-icon="currency-flag currency-flag-hrk me-1" data-subtext="Croatian kuna" value="">HRK</option>
																			<option data-icon="currency-flag currency-flag-huf me-1" data-subtext="Hungarian forint" value="">HUF</option>
																			<option data-icon="currency-flag currency-flag-idr me-1" data-subtext="Indonesian rupiah" value="">IDR</option>
																			<option data-icon="currency-flag currency-flag-ils me-1" data-subtext="Israeli shekel" value="">ILS</option>
																			<option data-icon="currency-flag currency-flag-inr me-1" data-subtext="Indian rupee" value="">INR</option>
																			<option data-icon="currency-flag currency-flag-jpy me-1" data-subtext="Japanese yen" value="">JPY</option>
																			<option data-icon="currency-flag currency-flag-kes me-1" data-subtext="Kenyan shilling" value="">KES</option>
																			<option data-icon="currency-flag currency-flag-krw me-1" data-subtext="South Korean won" value="">KRW</option>
																			<option data-icon="currency-flag currency-flag-lkr me-1" data-subtext="Sri Lankan rupee" value="">LKR</option>
																			<option data-icon="currency-flag currency-flag-mad me-1" data-subtext="Moroccan dirham" value="">MAD</option>
																			<option data-icon="currency-flag currency-flag-mxn me-1" data-subtext="Mexican peso" value="">MXN</option>
																			<option data-icon="currency-flag currency-flag-myr me-1" data-subtext="Malaysian ringgit" value="">MYR</option>
																			<option data-icon="currency-flag currency-flag-ngn me-1" data-subtext="Nigerian naira" value="">NGN</option>
																			<option data-icon="currency-flag currency-flag-nok me-1" data-subtext="Norwegian krone" value="">NOK</option>
																			<option data-icon="currency-flag currency-flag-npr me-1" data-subtext="Nepalese rupee" value="">NPR</option>
																			<option data-icon="currency-flag currency-flag-nzd me-1" data-subtext="New Zealand dollar" value="">NZD</option>
																			<option data-icon="currency-flag currency-flag-pen me-1" data-subtext="Peruvian nuevo sol" value="">PEN</option>
																			<option data-icon="currency-flag currency-flag-php me-1" data-subtext="Philippine peso" value="">PHP</option>
																			<option data-icon="currency-flag currency-flag-pkr me-1" data-subtext="Pakistani rupee" value="">PKR</option>
																			<option data-icon="currency-flag currency-flag-pln me-1" data-subtext="Polish złoty" value="">PLN</option>
																			<option data-icon="currency-flag currency-flag-ron me-1" data-subtext="Romanian leu" value="">RON</option>
																			<option data-icon="currency-flag currency-flag-rub me-1" data-subtext="Russian rouble" value="">RUB</option>
																			<option data-icon="currency-flag currency-flag-sek me-1" data-subtext="Swedish krona" value="">SEK</option>
																			<option data-icon="currency-flag currency-flag-sgd me-1" data-subtext="Singapore dollar" value="">SGD</option>
																			<option data-icon="currency-flag currency-flag-thb me-1" data-subtext="Thai baht" value="">THB</option>
																			<option data-icon="currency-flag currency-flag-try me-1" data-subtext="Turkish lira" value="">TRY</option>
																			<option data-icon="currency-flag currency-flag-uah me-1" data-subtext="Ukrainian hryvnia" value="">UAH</option>
																			<option data-icon="currency-flag currency-flag-ugx me-1" data-subtext="Ugandan shilling" value="">UGX</option>
																			<option data-icon="currency-flag currency-flag-vnd me-1" data-subtext="Vietnamese dong" value="">VND</option>
																			<option data-icon="currency-flag currency-flag-zar me-1" data-subtext="South African rand" value="">ZAR</option>
																		</optgroup>
																	</select>
																	<button 
																		type="button" 
																		tabIndex="-1" 
																		className="btn dropdown-toggle bs-placeholder form-select bg-transparent border-0 show" 
																		data-bs-toggle="dropdown" 
																		role="combobox" 
																		aria-owns="bs-select-1" 
																		aria-haspopup="listbox" 
																		aria-expanded="true" 
																		title="USD" 
																		data-id="youSendCurrency">
																		<div className="filter-option">
																			<div className="filter-option-inner">
																				<div className="filter-option-inner-inner">
																					<i className=" currency-flag currency-flag-ngn me-1"></i>&nbsp;NGN
																				</div>
																			</div>
																		</div>
																	</button>
																</div>
															</span>
														</div>
													</div>
													<p className="text-muted mb-1">The Exchange Rate is <span className="fw-500">13 GBP</span></p>
													{/* <p className="text-muted">Total amount we'll convert - <span className="fw-500">993.87 GBP</span></p> */}
													<div className="d-grid">
														<Link className="btn btn-primary" to="/login">Continue</Link>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
            		{/* <!-- Send/Request Money End --> */}
					{/* </div> */}
					<section className="section bg-white">
						<div className="container">
							<h2 className="text-9 text-center">{t('content_unique_head')}</h2>
							<p className="lead text-center mb-5">{t('content_unique_paragraph')}.</p>
							<div className="row gy-5">
								<div className="col-sm-6 col-lg-3">
									<div className="featured-box text-center">
										<div className="featured-box-icon text-primary"> <i className="fas fa-hand-pointer"></i> </div>
										<h3>Easy to Use</h3>
										<p className="text-3 text-center">{t('content_unique_ways1_text')}.</p>
										<a href="#" className="btn-link text-3">{t('content_unique_ways1_ghostBtn')}<i className="fas fa-chevron-right text-1 ms-2"></i></a>
									</div>
								</div>
								<div className="col-sm-6 col-lg-3">
									<div className="featured-box text-center">
										<div className="featured-box-icon text-primary"> <i className="fas fa-share"></i> </div>
										<h3>{ t('content_unique_ways2_head') }</h3>
										<p className="text-3">{t('content_unique_ways2_text')}.</p>
										<a href="#" className="btn-link text-3">{t('content_unique_ways2_ghostBtn')}<i
											className="fas fa-chevron-right text-1 ms-2"></i></a>
									</div>
								</div>
								<div className="col-sm-6 col-lg-3">
									<div className="featured-box text-center">
										<div className="featured-box-icon text-primary"> <i className="fas fa-dollar-sign"></i> </div>
										<h3>{t('content_unique_ways3_head')}</h3>
										<p className="text-3">{t('content_unique_ways3_text')}.</p>
										<a href="#" className="btn-link text-3">{t('content_unique_ways3_ghostBtn')}<i
											className="fas fa-chevron-right text-1 ms-2"></i></a>
									</div>
								</div>
								<div className="col-sm-6 col-lg-3">
									<div className="featured-box text-center">
										<div className="featured-box-icon text-primary"> <i className="fas fa-lock"></i> </div>
										<h3>{t('content_unique_ways4_head')}</h3>
										<p className="text-3">{t('content_unique_ways4_text')}.</p>
										<a href="#" className="btn-link text-3">{t('content_unique_ways4_ghostBtn')}<i
											className="fas fa-chevron-right text-1 ms-2"></i></a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="container overflow-hidden">
							<div className="row g-5">
								<div className="col-lg-5 col-xl-6 d-flex">
									<div className="my-auto">
										<h2 className="text-9">{t('Borderless_head')}.</h2>
										<p className="text-4">{t('Borderless_text')}</p>
										<a href="landing-page-send.html" className="btn-link text-4">{t('Borderless_btn')}<i
											className="fas fa-chevron-right text-2 ms-2"></i></a>
									</div>
								</div>
								<div className="col-lg-7 col-xl-6">
									<div className="row g-4 banner style-2 justify-content-center">
										<div className="col-12 col-sm-6 text-center">
											<div className="item rounded shadow d-inline-block">
												<a href="#">
													<div className="caption rounded-bottom">
														<h2 className="text-5 fw-400 mb-0">{t('BorderlessImgText1')}</h2>
													</div>
													<div className="banner-mask"></div>
													<img className="img-fluid" src="/images/fbn-personalbanking-21.jpg" width="410"
														height="350" alt="banner" />
												</a>
											</div>
										</div>
										<div className="col-12 col-sm-6 text-center">
											<div className="item rounded shadow d-inline-block">
												<a href="#">
													<div className="caption rounded-bottom">
														<h2 className="text-5 fw-400 mb-0">{t('BorderlessImgText2')}</h2>
													</div>
													<div className="banner-mask"></div>
													<img className="img-fluid" src="/images/First-Bank-Nigeria-15.jpg" width="410"
														height="400" alt="banner" />
												</a>
											</div>
										</div>
										<div className="col-12 col-sm-6 mb-sm-0 text-center">
											<div className="item rounded shadow d-inline-block">
												<a href="">
													<div className="caption rounded-bottom">
														<h2 className="text-5 fw-400 mb-0">{t('BorderlessImgText3')}</h2>
													</div>
													<div className="banner-mask"></div>
													<img className="img-fluid" src="/images/fbn-personal-187.jpg" width="410"
														height="350" alt="banner" />
												</a>
											</div>
										</div>
										<div className="col-12 col-sm-6 text-center">
											<div className="item rounded shadow d-inline-block">
												<a href="#">
													<div className="caption rounded-bottom">
														<h2 className="text-5 fw-400 mb-0">{t('BorderlessImgText4')}</h2>
													</div>
													<div className="banner-mask"></div>
													<img className="img-fluid" src="/images/First-Bank-Nigeria-Banking-21.jpg"
														width="410" height="350" alt="banner" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section bg-white">
						<div className="container">
							<h2 className="text-9 text-center">{t('ServiceWeCanOffer_title')}</h2>
							<p className="lead text-center mb-5">{t('ServiceWeCanOffer_subtext')}.</p>
							<div className="row g-4">
								<div className="col-sm-6 col-lg-3">
									<a href="#">
										<div className="featured-box style-5 rounded">
											<div className="featured-box-icon text-primary"> <i className="fas fa-share-square"></i>
											</div>
											<h3>{t('ServiceWeCanOffer_card1')}</h3>
										</div>
									</a>
								</div>
								<div className="col-sm-6 col-lg-3">
									<a href="#">
										<div className="featured-box style-5 rounded">
											<div className="featured-box-icon text-primary"> <i className="fas fa-check-square"></i>
											</div>
											<h3>{t('ServiceWeCanOffer_card2')}</h3>
										</div>
									</a>
								</div>
								<div className="col-sm-6 col-lg-3">
									<a href="#">
										<div className="featured-box style-5 rounded">
											<div className="featured-box-icon text-primary"> <i className="fas fa-user-friends"></i>
											</div>
											<h3>{t('ServiceWeCanOffer_card3')}</h3>
										</div>
									</a>
								</div>
								<div className="col-sm-6 col-lg-3">
									<a href="#">
										<div className="featured-box style-5 rounded">
											<div className="featured-box-icon text-primary"> <i className="fas fa-shopping-bag"></i>
											</div>
											<h3>{t('ServiceWeCanOffer_card4')}</h3>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
					<section className="section bg-white">
						<div className="container">
							<h2 className="text-9 text-center">{t("Testimonials_title")}</h2>
							<p className="lead text-center mb-4">{t('Testimonials_subtext')}</p>
							{/* <div className="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true"
								data-margin="30" data-slideby="2" data-stagepadding="5" data-items-xs="1" data-items-sm="1"
								data-items-md="2" data-items-lg="2"> */}
								<OwlCarousel className="owl-carousel owl-theme single-slideshow"
								items={1}
								autoplay
								loop
								>
								<div className="item">
									<div className="testimonial rounded text-center p-4">
										<p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
										<p className="text-4">{t('Testimonials_1')}</p>
										<strong className="d-block fw-500">{t('Testimonials_person')}</strong> <span className="text-muted">{t('Testimonials_person_span')}</span>
									</div>
								</div>
								<div className="item">
									<div className="testimonial rounded text-center p-4">
										<p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
										<p className="text-4">{t('Testimonials_2')}</p>
										<strong className="d-block fw-500">{t('Testimonials_person2')}</strong> <span className="text-muted">{t('Testimonials_person2_span')}</span>
									</div>
								</div>
								<div className="item">
									<div className="testimonial rounded text-center p-4">
										<p className="text-9 text-muted opacity-2 lh-base mb-0"><i className="fa fa-quote-left"></i></p>
										<p className="text-4">{t('Testimonials_3')}</p>
										<strong className="d-block fw-500">{t('Testimonials_person3')}</strong> <span className="text-muted">{t('Testimonials_person3_span')}</span>
									</div>
								</div>
							</OwlCarousel>
							{/* </div> */}
							<div className="text-center mt-4"><a href="#" className="btn-link text-4">{t('Testimonials_btn')}<i
								className="fas fa-chevron-right text-2 ms-2"></i></a></div>
						</div>
					</section>
					<section className="section pt-5 pb-0" style={{ backgroundColor: "#003b65" }}>
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-9 col-xl-8 mx-auto">
									<div className="row">
										<div className="col-sm-12 text-xl-center pb-lg-5 my-auto order-0 order-sm-1 text-center text-sm-start">
											<h2 className="text-9 fw-400 text-uppercase mb-3 text-white">{t('Downloads_the_app')}</h2>
											<p className="lead text-white-50">{t('Downloads_the_app_title')}.</p>
											<div className="pt-2 mb-4 mb-sm-0">
												<a className="me-3" href=""><img className="img-fluid" alt=""
													src="/images/app-store.png" /></a>
												<a href=""><img className="img-fluid" alt="" src="/images/google-play-store.png" /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<footer id="footer" className="pb-4">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">{t('footer_link1_head')}</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_link1_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_link2_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_link3_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_link4_f1')}</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">{t('footer_services_head')}</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_services_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_services_f2')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_services_f3')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_services_f4')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_services_f5')}</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">{t('footer_support_head')}</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_support_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_support_f2')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_support_f3')}</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">{t('footer_social_head')}</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_social_f1')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_social_f2')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_social_f3')}</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">{t('footer_social_f4')}</a></li>
								</ul>
							</div>
							<div className="col-12 col-lg-3">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">{t('footer_subscribe_head')}</h4>
								<p>{t('footer_subscribe_f1')}</p>
								<div className="input-group newsletter">
									<input className="form-control" placeholder={t('footer_subscribe_f2')} name="newsletterEmail" id="newsletterEmail" type="text" />
									<button className="btn btn-secondary shadow-none px-3" type="button" data-bs-toggle="tooltip"
										title="Subscribe"><i className="fas fa-paper-plane"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-copyright pt-4 mt-4">
						<div className="container">
							<div className="row">
								<div className="col-lg">
									<p className="text-center text-lg-start mb-2 mb-lg-0">{t('footer_bottom_1')}</p>
								</div>
								<div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
									<ul className="nav justify-content-center">
										<li className="nav-item"> <a className="nav-link active" href="#">{t('footer_bottom_2')}</a></li>
										<li className="nav-item"> <a className="nav-link" href="#">{t('footer_bottom_3')}</a></li>
										<li className="nav-item"> <Link className="nav-link" to="/login">{t('footer_bottom_4')}</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>

			</div>

			<a id="back-to-top" data-bs-toggle="tooltip" title="Back to Top" href="#"><i className="fa fa-chevron-up"></i></a>
			<div className="modal fade" id="videoModal" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-lg modal-dialog-centered" role="document">
					<div className="modal-content bg-transparent border-0">
						<button type="button" className="btn-close btn-close-white ms-auto me-n3" data-bs-dismiss="modal"
							aria-label="Close"></button>
						<div className="modal-body p-0">
							<div className="ratio ratio-16x9">
								<iframe id="video" src="" allow="autoplay;" allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home