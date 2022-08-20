import React from 'react'
import Image from 'next/image'
import Image1 from '../public/bookshelf1.png'
import Image2 from '../public/test.png'
import Image3 from '../public/pngwing.com (3).png'
import Image4 from '../public/almari3.png'
import Image5 from '../public/chair.webp'
import Image6 from '../public/schooltable.jpg'
import Image7 from '../public/stool.png'
import Image8 from '../public/rack1.jpg'

function Product() {
  return (
    <div>
      <section className="product" id="product">
        <div className="container">
          <div className="row text-center text-product">
            <h1>Feature Products</h1>
            <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
        </div>


        <div className="product-image">
          <div className="container new">
            <div className="row gx-4">
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image1} alt="logo" className='imagegallerys'></Image>
                <figcaption>Bookshelf</figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image5} alt="logo" className='imagegallerys'></Image>
                <figcaption>Chair</figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image7} alt="logo" className='imagegallerys'></Image>
                <figcaption>Stool</figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image4} alt="logo" className='imagegallerys'></Image>
                <figcaption>Almirah</figcaption>

              </div>
            </div>
            <div className="row">
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image2} alt="logo" className='imagegallerys'></Image>
                <figcaption>Locker </figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image8} alt="logo" className='imagegallerys'></Image>
                <figcaption>Rack</figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image3} alt="logo" className='imagegallerys'></Image>
                <figcaption>Office Locker</figcaption>

              </div>
              <div className="row-cols-1 col-md-3 .col-sm-12">
                <Image src={Image6} alt="logo" className='imagegallerys'></Image>
                <figcaption>School Table</figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product

