

import './Booking.scss'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


function BookingUserForm (props) {

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', phone: '', email: '', special: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.setFormData({...props.formData, canSubmit: true, firstName: values.firstName, lastName: values.lastName, phone: values.phone, email: values.email, special: values.special});
                //setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                .required('Required'),
                phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
                .required('Required'),
                email: Yup.string()
                .email('Email address is not valid')
                .required('Required'),
            })}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    {props.submitted === true && (
                        <div className="msg-box div-1">
                            <h1>Booking Successfully!</h1>
                            <h3>
                                Thank you for booking a table in Little Lemon Restaurant!<br/>
                                We are looking forward to see you!
                            </h3>
                            <Link to="/" className="btn-primary">Back to home</Link>
                        </div>
                    )}
                    {props.submitted === false && (
                        <>
                        <div className="div-1">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            <div className="errorfield">{errors.firstName && touched.firstName && errors.firstName}</div>
                        </div>
                        <div className="div-1">
                            <label htmlFor="lastName">Last Name (Optional):</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                        </div>
                        <div className="div-1">
                            <label htmlFor="phone">Phone number:</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <div className="errorfield">{errors.phone && touched.phone && errors.phone}</div>
                        </div>
                        <div className="div-1">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <div className="errorfield">{errors.email && touched.email && errors.email}</div>
                        </div>
                        <div className="div-1">
                            <label htmlFor="special">Special request (Optional):</label>
                            <textarea
                                type="comment"
                                id="special"
                                name="special"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.special}
                                aria-label="Close"
                            />
                        </div>

                        <div className="div-1">
                            <button type="submit" disabled={isSubmitting} className="btn-primary" aria-label="Submit Contact Information">
                                Submit
                            </button>
                        </div>
                        </>
                    )}
                </form>
            )}
        </Formik>
    )
}

export default BookingUserForm;