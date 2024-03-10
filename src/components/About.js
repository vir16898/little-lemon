

import RestaurantInfo from './RestaurantInfo';




function About () {

    return (
      <>
      <RestaurantInfo showHome={true}/>

      <section className='about-section'>
        <div className="row div-2">
          <div>
            <h2>About Us</h2>
            <p>Little Lemon Restaurant is a family-owned Mediterranean eatery that combines time-honored recipes with a contemporary flair. Our menu features a delightful fusion of flavors, bringing you the best of both worlds. Whether you’re craving classic dishes or seeking innovative culinary experiences, Little Lemon invites you to savor the richness of Mediterranean cuisine in a warm and welcoming ambiance. 🍋🌿🍽️</p>
          </div>
          <picture className="restaurant-image">
            <img src={require("../images/Mario and Adrian A.png")} alt="Little Lemon feature" />
          </picture>
        </div>
        <div className="row div-2">
          <picture className="restaurant-image">
            <img src={require("../images/Mario and Adrian b.png")} alt="Little Lemon feature" />
          </picture>
          <div>
            <p>Mario and Adrian. These two Italian brothers embarked on a journey to the Chicago with a shared dream — to create a remarkable dining experience. Mario, drawing from his culinary expertise gained in Italy, curates our menu with time-honored family recipes and a touch of innovation. Their passion and dedication infuse every dish at Little Lemon, making it a delightful haven for food enthusiasts. 🍋👨‍🍳</p>
          </div>
        </div>
      </section>
      </>
    )
}

export default About;