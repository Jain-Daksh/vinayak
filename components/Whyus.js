import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fa, fas, faThumbsUp, faMedal, faShippingFast } from '@fortawesome/free-solid-svg-icons';
function Whyus() {
  return (
    <div>
      <section className='marginheading'>
        <div className="container">
          <div className="row text-center">
            <h1 className='mb-5 heading'> Benefits for using our services</h1>
          </div>
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-sm-12 col-xs-12 col-md-4 col-12">
              <div className="card card-size">
                <div className="card-body text-center">
                  < FontAwesomeIcon icon={faThumbsUp} className={"fa fa-thumbs-up shape elementor-icon"} ></FontAwesomeIcon>
                  <h5 className="card-title infoheading ">Excellent Design</h5>
                  <p className="card-title whyuspara">Get the best designer products in the pocket friendly prices.</p>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-sm-12 col-xs-12 col-md-4 col-12">
              <div className="card card-size">
                <div className="card-body text-center">
                  < FontAwesomeIcon icon={faMedal} className={"fas fa-medal elementor-icon"} ></FontAwesomeIcon>
                  <h5 className="card-title infoheading =">Best Quality</h5>
                  <p className="card-title whyuspara">We provide the best quality of products at minimal cost.</p>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-sm-12 col-xs-12 col-md-4 col-12">
              <div className="card card-size">
                <div className="card-body text-center">
                  < FontAwesomeIcon icon={faShippingFast} className={"fas fa-shipping-fast elementor-icon"} ></FontAwesomeIcon>
                  <h5 className="card-title infoheading =">Guarantee Shipping</h5>
                  <p className="card-title whyuspara">Your shipment will be delievered exactly where you have specify.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Whyus
