/*
import React from 'react'
import Image from 'next/image'
import Image1 from '../public/foldingtable-removebg-preview.png'
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
                <h2 className="newarrival-text-h2">Foldable Table</h2>
                <h6 className="newarrival-text-h6"> Laptop Foldable Metal Portable Laptop Table </h6>
                <br></br>
                <h6 className="newarrival-text-h6">Limited edition</h6>
                <br></br>
                <button type="button" className="btn btn-dark buttonnewarrival"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewArrivals

*/


import React from 'react'
import Image from 'next/image'
import Image1 from '../public/foldingtable-removebg-preview.png'
function NewArrivals() {
  return(
    <div>
      <section>
        <div className='newarrival marginheading'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
              <Image src={Image1} alt="" className='imageNewArrivals'></Image>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5'>
                <h5>NEW ARRIVALS</h5>
                <h4 className="newarrival-text-h5 mt-3 newarrival-heading">Foldable Table</h4>
                <h3 className="newarrival-text-h6 mt-2 newarrival-heading"> Laptop Foldable Metal Portable <spam>Laptop Table </spam></h3>
                <br></br>

                <h5 >Limited edition</h5>
                <br></br>
                <button type="button" className="btn btn-dark buttonnewarrival mt-3 mb-3"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default NewArrivals
