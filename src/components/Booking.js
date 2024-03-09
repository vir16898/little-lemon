

import RestaurantInfo from './RestaurantInfo';
import BookingForm from './BookingForm';
import BookingUserForm from './BookingUserForm';
import ConfirmedBooking from './ConfirmedBooking ';
import { useState, useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './mockAPI';
import { useNavigate } from 'react-router-dom';



function Booking (props) {
    const [state, dispatch] = useReducer(reducer, { availableTimes: ['10:00', '11:00', '12:00'] });
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState( {canSubmit: false, date: '', time: '', diner: '', occasion: '', seat: '', firstName: '', lastName: '', phone: '', email: '', special: ''} );

    const navigate = useNavigate();

    useEffect(() => {
      // Init Time display
      doFetchTime("");
    }, []);

    useEffect(() => {
      // When 2 form finished validation, do call submitAPI
      if (formData.canSubmit === true) {
        submitAPI(formData)
          .then(response => {
            if (response !== false) {
              navigate("/booking3");
            }
            throw response;
          })
          .catch(error => {
            //console.log(error);
          })
          .finally(()=>{
            setSubmitted(true);
          });
      }
    }, [formData, navigate]);

    function reducer(state, action) {
      if (action.type === 'change_date') {
        doFetchTime(action.date);
        return { availableTimes: ["loading"] }
      }
      else if (action.type === 'update_time') {
        return { availableTimes: action.timeArr }
      }
      throw Error('Unknown action.');
    }

    function doFetchTime(date) {
      if (date === "") {
        date = new Date();
        date = date.toISOString().split('T')[0];
      }
      fetchAPI(date)
        .then(response => {
          if (response !== undefined) {
            dispatch( {type: 'update_time', timeArr: response} );
          }
          throw response;
        })
        .catch(error => {
          //console.log(error);
        })
        .finally(()=>{
          //console.log("finally");
        })
    }

    return (
      <>
        <RestaurantInfo showHome={false}/>
        <section className="booking-bg">
          {props.bookingPage === 1 && (
            <>
              <div className='row div-1'>
                  <h3>Find a table for any occasion</h3>
              </div>
              <div className='row div-2'>
                  <picture className="restaurant-image">
                      <img src={require("../images/restaurant.jpg")} alt="View of our Restaurant" />
                  </picture>
                  <picture className="restaurant-image">
                      <img src={require("../images/restaurantChefB.png")} alt="Our Excellent Chef" />
                  </picture>
              </div>
              <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} formData={formData} setFormData={setFormData} />
            </>
          )}
          {props.bookingPage === 2 && (
            <>
              <div className='row div-1'>
                  <h3>{submitted === false && (`Please leave your contact`)}</h3>
              </div>
              <BookingUserForm submitted={submitted} dispatch={dispatch} formData={formData} setFormData={setFormData} />
            </>
          )}
          {props.bookingPage === 3 && (
            <>
              <div className='row div-1'>
                  <h3> </h3>
              </div>
              <ConfirmedBooking />
            </>
          )}
        </section>
      </>
    )
}

export default Booking;