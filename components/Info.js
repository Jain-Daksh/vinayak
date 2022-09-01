import React from 'react'
import {  Bookmark  , CreditCard, HandThumbsUp , Award} from 'react-bootstrap-icons';

function Info() {
  return (
    <div>
      <section className="info">
      <div className="container">

          <div className="row text-center">
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
              <span className="elementor-icon elementor-animation-">
                  <HandThumbsUp className="bi bi-alarm "></HandThumbsUp>
                </span>
                <h4 className="mt-4 ">Trustable Product</h4>
                <p className="info-para">All our products are reliable </p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
              <span className="elementor-icon elementor-animation-">
                  <Bookmark className="bi bi-bookmark-star"></Bookmark>
                </span>
                <h4 className="mt-4 ">Delivery</h4>
                <p className="info-para">Deliver goods all over India </p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
              <span className="elementor-icon elementor-animation-">
                  <CreditCard className='bi bi-credit-card'></CreditCard>
                </span>
                <h4 className="mt-4 ">Secure Payment</h4>
                <p className="info-para">100% secure payment</p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
              <span className="elementor-icon elementor-animation-">
                  <Award className="bi bi-save" aria-hidden="true"></Award>
                  <i className="bi bi-save" aria-hidden="true"></i>
                </span>
                <h4 className="mt-4">Premium Quality</h4>
                <p className="info-para">Superior quality  goods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info
