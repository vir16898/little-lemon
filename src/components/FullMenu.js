

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
      title: "Risotto",
      price: "$16.99",
      description:
          "Risotto is a typical northern Italian dish that can be cooked in an infinite number of ways. Creamy and rich in cheese, and cooked slowly in broth.",
      getImageSrc: () => require("../images/menu_Risotto.jpg"),
  },
  {
      title: "Featured Pizza",
      price: "$20.99",
      description:
          "Inevitable if we speak about Italian food: pizza is a national symbol represents Italy in the world. You must love our special arrange for this pizza.",
      getImageSrc: () => require("../images/menu_Pizza.jpg"),
  },
  {
      title: "Pasta Carbonara",
      price: "$12.99",
      description:
          "Pasta carbonara is a cornerstone dish of Italian cuisine. With a creamy consistency and a deliciously smoky and peppery aftertaste.",
      getImageSrc: () => require("../images/menu_carbonara.jpg"),
  },
  {
      title: "Gnocchi",
      price: "$9.99",
      description:
          "Gnocchi are small rounds of potato dough. We made with the most typical ingredients of cheese, spinach, eggs, and a variety of sauces.",
      getImageSrc: () => require("../images/menu_gnocchi.jpg"),
  },
  {
      title: "Lemon Dessert",
      price: "$5.00",
      description:
          "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/menu_lemondessert.png"),
  },
];

function FullMenu () {

  return (
    <>
      <RestaurantInfo showHome={true}/>

      <section className="home-menu">
        <div className="row">
          <h2 className="menu-title">Our Menu</h2>
        </div>
        <Menu foods={foods} />
      </section>
    </>
  )
}

export default FullMenu;