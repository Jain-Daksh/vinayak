import React from 'react'
import Image from 'next/image'
import Image1 from '../public/homepage2-removebg-preview_600x600.png'
import Image2 from '../public/bookshelf-modular-bookcase-14934_600x600.png'
import Image3 from '../public/homepage3-removebg-preview_600x600.png'
import Image5 from '../public/pngwing.com_3_600x600.png'

function HomePage() {
  return (
    <div className='homepagediv'>
      <section className="carouselslide" id='colorCarousel' >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-7 col-xs-12 col-lg-7 col-xl-7 '>
                    <Image src={Image2} alt="logo" height={625} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-xs-12 col-sm-6 col-md-5  col-lg-5 col-xl-5 align-self-center  homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Book shelf</h1>
                      <br></br>
                      <p class="align-self-center  paragarph">High Quality , Stylish bookshelf by Vinayak
                      </p>
                      <br></br>
                      <div class="align-self-end "><button type="button" className="btn buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button></div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-7 col-xs-12 col-lg-7 col-xl-7 '>
                    <Image src={Image1} alt="logo" height={625} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-xs-12 col-sm-6 col-md-5  col-lg-5 col-xl-5 align-self-center   homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Rack</h1>
                      <br></br>
                      <p class="align-self-center  paragarph">High Quality , Stylish Rack by Vinayak
                      </p>
                      <br></br>
                      <div class="align-self-end "><button type="button" className="btn  buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button></div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-7 col-xs-12 col-lg-7 col-xl-7 '>
                    <Image src={Image3} alt="logo" height={625} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-xs-12 col-sm-6 col-md-5  col-lg-5 col-xl-5 align-self-center   homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Locker</h1>
                      <br></br>
                      <p class="align-self-center paragarph">High Quality , Stylish steel Locker by Vinayak
                      </p>
                      <br></br>
                      <div class="align-self-end "><button type="button" className="btn  buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button></div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-7 col-xs-12 col-lg-7 col-xl-7 '>
                    <Image src={Image5} alt="logo" height={625} className='d-block imagecarousel image-1' id='image-1'></Image>
                  </div>
                  <div className='col-12 col-xs-12 col-sm-6 col-md-5  col-lg-5 col-xl-5 align-self-center   homepagetext'>
                    <div className='container '>
                      <h1 class="align-self-start ">Steel Almirah</h1>
                      <br></br>
                      <p class="align-self-center  paragarph">High Quality , Stylish Steel Almirah by Vinayak
                      </p>
                      <br></br>
                      <div class="align-self-end "><button type="button" className="btn  buttoncrousel"><a href="https://api.whatsapp.com/send?phone=919694985000" target="_blank">Order Now</a></button></div>
                      <br></br>
                    </div>
                  </div>
                </div>
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
