

import RestaurantInfo from './RestaurantInfo';
import Menu from './Menu';




function Home () {

    return (
        <main>
          <RestaurantInfo/>

          <section>
            <div className="row">
              <h2 className="menu-title">This weeks specials!</h2>
            </div>
            <Menu/>
          </section>
        </main>
    )
}

export default Home;