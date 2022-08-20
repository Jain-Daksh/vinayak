import React from 'react'
import Image from 'next/image'
import Image1 from '../public/table.jpg'
import Image5 from '../public/rack1.jpg'
import Image3 from '../public/schooltable.jpg'
import Image4 from '../public/glassdoor.jpg'
import Image2 from '../public/stool.webp'
import Image6 from '../public/chair.webp'
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
