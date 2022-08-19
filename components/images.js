import React from 'react'
import Image from 'next/image'
import Image1 from '../public/gallery_05-1.jpg'
import Image2 from '../public/gallery_03-1.jpg'
import Image3 from '../public/gallery_01-2.jpg'
import Image4 from '../public/gallery_02-1.jpg'
import Image5 from '../public/gallery_04-1.jpg'
import Image6 from '../public/gallery_06-1.jpg'
function Images() {
  return (
    <div>
      <section className="imagegallery">
        <div>
          <div className="container text-center">
            <div className="row g-4 x-5">
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image1} alt="logo" className='imagegallerys'></Image>
              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image2} alt="logo" className='imagegallerys'></Image>

              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image3} alt="logo" className='imagegallerys'></Image>


              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image4} alt="logo" className='imagegallerys'></Image>


              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image5} alt="logo" className='imagegallerys'></Image>


              </div>
              <div className="col-lg-2 col-sm-6 col-xs-12 col-md-6">
                <Image src={Image6} alt="logo" className='imagegallerys'></Image>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Images
