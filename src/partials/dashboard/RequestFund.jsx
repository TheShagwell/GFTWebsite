import React from 'react'
import { useNavigate } from 'react-router-dom' 


const RequestFund = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-lg-11 mx-auto">
            <div className="row widget-steps">
              <div className="col-4 step active">
                <div className="step-name">Details</div>
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <a href="#" className="step-dot"></a>
              </div>
              <div className="col-4 step disabled">
                <div className="step-name">Confirm</div>
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <a href="#" className="step-dot"></a>
              </div>
              <div className="col-4 step disabled">
                <div className="step-name">Success</div>
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
                <a href="#" className="step-dot"></a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="fw-400 text-center mt-3">Request Money</h2>
        <p className="lead text-center mb-4">Request your payment on anytime, anywhere in the world.</p>
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
              <h3 className="text-5 fw-400 mb-3 mb-sm-4">Payer Details</h3>
              <hr className="mx-n3 mx-sm-n5 mb-4" />
              <form id="form-send-money" method="post">
                <div className="mb-3">
                  <label htmlFor="payerName" className="form-label">Name</label>
                  <input type="text" className="form-control" data-bv-field="payerName"
                    id="payerName" required placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailID" className="form-label">Email</label>
                  <input type="text" className="form-control" data-bv-field="emailid"
                    id="emailID" required placeholder="Enter Email Address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCountry" className="form-label">Country</label>
                  <select className="form-select" id="inputCountry" name="country_id">
                  <option value="">Select Country</option>         
                  <option value="237">Democratic Republic of Congo</option>
                  <option value="79">Gambia</option>
                  <option value="82">Ghana</option>
                  <option value="90">Guinea</option>
                  <option value="91">Guinea-Bissau</option>
                  <option value="156">Nigeria</option>
                  <option value="185">Senegal</option>
                  <option value="210">Togo</option>
                  <option value="238">Zambia</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" data-bv-field="amount" id="amount"
                      value="1,000.00" placeholder="" />
                    <span className="input-group-text p-0">
                      <select id="recipientCurrency"
                        data-style="form-select bg-transparent border-0" data-container="body"
                        data-live-search="true" className="selectpicker form-control bg-transparent"
                        required="">
                        <optgroup label="Popular Currency">
                          <option data-icon="currency-flag currency-flag-usd me-1"
                            data-subtext="United States dollar" value="">USD</option>
                          <option data-icon="currency-flag currency-flag-aud me-1"
                            data-subtext="Australian dollar" selected="selected" value="">
                            AUD</option>
                          <option data-icon="currency-flag currency-flag-inr me-1"
                            data-subtext="Indian rupee" value="">INR</option>
                        </optgroup>
                        <option value="" data-divider="true">divider</option>
                        <optgroup label="Other Currency">
                          <option data-icon="currency-flag currency-flag-aed me-1"
                            data-subtext="United Arab Emirates dirham" value="">AED</option>
                          <option data-icon="currency-flag currency-flag-ars me-1"
                            data-subtext="Argentine peso" value="">ARS</option>
                          <option data-icon="currency-flag currency-flag-aud me-1"
                            data-subtext="Australian dollar" value="">AUD</option>
                          <option data-icon="currency-flag currency-flag-bdt me-1"
                            data-subtext="Bangladeshi taka" value="">BDT</option>
                          <option data-icon="currency-flag currency-flag-bgn me-1"
                            data-subtext="Bulgarian lev" value="">BGN</option>
                          <option data-icon="currency-flag currency-flag-brl me-1"
                            data-subtext="Brazilian real" value="">BRL</option>
                          <option data-icon="currency-flag currency-flag-cad me-1"
                            data-subtext="Canadian dollar" value="">CAD</option>
                          <option data-icon="currency-flag currency-flag-chf me-1"
                            data-subtext="Swiss franc" value="">CHF</option>
                          <option data-icon="currency-flag currency-flag-clp me-1"
                            data-subtext="Chilean peso" value="">CLP</option>
                          <option data-icon="currency-flag currency-flag-cny me-1"
                            data-subtext="Chinese yuan" value="">CNY</option>
                          <option data-icon="currency-flag currency-flag-czk me-1"
                            data-subtext="Czech koruna" value="">CZK</option>
                          <option data-icon="currency-flag currency-flag-dkk me-1"
                            data-subtext="Danish krone" value="">DKK</option>
                          <option data-icon="currency-flag currency-flag-egp me-1"
                            data-subtext="Egyptian pound" value="">EGP</option>
                          <option data-icon="currency-flag currency-flag-eur me-1"
                            data-subtext="Euro" value="">EUR</option>
                          <option data-icon="currency-flag currency-flag-gbp me-1"
                            data-subtext="British pound" value="">GBP</option>
                          <option data-icon="currency-flag currency-flag-gel me-1"
                            data-subtext="Georgian lari" value="">GEL</option>
                          <option data-icon="currency-flag currency-flag-ghs me-1"
                            data-subtext="Ghanaian cedi" value="">GHS</option>
                          <option data-icon="currency-flag currency-flag-hkd me-1"
                            data-subtext="Hong Kong dollar" value="">HKD</option>
                          <option data-icon="currency-flag currency-flag-hrk me-1"
                            data-subtext="Croatian kuna" value="">HRK</option>
                          <option data-icon="currency-flag currency-flag-huf me-1"
                            data-subtext="Hungarian forint" value="">HUF</option>
                          <option data-icon="currency-flag currency-flag-idr me-1"
                            data-subtext="Indonesian rupiah" value="">IDR</option>
                          <option data-icon="currency-flag currency-flag-ils me-1"
                            data-subtext="Israeli shekel" value="">ILS</option>
                          <option data-icon="currency-flag currency-flag-inr me-1"
                            data-subtext="Indian rupee" value="">INR</option>
                          <option data-icon="currency-flag currency-flag-jpy me-1"
                            data-subtext="Japanese yen" value="">JPY</option>
                          <option data-icon="currency-flag currency-flag-kes me-1"
                            data-subtext="Kenyan shilling" value="">KES</option>
                          <option data-icon="currency-flag currency-flag-krw me-1"
                            data-subtext="South Korean won" value="">KRW</option>
                          <option data-icon="currency-flag currency-flag-lkr me-1"
                            data-subtext="Sri Lankan rupee" value="">LKR</option>
                          <option data-icon="currency-flag currency-flag-mad me-1"
                            data-subtext="Moroccan dirham" value="">MAD</option>
                          <option data-icon="currency-flag currency-flag-mxn me-1"
                            data-subtext="Mexican peso" value="">MXN</option>
                          <option data-icon="currency-flag currency-flag-myr me-1"
                            data-subtext="Malaysian ringgit" value="">MYR</option>
                          <option data-icon="currency-flag currency-flag-ngn me-1"
                            data-subtext="Nigerian naira" value="">NGN</option>
                          <option data-icon="currency-flag currency-flag-nok me-1"
                            data-subtext="Norwegian krone" value="">NOK</option>
                          <option data-icon="currency-flag currency-flag-npr me-1"
                            data-subtext="Nepalese rupee" value="">NPR</option>
                          <option data-icon="currency-flag currency-flag-nzd me-1"
                            data-subtext="New Zealand dollar" value="">NZD</option>
                          <option data-icon="currency-flag currency-flag-pen me-1"
                            data-subtext="Peruvian nuevo sol" value="">PEN</option>
                          <option data-icon="currency-flag currency-flag-php me-1"
                            data-subtext="Philippine peso" value="">PHP</option>
                          <option data-icon="currency-flag currency-flag-pkr me-1"
                            data-subtext="Pakistani rupee" value="">PKR</option>
                          <option data-icon="currency-flag currency-flag-pln me-1"
                            data-subtext="Polish złoty" value="">PLN</option>
                          <option data-icon="currency-flag currency-flag-ron me-1"
                            data-subtext="Romanian leu" value="">RON</option>
                          <option data-icon="currency-flag currency-flag-rub me-1"
                            data-subtext="Russian rouble" value="">RUB</option>
                          <option data-icon="currency-flag currency-flag-sek me-1"
                            data-subtext="Swedish krona" value="">SEK</option>
                          <option data-icon="currency-flag currency-flag-sgd me-1"
                            data-subtext="Singapore dollar" value="">SGD</option>
                          <option data-icon="currency-flag currency-flag-thb me-1"
                            data-subtext="Thai baht" value="">THB</option>
                          <option data-icon="currency-flag currency-flag-try me-1"
                            data-subtext="Turkish lira" value="">TRY</option>
                          <option data-icon="currency-flag currency-flag-uah me-1"
                            data-subtext="Ukrainian hryvnia" value="">UAH</option>
                          <option data-icon="currency-flag currency-flag-ugx me-1"
                            data-subtext="Ugandan shilling" value="">UGX</option>
                          <option data-icon="currency-flag currency-flag-vnd me-1"
                            data-subtext="Vietnamese dong" value="">VND</option>
                          <option data-icon="currency-flag currency-flag-zar me-1"
                            data-subtext="South African rand" value="">ZAR</option>
                        </optgroup>
                      </select>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" rows="4" id="description" required
                    placeholder="Payment Description"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="paymentDue" className="form-label">Payment due by</label>
                  <div className="position-relative">
                    <input id="paymentDue" type="text" className="form-control" required
                      placeholder="Payment Due Date" />
                    <span className="icon-inside"><i className="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button className="btn btn-primary" onClick={() => navigate('/dashboard/fund/request/confirm')}>
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestFund