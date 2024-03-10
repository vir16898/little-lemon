

import '../App.scss';
import MenuItem from './MenuItem';


const Menu = (props) => {

    return (
        <div id="menu-section" className="row div-3" aria-label="restaurant menu pickup">
            {props.foods.map((item) => (
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
