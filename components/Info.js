import React from 'react'
import { Alarm , Bookmark , Save , CreditCard } from 'react-bootstrap-icons';

function Info() {
  return (
    <div>
      <section className="info">
        <div >
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-3 col-sm-12 col-xs-12">
                <span className="elementor-icon elementor-animation-">
                  <Alarm className="bi bi-alarm "></Alarm>
                </span>
                <h4 className="mt-4 ">90 Days Of Return</h4>
                <p className="info-para">If goods have problems, we will exchange .</p>
              </div>
              <div className="col-lg-3 col-sm-12 col-xs-12">
                <span className="elementor-icon elementor-animation-">
                  <Bookmark className="bi bi-bookmark-star"></Bookmark>
                </span>
                <h4 className="mt-4 ">Free Delivery</h4>
                <p className="info-para">For all order over Rs4050 free Delivery</p>
              </div>
              <div className="col-lg-3 col-sm-12 col-xs-12">
                <span className="elementor-icon elementor-animation-">
                  <CreditCard className='bi bi-credit-card'></CreditCard>
                </span>
                <h4 className="mt-4 ">Secure Payment</h4>
                <p className="info-para">100% secure payment,online,cash,accepted</p>
              </div>
              <div className="col-lg-3 col-sm-12 col-xs-12">
                <span className="elementor-icon elementor-animation-">
                  <Save className="bi bi-save" aria-hidden="true"></Save>
                  <i className="bi bi-save" aria-hidden="true"></i>
                </span>
                <h4 className="mt-4">100% Free Warrenty</h4>
                <p className="info-para">If goods have problems, we will exchange .</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Info