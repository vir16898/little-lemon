

import RestaurantInfo from './RestaurantInfo';
import Menu from './Menu';




function Home () {

    return (
      <>
        <RestaurantInfo showHome={true}/>

        <section className="home-menu">
          <div className="row">
            <h2 className="menu-title">This weeks specials!</h2>
          </div>
          <Menu/>
        </section>
      </>
    )
}

export default Home;