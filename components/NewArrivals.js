import React from 'react'
import Image from 'next/image'
import Image1 from '../public/h3_image-1.jpg'
function NewArrivals() {
  return (
    <div>
      <section className='newarrival'>
        <div >
          <div className="container text-left">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <Image src={Image1} alt="" className='imageNewArrivals'></Image>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 newarrival-text">
                <h5 className="newarrival-text-h5">NEW ARRIVALS</h5>
                <h2 className="newarrival-text-h2">Wooden Snail Decor</h2>
                <h6 className="newarrival-text-h6"> Exclusive, Customized & Handmade Products.</h6>
                <br></br>
                <h6 className="newarrival-text-h6">Limited edition</h6>
                <br></br>
                <button type="button" className="btn btn-dark buttonnewarrival">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewArrivals