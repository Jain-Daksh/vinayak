import React from 'react'
import { Bookmark, CreditCard, HandThumbsUp, Award } from 'react-bootstrap-icons';

function Info() {
  return (
    <div>
      <section className="info marginheading">
        <div className="container">
          <div className="row text-center">
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
                <span className="elementor-icon elementor-animation-">
                  <HandThumbsUp className="bi bi-alarm "></HandThumbsUp>
                </span>
                <h5 className="mt-3 infoheading">Trustable Product</h5>
                <p className="whyuspara mt-2 ">All our products are reliable </p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
                <span className="elementor-icon elementor-animation-">
                  <Bookmark className="bi bi-bookmark-star"></Bookmark>
                </span>
                <spam className="mt-3 infoheading">Delivery All over india</spam>
                <p className="whyuspara mt-2">Deliver goods all over India </p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
                <span className="elementor-icon elementor-animation-">
                  <CreditCard className='bi bi-credit-card'></CreditCard>
                </span>
                < spam className="mt-3 infoheading ">Secure Payment</spam>
                <p className="whyuspara mt-2">100% secure payment</p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-3 col-sm-12 col-xs-12 col-md-6 col-12">
              <div className="card card-size">
                <span className="elementor-icon elementor-animation-">
                  <Award className="bi bi-save" aria-hidden="true"></Award>
                  <i className="bi bi-save" aria-hidden="true"></i>
                </span>
                <spam className="mt-3 infoheading " >Premium Quality</spam>
                <p className="whyuspara mt-2">Superior quality  goods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Info