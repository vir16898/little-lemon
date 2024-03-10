

import './RestaurantInfo.scss';
import { Link } from 'react-router-dom';


const RestaurantInfo = (props) => {

  return (
    <section className="restaurant-info" aria-label="restaurant infomation">
      <div className={props.showHome === true ? "row div-2" : "row div-1"}>
        <div className="box">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          {props.showHome === true && (
            <div className="box">
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <Link to="/booking" className="btn-primary" role="button" aria-label="On Click">Reserve a table</Link>
            </div>
          )}
        </div>
        {props.showHome === true && (
          <div className="box">
            <picture className="restaurant-image">
              <img src={require("../images/restauranfood.png")} alt="Little Lemon feature" />
            </picture>
          </div>
        )}

      </div>
    </section>
  );
};

export default RestaurantInfo;
