import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fa, fas, faThumbsUp, faMedal, faShippingFast } from '@fortawesome/free-solid-svg-icons';
function Whyus() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row text-center">
            <h1 className='whyusmainheading'> Benefits for using our services</h1>
          </div>
          <div className="row">
            <div className="col col-sm-12 col-xs-12 col-md-4">
              <div className="card card-size">
                <div className="card-body whyuscontant">
                  < FontAwesomeIcon icon={faThumbsUp} className={"fa fa-thumbs-up shape"} ></FontAwesomeIcon>
                  <h5 className="card-title whyusheading">Excellent Design</h5>
                  <p className="card-title whyuspara">Get the best designer products in the pocket friendly prices.</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xs-12 col-md-4">
              <div className="card card-size">
                <div className="card-body whyuscontant">
                  < FontAwesomeIcon icon={faMedal} className={"fas fa-medal"} ></FontAwesomeIcon>
                  <h5 className="card-title whyusheading">Best Quality</h5>
                  <p className="card-title whyuspara">We provide the best quality of products at minimal cost.</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xs-12 col-md-4">
              <div className="card card-size">
                <div className="card-body whyuscontant">
                  < FontAwesomeIcon icon={faShippingFast} className={"fas fa-shipping-fast"} ></FontAwesomeIcon>
                  <h5 className="card-title whyusheading">Guarantee Shipping</h5>
                  <p className="card-title whyuspara">Your shipment will be delievered exactly where you specify.</p>
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