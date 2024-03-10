

import './Booking.scss'
import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate  } from 'react-router-dom';



function BookingForm (props) {

    const availableDiner = [1, 2, 3, 4, 5, 6, 7, 8];
    const navigate = useNavigate();

    function handleDateChange(dateSelected, handleChange) {
        //handleChange(e);
        props.dispatch( { type: 'change_date', date: dateSelected } );
    }

    return (
        <Formik
            initialValues={{ date: '', time: '', diner: '', occasion: '', seat: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    //console.log( JSON.stringify(values, null, 2) );
                    props.setFormData({...props.formData, date: values.date, time: values.time, diner: values.diner, occasion: values.occasion, seat: values.seat});
                    setSubmitting(false);
                    navigate("/booking2");
                }, 1000);
            }}
            validationSchema={Yup.object().shape({
                date: Yup.string()
                .required('Required'),
                time: Yup.string()
                .required('Required'),
                diner: Yup.string()
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
                    <div className="div-2">
                        <label htmlFor="date">Choose date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            onChange={e => {handleDateChange(e.target.value); handleChange(e); e.preventDefault();}}
                            onBlur={handleBlur}
                            value={values.date}
                        />
                        <div className="errorfield">{errors.date && touched.date && errors.date}</div>
                    </div>
                    <div className="div-2">
                        <label htmlFor="time">Choose time:</label>
                        <select
                            id="time"
                            name="time"
                            data-testid="select"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.time}
                        >
                            {props.availableTimes.map((item)=>(
                                <option data-testid="select-option" value={item} key={item} >{item}</option>
                            ))}
                        </select>
                        <div className="errorfield">{errors.time && touched.time && errors.time}</div>
                    </div>
                    <div className="div-1">
                        <label htmlFor="diner">Number of guests:</label>
                        <select
                            id="diner"
                            name="diner"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.diner}
                        >
                            {availableDiner.map((item)=>(
                                <option value={item} key={item} >{item}</option>
                            ))}
                        </select>
                        <div className="errorfield">{errors.diner && touched.diner && errors.diner}</div>
                    </div>
                    <div className="div-1">
                        <label htmlFor="occasion">Occasion (Optional):</label>
                        <select
                            id="occasion"
                            name="occasion"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occasion}
                        >
                            <option value="none">-</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="DateNight">Date night</option>
                            <option value="BusinessMeal">Business Meal</option>
                            <option value="Celebration">Celebration</option>
                        </select>
                    </div>
                    <div className="div-1">
                        <div id="seat-gp">Seat (Optional):</div>
                        <div role="group" aria-label="select the seat type" className="radio-gp">
                            <label>
                                <Field type="radio" id="seat" name="seat" value="Standard" aria-checked={values.seat === "Standard" ? true : false} />
                                Standard
                            </label><br/>
                            <label>
                                <Field type="radio" id="seat" name="seat" value="Outside" aria-checked={values.seat === "Outside" ? true : false} />
                                Outside
                            </label>
                        </div>
                    </div>
                    <div className="div-1">
                        <button type="submit" disabled={isSubmitting} className="btn-primary" aria-label="Submit Booking Information">
                            Make your reservation
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default BookingForm;