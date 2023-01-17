import React from 'react'
import { Link } from 'react-router-dom';

const SendMoney = () => {
    return (
        <div>
            <div id="main-wrapper">
                <header id="header">
                            <div className="container">
                                <div className="header-row">
                                    <div className="header-column justify-content-between">
                                        <div className="logo me-3">
                                            <a className="d-flex" href="index.html">
                                                <img src="/images/First-Bank.svg" width="121" height="33" alt="First-bank-logo" />
                                            </a>
                                        </div>

                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
                                        <nav className="primary-menu navbar navbar-expand-lg">
                                            <div id="header-nav" className="collapse navbar-collapse">
                                                <ul className="navbar-nav me-auto">
                                                    <li><Link to="/AboutUs">Products</Link></li>
                                                    <li><Link to="/sendmoney">Send</Link></li>
                                                    <li><Link to="/receivemoney">Receive</Link></li>
                                                    <li><Link to="/documentation">Documentation</Link></li>
                                                    <li><Link to="/company">Company</Link></li>
                                                    <li><Link to="../Dashboard">Dashboard</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="header-column justify-content-end">
                                        <nav className="login-signup navbar navbar-expand">
                                            <ul className="navbar-nav">
                                                <li className="align-items-center h-auto ms-sm-3">
                                                    <Link className='text-primary' to="/login">Login</Link>
                                                </li>
                                                <li className="align-items-center h-auto ms-sm-3">
                                                    <Link className="btn btn-primary" to="/register">Register</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                </header>

            {/* <!-- Content ============================================= --> */}
            <div id="content">

                {/* <!-- Send Money ============================================= --> */}
                <section className="hero-wrap">
                    {/* <div className="hero-mask opacity-7 bg-dark"></div> */}
                    <div className="hero-bg" style={{ backgroundImage: "url('/images/Register--lady.jpg')", backgroundPosition: '73% 87%' }}></div>
                    <div className="hero-content d-flex flex-column fullscreen-with-header">
                        <div className="container my-auto py-5">
                            <div className="row">
                                <div className="col-lg-6 col-xl-7 my-auto text-center text-lg-start pb-5 pb-lg-0">
                                    <h2 className="text-17 text-white"><span className="fw-400 text-15">A better way to</span> <br /> Send Money</h2>
                                    <p className="text-4 text-white mb-4">Send money with a better exchange rate and avoid excessive <br /> bank fees.</p>
                                    <Link to="/login" className="btn btn-primary m-2">Send Cash Seamlessly</Link> </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Send Money End --> */}

                {/* <!-- How it works ============================================= --> */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center"> The simple way to send money</h2>
                        <p className="lead text-center mb-5">Sending money across Africa made easy and with greater features.</p>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light"><span className="w-100 text-20 fw-500">1</span></div>
                                    <h3>Login Your Account</h3>
                                    <p className="text-3">Become a register user first, then log in to your account and follow each step.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light"><span className="w-100 text-20 fw-500">2</span></div>
                                    <h3>Check-in your Beneficiary</h3>
                                    <p className="text-3">Enter your beneficiary complete details then add an amount with currency to send securely.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="featured-box style-3">
                                    <div className="featured-box-icon text-light"><span className="w-100 text-20 fw-500">3</span></div>
                                    <h3>Send Money</h3>
                                    <p className="text-3">After sending money, the beneficiary will be notified via an email when money has been transferred to their account. And follow the step aftermath</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-3"><a href="#" className="btn btn-outline-primary shadow-none text-uppercase">Sign up Now</a></div>
                    </div>
                </section>
                {/* <!-- How it works End --> */}

                {/* <!-- Why choose us============================================= --> */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">Why choose First Bank Global Transfer Fund</h2>
                        <p className="lead text-center mb-5">Here’s Top 4 interesting reasons why using this application.</p>
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="hero-wrap section h-100 p-5 rounded">
                                    <div className="hero-mask rounded opacity-6 bg-dark"></div>
                                    <div className="hero-bg rounded" style={{backgroundImage:`url(./images/bg/image-6.jpg')`}}></div>
                                    <div className="hero-content">
                                        <h2 className="text-6 text-white mb-3">Why First Bank Global Transfer Fund?</h2>
                                        <p className="text-light mb-5">With the Global Transfer Fund, you can send money across Africa countries directly to the beneficiary account securely.</p>
                                        <h2 className="text-6 text-white mb-3">Send Money with Payyed</h2>
                                        <p className="text-light">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</p>
                                        <p className="text-light mb-0">Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>Over 8+ Africa Countries</h3>
                                    <p>This application will be used over different Africa countries.</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>Lower Fees</h3>
                                    <p>You can transfer fund with no excess charges.</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>Easy to Use</h3>
                                    <p>With our customer-friendly dashboard, you can use this service anywhere.</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>Faster Payments</h3>
                                    <p>The service comes with super fast payments.</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>100% secure</h3>
                                    <p>The service is highly secured with tailored details on how to use it.</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-check-circle"></i> </div>
                                    <h3>24/7 customer service</h3>
                                    <p>Our service lines are always availble and youcan walk-in to any of four branch nationwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Why choose us End --> */}

                {/* <!-- How work============================================= --> */}
                <section className="hero-wrap section shadow-md">
                    <div className="hero-mask opacity-9 bg-primary"></div>
                    <div className="hero-bg" style={{backgroundImage:`url('images/bg/image-1.jpg')`}}></div>
                    <div className="hero-content my-3 my-lg-5">
                        <div className="container text-center">
                            <h2 className="text-10 text-white mb-4 mb-lg-5">How does send money work?</h2>
                            <a className="video-btn d-inline-flex" href="#" data-src="https://www.youtube.com/embed/7e90gBu4pas" data-bs-toggle="modal" data-bs-target="#videoModal"> <span className="playButton playButton-pulsing bg-white m-auto"><i className="fas fa-play"></i></span> </a>
                        </div>
                    </div>
                </section>
                {/* <!-- How work End --> */}

                {/* <!-- Testimonial   ============================================= --> */}
                <section className="section">
                    <div className="container">
                        <h2 className="text-9 text-center">What people say about Payyed</h2>
                        <p className="lead text-center mb-4">A payments experience people love to talk about</p>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 mx-auto">
                                <div className="owl-carousel owl-theme" data-autoplay="true" data-nav="true" data-loop="true" data-margin="30" data-stagepadding="5" data-items-xs="1" data-items-sm="1" data-items-md="1" data-items-lg="1">
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”</p>
                                            <strong className="d-block fw-500">Jay Shah</strong> <span className="text-muted">Founder at Icomatic Pvt Ltd</span> </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”</p>
                                            <strong className="d-block fw-500">Patrick Cary</strong> <span className="text-muted">Freelancer from USA</span> </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“Fast easy to use transfers to a different currency. Much better value that the banks.”</p>
                                            <strong className="d-block fw-500">De Mortel</strong> <span className="text-muted">Online Retail</span> </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.”</p>
                                            <strong className="d-block fw-500">Chris Tom</strong> <span className="text-muted">User from UK</span> </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“It's a real good idea to manage your money by payyed. The rates are fair and you can carry out the transactions without worrying!”</p>
                                            <strong className="d-block fw-500">Mauri Lindberg</strong> <span className="text-muted">Freelancer from Australia</span> </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial rounded text-center p-4">
                                            <p className="text-9 text-muted opacity-2 mb-2"><i className="fa fa-quote-left"></i></p>
                                            <p className="text-4">“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.”</p>
                                            <strong className="d-block fw-500">Dennis Jacques</strong> <span className="text-muted">User from USA</span> </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more people review<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Testimonial end --> */}

                {/* <!-- Frequently asked questions    ============================================= --> */}
                <section className="section bg-white">
                    <div className="container">
                        <h2 className="text-9 text-center">Frequently Asked Questions</h2>
                        <p className="lead text-center mb-4 mb-sm-5">Can't find it here? Check out our <a className="btn-link" href="help.html">Help center</a></p>
                        <div className="row">
                            <div className="col-md-10 col-lg-8 mx-auto">
                                <hr className="mb-0" />
                                <div className="accordion accordion-flush arrow-end" id="popularTopics">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What is Payyed?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How to send money online?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">
                                                <p>Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Lisque persius interesset his et, in quot quidam persequeris
                                                    vim, ad mea essent possim iriure. Ad vegan excepteur butcher vice lomo.</p>
                                                Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Ad vegan excepteur butcher vice lomo.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Is my money safe with Payyed?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How much fees does Payyed charge?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">
                                                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                                                it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What is the fastest way to send money abroad?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseFive">
                                                Can I open an Payyed account for business?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#popularTopics">
                                            <div className="accordion-body">
                                                Enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-0" />
                            </div>
                        </div>
                        <div className="text-center mt-4"><a href="#" className="btn-link text-4">See more FAQ<i className="fas fa-chevron-right text-2 ms-2"></i></a></div>
                    </div>
                </section>
                {/* <!-- Frequently asked questions end --> */}

                {/* <!-- Special Offer    ============================================= --> */}
                <section className="hero-wrap py-5">
                    <div className="hero-mask opacity-8 bg-dark"></div>
                    <div className="hero-bg" style={{backgroundImage:`url('images/bg/image-2.jpg')`}}></div>
                    <div className="hero-content">
                        <div className="container d-md-flex text-center text-md-start align-items-center justify-content-center">
                            <h2 className="text-6 fw-400 text-white mb-3 mb-md-0">Sign up today and get your first transaction fee free!</h2>
                            <a href="#" className="btn btn-outline-light text-nowrap ms-0 ms-md-4">Sign up Now</a> </div>
                    </div>
                </section>
                {/* <!-- Special Offer end --> */}
            </div>
            {/* <!-- Content end --> */}   
            <footer id="footer" className="pb-4">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Information</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">About Us</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Careers</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Affiliate</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Fees</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Services</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">Transfer Money</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Send Money</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Receive Money</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Online Shopping</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Pay bill</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Help Center</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">Contact Us</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Support</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">Help</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md mb-3 mb-md-0">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Keep in touch</h4>
								<ul className="nav flex-column">
									<li className="nav-item"> <a className="nav-link" href="#">facebook</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">twitter</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">google</a></li>
									<li className="nav-item"> <a className="nav-link" href="#">youtube</a></li>
								</ul>
							</div>
							<div className="col-12 col-lg-3">
								<h4 className="text-3 text-muted text-uppercase fw-400 mb-3">Subscribe</h4>
								<p>Subscribe to receive latest news and updates.</p>
								<div className="input-group newsletter">
									<input className="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
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
									<p className="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a
										href="#">FirstBank of Nigeria</a>. All Rights Reserved.</p>
								</div>
								<div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
									<ul className="nav justify-content-center">
										<li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
										<li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
										<li className="nav-item"> <Link className="nav-link" to="/login">Privacy</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>      
        </div>
        </div>
    )
}

export default SendMoney;
