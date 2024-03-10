

import RestaurantInfo from './RestaurantInfo';
import Menu from './Menu';


const foods = [
  {
      title: "Greek salad",
      price: "$12.99",
      description:
          "The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/menu_greeksalad.png"),
  },
  {
      title: "Bruchetta",
      price: "$5.99",
      description:
          "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../images/menu_bruchetta.png"),
  },
  {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
          "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/menu_lemondessert.png"),
  },
];

function Home () {

  return (
    <>
      <RestaurantInfo showHome={true}/>

      <section className="home-menu">
        <div className="row">
          <h2 className="menu-title">This weeks specials!</h2>
        </div>
        <Menu foods={foods} />
      </section>
    </>
  )
}

export default Home;