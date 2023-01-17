import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Webcam from "react-webcam";
import { useState, useEffect } from 'react';
import { useNavbarContext } from '../../context/NavbarContext';
import { ToastContainer, toast } from 'react-toastify';
import { BsCamera } from "react-icons/bs";
import { useForm } from "react-hook-form"
// import axios from 'axios';   

const videoConstraints = {
    facingMode: "user"
};

const Register = () => {
    const { register, getValues, trigger, formState: { errors } } = useForm({ mode: "all" });
    const [screenShoot, setScreenShot] = useState(null)
    const [cam, setcam] = useState(false);
    const [check, setcheck] = useState(false);
    const {setdefaultUser, defaultUser} = useNavbarContext()

    const close = () => {
        setTimeout(() => {
          setcam(false);
        }, 1000);
      };

      useEffect(() =>{
        console.log(screenShoot)}, 
        [screenShoot])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (! await trigger()){
            toast("Please fill all the field", {type: 'error'})
            return
        }

        const values = getValues()
        console.log(values);

        const name = values?.firstName + ' ' + values?.lastName

        setdefaultUser( {...values, screenshot: screenShoot, name})

        toast("Registration successful", {type: 'success'})
        setTimeout(() => navigate('/login'), 2000)
    } 

    return (
        <div>
            <ToastContainer/>
            <div id="main-wrapper front" >
            <div className="ankara"></div>
                <div className="container-fluid front px-0">
                    <div className="row g-0 min-vh-100">
                        
                        <div className="d-flex align-items-center">
                            <div className="container spacing">
                            <div className="logo d-flex justify-content-center mt-5 mb-3">
									<a className="d-flex" href="index.html">
										<img src="/images/First-Bank.svg" width="140" height="33" alt="First-bank-logo" />
									</a>
							</div>
                                <div className="row g-0">
                                    <div className="col-11 col-lg-9 col-xl-8  mx-auto">
                                        <div className="mb-5 text-center">
                                            <h2 className="fw-700 text-primary">Create an account</h2>
                                            <span className='text-4'>To get started, please fill in your details</span>
                                        </div>
                                        <form className='pr-6 registerd' id="loginForm" method="post">
                                            <section className="d-md-flex gap-4">
                                                <main className="width-full w-100">
                                                    <div className="mb-3">
                                                        <label htmlFor="firstName" className="form-label fw-500">First Name<span className='text-danger fw-500'>*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="firstName"
                                                            placeholder="Enter Your First Name"
                                                            style={{ border: errors?.firstName?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("firstName", {
                                                                required: "First name is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The fistname cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The fistname cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        <small className='text-danger'>{errors?.firstName?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="middleName" className="form-label fw-500">Middle Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="middleName"
                                                            placeholder="Enter Your Middle Name"
                                                            style={{ border: errors?.middleName?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("middleName", {
                                                                required: "Middle name is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The middle Name cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The middle Name cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        <small className='text-danger'>{errors?.middleName?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="lastName" className="form-label fw-500">Last Name<span className='text-danger fw-500'>*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="lastName"
                                                            placeholder="Enter Your Last Name"
                                                            style={{ border: errors?.lastName?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("lastName", {
                                                                required: "Last name is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The Last Name cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The Last Name cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        <small className='text-danger'>{errors?.lastName?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label 
                                                            htmlFor="emailAddress" 
                                                            className="form-label fw-500"
                                                        >
                                                            Email<span className='text-danger fw-500'>*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="emailAddress"
                                                            placeholder="Enter Your Email"
                                                            style={{ border: errors?.email?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("email", {
                                                                required: "Please enter email",
                                                                pattern: {
                                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                                message: "Please enter a valid email address"
                                                                }
                                                            })}
                                                        />
                                                        <small className='text-danger'>{errors?.email?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="number"
                                                            className="form-label fw-500"
                                                        >
                                                            Phone Number
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="number"
                                                            placeholder="Enter Phone Number"
                                                            style={{ border: errors?.number?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("number", {
                                                                required: "Phone Number is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 15,
                                                                    // This is for the error message
                                                                    message: "The Phone Number cannot be greater than 15 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 11,
                                                                    // This is for the error message
                                                                    message: "The Phone Number cannot be less than 11 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="address1"
                                                            className="form-label fw-500"
                                                        >
                                                            Address I
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address1"
                                                            placeholder="Enter your address"
                                                            style={{ border: errors?.address1?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("address1", {
                                                                required: "Address 1 is required",
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The Address 1 cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="address2"
                                                            className="form-label fw-500"
                                                        >
                                                            Address II (Optional)
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="address2"
                                                            required
                                                            placeholder="Enter your address II"
                                                            style={{ border: errors?.address2?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("address1", {
                                                                required: false,
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The Address 2 cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="city" className="form-label fw-500">
                                                            City<span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="city"
                                                            required
                                                            placeholder="Enter your City"
                                                            style={{ border: errors?.city?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("city", {
                                                                required: "City is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The city cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The city cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="state" className="form-label fw-500">
                                                            State<span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="state"
                                                            placeholder="Enter your State"
                                                            {...register("state", {
                                                                required: "state is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The state cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The state cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="inputCountry" className="form-label fw-500">Country<span className='text-danger fw-500'>*</span></label>
                                                        <select 
                                                            className="form-select" 
                                                            id="country" 
                                                            {...register("country", {
                                                                required: "Country is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 20,
                                                                    // This is for the error message
                                                                    message: "The Country cannot be greater than 20 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The Country cannot be less than 3 characters"
                                                                },
                                                                })
                                                            }
                                                        >
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Democratic Republic of Congo">Democratic Republic of Congo</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Zambia">Zambia</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="Dob" className="form-label fw-500">
                                                            Select Your Date of Birth
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="Dob"
                                                            style={{ border: errors?.age?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("age", { required: "Please enter age", min: 18, max: 99 })} 
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="gender"
                                                            className="form-label fw-500"
                                                        >
                                                            Gender
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="gender"
                                                            name="gender"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="Male">
                                                             Male
                                                            </option>
                                                            <option value="Female">
                                                                Female
                                                            </option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="status"
                                                            className="form-label fw-500"
                                                        >
                                                            Marital Status
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="status"
                                                            name="marital_status"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="Single">
                                                                Single
                                                            </option>
                                                            <option value="Married">
                                                                Married
                                                            </option>
                                                            <option value="Divorced">
                                                                Divorced
                                                            </option>
                                                            <option value="Widow">
                                                                Widow
                                                            </option>
                                                        </select>
                                                    </div>
                                                </main>
                                                <aside className='width-full w-100'>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="identity_mode"
                                                            className="form-label fw-500"
                                                        >
                                                            Identification Type (Mode of Identity)
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="identity_mode"
                                                            name="identity_mode"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="SSID">
                                                                Social Security Identity (SSID)
                                                            </option>
                                                            <option value="National Identity Number (NIN)">
                                                                National Identity Number (NIN)
                                                            </option>
                                                            <option value="Driver's License">
                                                                Driver's License
                                                            </option>
                                                            <option value="Internation Passport Number">
                                                                Internation Passport Number
                                                            </option>
                                                            <option value="BVN">
                                                                BVN
                                                            </option>
                                                            <option value="BVN">
                                                                Others
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="id_number"
                                                            className="form-label fw-500"
                                                        >
                                                            Identification Number
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="id_number"
                                                            required
                                                            placeholder="Enter Your  Identification Number"
                                                            style={{ border: errors?.id_number?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("id_number", {
                                                                required: "Identification Number is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 15,
                                                                    // This is for the error message
                                                                    message: "The Identification Number cannot be greater than 15 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 11,
                                                                    // This is for the error message
                                                                    message: "The Identification Number cannot be less than 11 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="idNoExpiry" className="form-label fw-500">
                                                        Identification Number Expiry Date<span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="idNoExpiry"
                                                            required
                                                            placeholder="Enter Date of Expiry"
                                                            style={{ border: errors?.idNoExpiry?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("idNoExpiry", {
                                                                required: "Identification Number Expiry Date is required",
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 15,
                                                                    // This is for the error message
                                                                    message: "The Identification Number Expiry Date cannot be greater than 15 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 3,
                                                                    // This is for the error message
                                                                    message: "The Identification Number Expiry Date cannot be less than 11 characters"
                                                                },
                                                                })
                                                            }
                                                        />
                                                        <small className='text-danger'>{errors?.idNoExpiry?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="acctNo" className="form-label fw-500">
                                                        First Bank Account Number (Existing one)
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="acctNo"
                                                            required
                                                            placeholder="Enter your Account Number"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="identity_mode"
                                                            className="form-label fw-500"
                                                        >
                                                            Other banks
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="identity_mode"
                                                            name="identity_mode"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="UBA">
                                                                United Bank of Africa
                                                            </option>
                                                            <option value="Zenith Bank PLC">
                                                                Zenith Bank PLC
                                                            </option>
                                                            <option value="Ecobank">
                                                                Ecobank
                                                            </option>
                                                            <option value="Sterling Bank">
                                                                Sterling Bank
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="bankAcctNo" className="form-label fw-500">
                                                        Bank Account Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="bankAcctNo"
                                                            required
                                                            placeholder="Enter your Account Number"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="security1"
                                                            className="form-label fw-500"
                                                        >
                                                            Security Question 1
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="security1"
                                                            name="security1"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="What is your father’s nickname?">
                                                                What is your father’s nickname?
                                                            </option>
                                                            <option value="Where did you meet your spouse?">
                                                                Where did you meet your spouse?
                                                            </option>
                                                            <option value="What is the name of your first pet?">
                                                                What is the name of your first pet?
                                                            </option>
                                                            <option value="What is the name of your first car?">
                                                                What is the name of your first car?
                                                            </option>
                                                            <option value="Access Bank">
                                                                Where did you spend your honeymoon?
                                                            </option>
                                                            <option value="What is the name of your primary school?">
                                                                What is the name of your primary school?
                                                            </option>
                                                            <option value="Who is your best teacher?">
                                                                Who is your best teacher?
                                                            </option>
                                                            <option value="What is your best subject?">
                                                                What is your best subject?
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="text"
                                                            className="form-label fw-500"
                                                        >
                                                            Security Answer 1
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="text"
                                                            required
                                                            placeholder="Enter Answer Here"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="security2"
                                                            className="form-label fw-500"
                                                        >
                                                            Security Question 2
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="security2"
                                                            name="security2"
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="What is your father’s nickname?">
                                                                What is your father’s nickname?
                                                            </option>
                                                            <option value="Where did you meet your spouse?">
                                                                Where did you meet your spouse?
                                                            </option>
                                                            <option value="What is the name of your first pet?">
                                                                What is the name of your first pet?
                                                            </option>
                                                            <option value="What is the name of your first car?">
                                                                What is the name of your first car?
                                                            </option>
                                                            <option value="Access Bank">
                                                                Where did you spend your honeymoon?
                                                            </option>
                                                            <option value="What is the name of your primary school?">
                                                                What is the name of your primary school?
                                                            </option>
                                                            <option value="Who is your best teacher?">
                                                                Who is your best teacher?
                                                            </option>
                                                            <option value="What is your best subject?">
                                                                What is your best subject?
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="text"
                                                            className="form-label fw-500"
                                                        >
                                                            Security Answer 2
                                                            <span className="text-danger fw-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="text"
                                                            required
                                                            placeholder="Enter Answer Here"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="password1"
                                                            className="form-label fw-500"
                                                        > Password
                                                            <span className='text-danger fw-500'>*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password1"
                                                            placeholder="Enter Password"
                                                            // style={{ border: errors?.password?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            // {...register("password", {
                                                            //     required: "password is required",
                                                            //     pattern: {
                                                            //     value: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm',
                                                            //     message: "Please enter a valid email address"
                                                            //     }
                                                            //     })
                                                            // }
                                                            style={{ border: errors?.password?.message ? "1px solid #f00" : "1px solid #dae1e3" }}
                                                            {...register("password", {
                                                                required: "Please enter a password",
                                                                pattern: {
                                                                value: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm',
                                                                message: "Please enter a valid email address"
                                                                },
                                                                maxLength: {
                                                                    // The value for max length
                                                                    value: 10,
                                                                    // This is for the error message
                                                                    message: "Password cannot be less than 10 characters"
                                                                },
                                                                minLength: {
                                                                    // The value for max length
                                                                    value: 8,
                                                                    // This is for the error message
                                                                    message: "Password cannot be less than 8 characters"
                                                                },
                                                            })}
                                                        />
                                                         <small className='text-danger'>{errors?.password?.message}</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="password_confirm"
                                                            className="form-label fw-500"
                                                        > Confirm Password
                                                            <span className='text-danger fw-500'>*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="password_confirm"
                                                            required
                                                            placeholder="Confirm"
                                                        />
                                                    </div>
                                                </aside>
                                            </section>
                                            <div className=" m-3 my-3">
                                                <button type='button'
                                                    onClick={() => setcam(true)}
                                                    className="w-100 d-flex gap-3 align-items-center justify-content-center btn btn-secondary"
                                                >
                                                    Take Picture <BsCamera/>
                                                </button>
                                                {cam && (
                                                    <>
                                                    <Webcam
                                                            audio={false}
                                                            screenshotFormat="image/jpeg"
                                                            videoConstraints={videoConstraints}
                                                        >
                                                            {({ getScreenshot }) => (
                                                                <div className="clearfix">
                                                                    <button type="button"  className="btn btn-primary cancelbtn" 
                                                                        onClick={() => {
                                                                            const imageSrc = getScreenshot()
                                                                            setScreenShot(imageSrc)
                                                                            setcam(false)
                                                                            // document.getElementById('webCamera').style.display = 'none'
                                                                        }}
                                                                    >Capture photo</button>
                                                                </div>
                                                            )}
                                                        </Webcam>

                                                                    <p className="m-3">
                                                                        Align your head before clicking capture. If the
                                                                        came isn't showing Allow the site to acces your
                                                                        webcam
                                                                    </p>
                                                        {/* <Webcam /> */}
                                                    </>
                                                )}
                                                {screenShoot && <img src={screenShoot} width={200} style={{objectFit: 'contain'}}/>}
                                            </div>
                                          
                                            <div className="d-grid mb-3">
                                                <button 
                                                    className="btn btn-primary" 
                                                    onClick={handleSubmit} 
                                                    disabled={!check}
                                                    type="submit" to="/"
                                                >
                                                    Create account
                                                </button>
                                                <div className="row mt-4 mb-3">
                                                    <div className="col-sm">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                onChange={(e) => setcheck(e.target.checked)}
                                                                className="form-check-input"
                                                                id="remember-me"
                                                                name="remember"
                                                                type="checkbox"
                                                            />
                                                            <label
                                                                className="form-check-label text-center"
                                                                htmlFor="remember-me"
                                                            >
                                                                I consent to the collection and processing of my
                                                                personal information inline with the data
                                                                regulations of <a href="#" className="text-primary"> First Bank of Nigeria Policy</a>
                                                                .
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <p className="text-center">
                                                        By Clicking the "Create Account" button, you agree
                                                        to our  <a href="#" className="text-primary"> Terms of Usage</a>.
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="text-3 text-center text-muted">Already have an account? <Link className="btn-link" to="/login">Log In</Link></p>
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

export default Register