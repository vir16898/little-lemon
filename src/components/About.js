





function About () {

    return (
        <section className="restaurant-info">
          <div className="row div-2">
            <div className="col">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>

            <div className="col">
              <picture className="restaurant-image">
                <img src={require("../images/restauranfood.png")} alt="Little Lemon feature" />
              </picture>
            </div>
          </div>
        </section>
    )
}

export default About;