

import React from "react";



const Testimonial = (props) => {


  return (
    <article className="testimonial-item">
      <div>
        <picture>
          <img src={props.avatar} alt={`${props.name}'s avatar`} />
        </picture>
        <h2>{props.name}</h2>
        <p>{props.content}</p>
      </div>
    </article>
  )
};

export default Testimonial;
