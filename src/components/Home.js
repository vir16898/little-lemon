

import RestaurantInfo from './RestaurantInfo';
import Menu from './Menu';
import Testimonial from './Testimonial';


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

const testimonials = [
  { avatar: () => require("../images/testimonials/01.jpg"), name: 'John Sung', content: '"The cuizines at Little Lemon are excellent! The salads are to die for!!!"' },
  { avatar: () => require("../images/testimonials/02.jpg"), name: 'Sarah Rock', content: '"The service was impeccable! Little Lemon truly knows how to make diners feel welcome."' },
  { avatar: () => require("../images/testimonials/03.jpg"), name: 'Joselyn Black', content: '"The food here is amazing, and the service is top-notch! Little Lemon is a gem in Chicago."' },
  { avatar: () => require("../images/testimonials/04.jpg"), name: 'Eduardo Gimenez', content: '"As an Italian food enthusiast, I can confidently say that Little Lemon captures the essence of Mediterranean cuisine. Mario and Adrian’s dedication shines through every dish."' },
]

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

      <section className="testimonial-section">
        <div className="center-wrapper">
          <h2 className="menu-title">Hearing from our diners💕</h2>
          {testimonials.map((item) => (
            <Testimonial key={item.name} avatar={item.avatar()} name={item.name} content={item.content} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;