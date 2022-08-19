import React from 'react'

function Contactus() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6  col-md-6 col-sm-12 col-xs-12">
              <h1>Contact US</h1>
              <h5>Address</h5>
              <p className="inline">
                <i className="fa fa-map-marker"></i>
                Plot No, 2, 100 Feet Rd, near Jain Transport, Shobhagpura <br></br> Udaipur, Rajasthan 313001
              </p>
              <p className="inline">
                <i className="fa fa-phone" ></i>
                096949 85000
              </p>
              <p className="inline">
                <i className="fa fa-envelope"></i>
                abc@gmail.com
              </p>
            </div>
            <div className="col col-lg-6  col-md-6 col-sm-12 col-xs-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.5933187275964!2d73.70716441499778!3d24.603227584175933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5a462e02a47%3A0x6e21a773482593f0!2sVinayak%20Steel%20Furniture!5e0!3m2!1sen!2sin!4v1660648420077!5m2!1sen!2sin" width={500} height={300}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactus