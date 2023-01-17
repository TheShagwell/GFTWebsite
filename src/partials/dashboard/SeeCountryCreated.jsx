import React from 'react'

const SendFund = () => {
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
        <h2 className="fw-400 text-center mt-3">Send Money</h2>
        <p className="lead text-center mb-4">Send your money on anytime, anywhere in the world.</p>
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
            <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
              <h3 className="text-5 fw-400 mb-3 mb-sm-4">Personal Details</h3>
              <hr className="mx-n3 mx-sm-n5 mb-4" />
              <form id="form-send-money" method="post">
                <div className="mb-3">
                  <label htmlfor="Firstname" className="form-label">Beneficiary Firstname</label>
                  <input type="text" value="" className="form-control" data-bv-field="name" id="Firstname"
                    required placeholder="Enter Beneficiary Firstname" />
                </div>
                <div className="mb-3">
                  <label htmlfor="Lastname" className="form-label">Beneficiary Lastname</label>
                  <input type="text" value="" className="form-control" data-bv-field="name" id="Lastname"
                    required placeholder="Enter Beneficiary Lastname" />
                </div>
                <div className="mb-3">
                  <label htmlfor="Address" className="form-label">Beneficiary Address</label>
                  <input type="text" value="" className="form-control" data-bv-field="address"
                    id="Address" required placeholder="Enter Beneficiary Address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCountry" className="form-label">Country</label>
                  <select className="form-select" id="inputCountry" name="country_id">
                    <option value="">Select Country</option>
                    <option value="244">Aaland Islands</option>
                    <option value="1">Afghanistan</option>
                    <option value="2">Albania</option>
                    <option value="3">Algeria</option>
                    <option value="4">American Samoa</option>
                    <option value="5">Andorra</option>
                    <option value="6">Angola</option>
                    <option value="7">Anguilla</option>
                    <option value="8">Antarctica</option>
                    <option value="9">Antigua and Barbuda</option>
                    <option value="10">Argentina</option>
                    <option value="11">Armenia</option>
                    <option value="12">Aruba</option>
                    <option value="252">Ascension Island (British)</option>
                    <option value="13">Australia</option>
                    <option value="14">Austria</option>
                    <option value="15">Azerbaijan</option>
                    <option value="16">Bahamas</option>
                    <option value="17">Bahrain</option>
                    <option value="18">Bangladesh</option>
                    <option value="19">Barbados</option>
                    <option value="20">Belarus</option>
                    <option value="21">Belgium</option>
                    <option value="22">Belize</option>
                    <option value="23">Benin</option>
                    <option value="24">Bermuda</option>
                    <option value="25">Bhutan</option>
                    <option value="26">Bolivia</option>
                    <option value="245">Bonaire, Sint Eustatius and Saba</option>
                    <option value="27">Bosnia and Herzegovina</option>
                    <option value="28">Botswana</option>
                    <option value="29">Bouvet Island</option>
                    <option value="30">Brazil</option>
                    <option value="31">British Indian Ocean Territory</option>
                    <option value="32">Brunei Darussalam</option>
                    <option value="33">Bulgaria</option>
                    <option value="34">Burkina Faso</option>
                    <option value="35">Burundi</option>
                    <option value="36">Cambodia</option>
                    <option value="37">Cameroon</option>
                    <option value="38">Canada</option>
                    <option value="251">Canary Islands</option>
                    <option value="39">Cape Verde</option>
                    <option value="40">Cayman Islands</option>
                    <option value="41">Central African Republic</option>
                    <option value="42">Chad</option>
                    <option value="43">Chile</option>
                    <option value="44">China</option>
                    <option value="45">Christmas Island</option>
                    <option value="46">Cocos (Keeling) Islands</option>
                    <option value="47">Colombia</option>
                    <option value="48">Comoros</option>
                    <option value="49">Congo</option>
                    <option value="50">Cook Islands</option>
                    <option value="51">Costa Rica</option>
                    <option value="52">Cote D'Ivoire</option>
                    <option value="53">Croatia</option>
                    <option value="54">Cuba</option>
                    <option value="246">Curacao</option>
                    <option value="55">Cyprus</option>
                    <option value="56">Czech Republic</option>
                    <option value="237">Democratic Republic of Congo</option>
                    <option value="57">Denmark</option>
                    <option value="58">Djibouti</option>
                    <option value="59">Dominica</option>
                    <option value="60">Dominican Republic</option>
                    <option value="61">East Timor</option>
                    <option value="62">Ecuador</option>
                    <option value="63">Egypt</option>
                    <option value="64">El Salvador</option>
                    <option value="65">Equatorial Guinea</option>
                    <option value="66">Eritrea</option>
                    <option value="67">Estonia</option>
                    <option value="68">Ethiopia</option>
                    <option value="69">Falkland Islands (Malvinas)</option>
                    <option value="70">Faroe Islands</option>
                    <option value="71">Fiji</option>
                    <option value="72">Finland</option>
                    <option value="74">France, Metropolitan</option>
                    <option value="75">French Guiana</option>
                    <option value="76">French Polynesia</option>
                    <option value="77">French Southern Territories</option>
                    <option value="126">FYROM</option>
                    <option value="78">Gabon</option>
                    <option value="79">Gambia</option>
                    <option value="80">Georgia</option>
                    <option value="81">Germany</option>
                    <option value="82">Ghana</option>
                    <option value="83">Gibraltar</option>
                    <option value="84">Greece</option>
                    <option value="85">Greenland</option>
                    <option value="86">Grenada</option>
                    <option value="87">Guadeloupe</option>
                    <option value="88">Guam</option>
                    <option value="89">Guatemala</option>
                    <option value="256">Guernsey</option>
                    <option value="90">Guinea</option>
                    <option value="91">Guinea-Bissau</option>
                    <option value="92">Guyana</option>
                    <option value="93">Haiti</option>
                    <option value="94">Heard and Mc Donald Islands</option>
                    <option value="95">Honduras</option>
                    <option value="96">Hong Kong</option>
                    <option value="97">Hungary</option>
                    <option value="98">Iceland</option>
                    <option value="99">India</option>
                    <option value="100">Indonesia</option>
                    <option value="101">Iran (Islamic Republic of)</option>
                    <option value="102">Iraq</option>
                    <option value="103">Ireland</option>
                    <option value="254">Isle of Man</option>
                    <option value="104">Israel</option>
                    <option value="105">Italy</option>
                    <option value="106">Jamaica</option>
                    <option value="107">Japan</option>
                    <option value="257">Jersey</option>
                    <option value="108">Jordan</option>
                    <option value="109">Kazakhstan</option>
                    <option value="110">Kenya</option>
                    <option value="111">Kiribati</option>
                    <option value="113">Korea, Republic of</option>
                    <option value="253">Kosovo, Republic of</option>
                    <option value="114">Kuwait</option>
                    <option value="115">Kyrgyzstan</option>
                    <option value="116">Lao People's Democratic Republic</option>
                    <option value="117">Latvia</option>
                    <option value="118">Lebanon</option>
                    <option value="119">Lesotho</option>
                    <option value="120">Liberia</option>
                    <option value="121">Libyan Arab Jamahiriya</option>
                    <option value="122">Liechtenstein</option>
                    <option value="123">Lithuania</option>
                    <option value="124">Luxembourg</option>
                    <option value="125">Macau</option>
                    <option value="127">Madagascar</option>
                    <option value="128">Malawi</option>
                    <option value="129">Malaysia</option>
                    <option value="130">Maldives</option>
                    <option value="131">Mali</option>
                    <option value="132">Malta</option>
                    <option value="133">Marshall Islands</option>
                    <option value="134">Martinique</option>
                    <option value="135">Mauritania</option>
                    <option value="136">Mauritius</option>
                    <option value="137">Mayotte</option>
                    <option value="138">Mexico</option>
                    <option value="139">Micronesia, Federated States of</option>
                    <option value="140">Moldova, Republic of</option>
                    <option value="141">Monaco</option>
                    <option value="142">Mongolia</option>
                    <option value="242">Montenegro</option>
                    <option value="143">Montserrat</option>
                    <option value="144">Morocco</option>
                    <option value="145">Mozambique</option>
                    <option value="146">Myanmar</option>
                    <option value="147">Namibia</option>
                    <option value="148">Nauru</option>
                    <option value="149">Nepal</option>
                    <option value="150">Netherlands</option>
                    <option value="151">Netherlands Antilles</option>
                    <option value="152">New Caledonia</option>
                    <option value="153">New Zealand</option>
                    <option value="154">Nicaragua</option>
                    <option value="155">Niger</option>
                    <option value="156">Nigeria</option>
                    <option value="157">Niue</option>
                    <option value="158">Norfolk Island</option>
                    <option value="112">North Korea</option>
                    <option value="159">Northern Mariana Islands</option>
                    <option value="160">Norway</option>
                    <option value="161">Oman</option>
                    <option value="162">Pakistan</option>
                    <option value="163">Palau</option>
                    <option value="247">Palestinian Territory, Occupied</option>
                    <option value="164">Panama</option>
                    <option value="165">Papua New Guinea</option>
                    <option value="166">Paraguay</option>
                    <option value="167">Peru</option>
                    <option value="168">Philippines</option>
                    <option value="169">Pitcairn</option>
                    <option value="170">Poland</option>
                    <option value="171">Portugal</option>
                    <option value="172">Puerto Rico</option>
                    <option value="173">Qatar</option>
                    <option value="174">Reunion</option>
                    <option value="175">Romania</option>
                    <option value="176">Russian Federation</option>
                    <option value="177">Rwanda</option>
                    <option value="178">Saint Kitts and Nevis</option>
                    <option value="179">Saint Lucia</option>
                    <option value="180">Saint Vincent and the Grenadines</option>
                    <option value="181">Samoa</option>
                    <option value="182">San Marino</option>
                    <option value="183">Sao Tome and Principe</option>
                    <option value="184">Saudi Arabia</option>
                    <option value="185">Senegal</option>
                    <option value="243">Serbia</option>
                    <option value="186">Seychelles</option>
                    <option value="187">Sierra Leone</option>
                    <option value="188">Singapore</option>
                    <option value="189">Slovak Republic</option>
                    <option value="190">Slovenia</option>
                    <option value="191">Solomon Islands</option>
                    <option value="192">Somalia</option>
                    <option value="193">South Africa</option>
                    <option value="194">South Georgia &amp; South Sandwich Islands</option>
                    <option value="248">South Sudan</option>
                    <option value="195">Spain</option>
                    <option value="196">Sri Lanka</option>
                    <option value="249">St. Barthelemy</option>
                    <option value="197">St. Helena</option>
                    <option value="250">St. Martin (French part)</option>
                    <option value="198">St. Pierre and Miquelon</option>
                    <option value="199">Sudan</option>
                    <option value="200">Suriname</option>
                    <option value="201">Svalbard and Jan Mayen Islands</option>
                    <option value="202">Swaziland</option>
                    <option value="203">Sweden</option>
                    <option value="204">Switzerland</option>
                    <option value="205">Syrian Arab Republic</option>
                    <option value="206">Taiwan</option>
                    <option value="207">Tajikistan</option>
                    <option value="208">Tanzania, United Republic of</option>
                    <option value="209">Thailand</option>
                    <option value="210">Togo</option>
                    <option value="211">Tokelau</option>
                    <option value="212">Tonga</option>
                    <option value="213">Trinidad and Tobago</option>
                    <option value="255">Tristan da Cunha</option>
                    <option value="214">Tunisia</option>
                    <option value="215">Turkey</option>
                    <option value="216">Turkmenistan</option>
                    <option value="217">Turks and Caicos Islands</option>
                    <option value="218">Tuvalu</option>
                    <option value="219">Uganda</option>
                    <option value="220">Ukraine</option>
                    <option value="221">United Arab Emirates</option>
                    <option value="222">United Kingdom</option>
                    <option value="223">United States</option>
                    <option value="224">United States Minor Outlying Islands</option>
                    <option value="225">Uruguay</option>
                    <option value="226">Uzbekistan</option>
                    <option value="227">Vanuatu</option>
                    <option value="228">Vatican City State (Holy See)</option>
                    <option value="229">Venezuela</option>
                    <option value="230">Viet Nam</option>
                    <option value="231">Virgin Islands (British)</option>
                    <option value="232">Virgin Islands (U.S.)</option>
                    <option value="233">Wallis and Futuna Islands</option>
                    <option value="234">Western Sahara</option>
                    <option value="235">Yemen</option>
                    <option value="238">Zambia</option>
                    <option value="239">Zimbabwe</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="Phone" className="form-label">Beneficiary Phone</label>
                  <input type="number" value="" className="form-control" data-bv-field="phone" id="Phone"
                    required placeholder="Enter Beneficiary Phone" />
                </div>

                <div className="mb-4">
                  <label for="paymentMethod" className="form-label">Mode of Verification</label>
                  <div className="col-sm d-flex justify-content-between">
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="remember-me"
                        name="remember" />
                      <label className="form-check-label" for="remember-me">Bank Verification Code
                        (BVN)</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="remember-me"
                        name="remember" />
                      <label className="form-check-label" for="remember-me">National Identity Number
                        (NIN)</label>
                    </div>
                  </div>
                  <input type="number" value="" className="form-control mt-2" data-bv-field="bvn" id="bvn"
                    required placeholder="Enter Mode of Verification" />
                </div>
                <div className="mb-3">
                  <label for="paymentMethod" className="form-label">Mode of withdrawal Method</label>
                  <div className="col-sm d-flex justify-content-between">
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="remember-me" name="remember"  />
                      <label className="form-check-label" for="remember-me">In-Branch
                        Withdrawal</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="remember-me"
                        name="remember" />
                      <label className="form-check-label" for="remember-me">ATM Pickup Point</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="file" className="form-label">Upload Required Documents</label>
                  <input type="file" className="form-control" data-bv-field="file" id="Phone" required />
                  <p className="text-muted">Any of the below required document
                    <ul className="simple-ul">
                      <li>Driver's License</li>
                      <li>International Passport</li>
                      <li>Permanent Voters card</li>
                      <li>National Identity Card</li>
                    </ul>
                  </p>
                </div>
                <div className="mb-3">
                  <label for="question1" className="form-label">Security Question 1</label>
                  <select className="form-select" id="question1" name="question1">
                    <option value="">Select a question</option>
                    <option value="1">What was your childhood nickname?</option>
                    <option value="2"> What is the name of your favorite childhood friend?</option>
                    <option value="3"> What was the name of your first stuffed animal?</option>
                    <option value="4"> In what city or town did your mother and father meet?
                    </option>
                    <option value="5">What is your youngest brother’s birthday year?</option>
                    <option value="6"> What is your maternal grandmother's maiden name?</option>
                    <option value="7"> In what city or town was your first job?</option>
                    <option value="8"> What is the name of a college you applied to?</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" data-bv-field="answers1" id="answers1"
                    placeholder="Answer" />
                </div>
                <div className="mb-3">
                  <label for="question1" className="form-label">Security Question 2</label>
                  <select className="form-select" id="question1" name="question1">
                    <option value="">Select a question</option>
                    <option value="1">What was your childhood nickname?</option>
                    <option value="2"> What is the name of your favorite childhood friend?</option>
                    <option value="3"> What was the name of your first stuffed animal?</option>
                    <option value="4"> In what city or town did your mother and father meet?
                    </option>
                    <option value="5">What is your youngest brother’s birthday year?</option>
                    <option value="6"> What is your maternal grandmother's maiden name?</option>
                    <option value="7"> In what city or town was your first job?</option>
                    <option value="8"> What is the name of a college you applied to?</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" data-bv-field="answers1" id="answers1"
                    placeholder="Answer" />
                </div>
                <div className="mb-3">
                  <label for="youSend" className="form-label">Amount to Send</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" data-bv-field="youSend" id="youSend"
                      value="1,000" placeholder="" />
                    <span className="input-group-text p-0">
                      <select id="youSendCurrency"
                        data-style="form-select bg-transparent border-0" data-container="body"
                        data-live-search="true" className="selectpicker form-control bg-transparent"
                        required="">
                        <optgroup label="Popular Currency">
                          <option data-icon="currency-flag currency-flag-usd me-1"
                            data-subtext="United States dollar"
                            value="">USD</option>
                          <option data-icon="currency-flag currency-flag-aud me-1"
                            data-subtext="Australian dollar" value="">AUD</option>
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
                  <label for="paymentMethod" className="form-label">Mode of withdrawal Method</label>
                  <select id="cardType" className="form-select" required="">
                    <option value="">Select Payment Method</option>
                    <option>Credit or Debit Cards</option>
                    <option>Bank Accounts</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="recipientGets" className="form-label">Beneficiary to receive</label>
                  <div className="input-group">
                    <span className="input-group-text">&#8373;</span>
                    <input type="text" className="form-control" data-bv-field="recipientGets"
                      id="recipientGets" value="1,410.06" placeholder="" />
                    <span className="input-group-text p-0">
                      <select id="recipientCurrency"
                        data-style="form-select bg-transparent border-0" data-container="body"
                        data-live-search="true" className="selectpicker form-control bg-transparent"
                        required="">
                        <optgroup label="Popular Currency">
                          <option data-icon="currency-flag currency-flag-usd me-1"
                            data-subtext="United States dollar" value="">USD</option>
                          <option data-icon="currency-flag currency-flag-ghs me-1"
                            data-subtext="Ghanaian cedi" value="">GHS
                          </option>
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
                <p className="text-muted text-center">The current exchange rate is <span className="fw-500">1
                  USD = 14.39 GHS Cedis</span></p>
                <hr />
                <p className="text-muted mt-4">Transactions fees <span
                  className="float-end d-flex align-items-center"><del>1.00 USD</del> <span
                    className="badge bg-info text-1 text-white fw-500 ms-2">Free</span></span>
                </p>
                <p>Total Fees<span className="float-end">7.21 USD</span></p>
                <hr />
                <p className="text-4 fw-500">Total To Pay<span className="float-end">1,000.00 USD</span></p>
                <div className="d-grid"><button className="btn btn-primary">Continue</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendFund