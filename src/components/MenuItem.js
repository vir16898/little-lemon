

import React from "react";
import './MenuItem.scss';

const MenuItem = ({ title, price, description, imageSrc }) => {


  return (
    <article className="menu-item">
      <div>
        <picture>
          <img src={imageSrc} alt={title} />
        </picture>
      </div>
      <div className="title-grid">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
    </article>
  )
};

export default MenuItem;
