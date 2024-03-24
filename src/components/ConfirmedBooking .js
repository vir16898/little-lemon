

import './Booking.scss'
import { Link } from 'react-router-dom';


function ConfirmedBooking  (props) {

    return (
        <form>
            <div className="msg-box div-1">
                <div>
                    <h1>Booking Successfully!</h1>
                    <h3>
                        Thank you for booking a table in Little Lemon Restaurant!<br/>
                        We are looking forward to see you!
                    </h3>
                </div>
                <div>
                    <Link to="/" className="btn-primary">Back to home</Link>
                </div>
            </div>
        </form>
    )
}

export default ConfirmedBooking ;