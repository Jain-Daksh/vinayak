/*
import React from 'react'
import Image from 'next/image'
import Image1 from '../public/sofa.png'
import Image2 from '../public/stool.png'
function HomePage() {
  return (
    <div>
      <section className="carouselslide">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">

              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1> Fabric</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image2} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
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

*/
/*
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
*/

import React from 'react'
import Image from 'next/image'
import Image1 from '../public/sofa.png'
import Image2 from '../public/stool.png'
function HomePage() {
  return (
    <div>
      <section className="carouselslide" id='colorCarousel' >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">

              <Image src={Image1} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1> Fabric</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image src={Image2} alt="logo" className='d-block imagecarousel' ></Image>
              <div className="carousel-caption">
                <h1>District Eight</h1>
                <h1>Stool</h1>
                <button type="button" className="btn btn-dark buttoncrousel">Order Now</button>
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
