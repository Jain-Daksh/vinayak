import React from 'react'
import Image from 'next/image'
import Image1 from '../public/ba2b0e898c6f932035acaa5a941fe1c8 (1).png'
import Image3 from  '../public/homepage1 (1).png'
import Image4 from  '../public/Rack-PNG-Image.png'
import Image5 from  '../public/bookshelf-modular-bookcase-14934.png'
import Image7 from  '../public/image-test1.png'

function HomePage() {
  return (
    <div>
      <section className="carouselslide" id='colorCarousel' >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">

              <Image src={Image5} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>Vinayak's Premium</h1>
                <h1> Bookshelf</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
         
            <div className="carousel-item">
              <Image src={Image7} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>Vinayak's Premium</h1>
                <h1>Bunker Bed</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image4} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>Vinayak's Premium</h1>
                <h1>Rack</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>Vinayak's Premium</h1>
                <h1>Locker</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image3} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>Vinayak's Premium</h1>
                <h1>Locker</h1>
                <button type="button" className="btn btn-dark buttoncrousel" style={{margin:6}}>Order Now</button>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
