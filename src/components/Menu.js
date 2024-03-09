

import '../App.scss';
import MenuItem from './MenuItem';

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

const Menu = () => {

    return (
        <div className="row div-3" aria-label="restaurant menu pickup">
            {foods.map((item) => (
            <MenuItem
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                imageSrc={item.getImageSrc()}
            />
            ))}
        </div>
    );
};

export default Menu;
