import React from 'react';

function Home() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src="/img/banner_img_01.jpg" alt="Shop Banner 1" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <h1 className="h1 text-success"><b>Salman’s</b> Shop</h1>
                  <h3 className="h2">Premium Products, Affordable Prices</h3>
                  <p>
                    Welcome to Salman’s Shop — your one-stop destination for fashion, accessories, and lifestyle products.
                    Explore our latest arrivals and enjoy exclusive discounts every week!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src="/img/banner_img_02.jpg" alt="Shop Banner 2" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <h1 className="h1">Trendy Collections</h1>
                  <h3 className="h2">Style That Speaks</h3>
                  <p>
                    Discover Salman’s Shop exclusive clothing line — from casual wear to formal outfits.
                    Designed for comfort, crafted for elegance, and priced for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" src="/img/banner_img_03.jpg" alt="Shop Banner 3" />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <h1 className="h1">Shop Smart</h1>
                  <h3 className="h2">Exclusive Deals Await</h3>
                  <p>
                    At Salman’s Shop, we bring you unbeatable offers on top-quality products.
                    Join our community of happy customers and experience shopping like never before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
