import React from "react";
import Image from 'next/image'
import Image1 from '../public/table.jpg'
import Image5 from '../public/rack1.jpg'
import Image3 from '../public/schooltable.jpg'
import Image2 from '../public/stool.webp'
import Image6 from '../public/chair.webp'

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <div>
      <section className="slidername">
      <div className="row text-center">
  
            <OwlCarousel 
            loop
            items={4}

            className="owl-carousel"
            >
            <div className="col-12 col-md-6 image-shops">
                  <Image
                    src={Image1}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-6 image-shops">
                  <Image
                    src={Image5}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-6 image-shops">
                  <Image
                    src={Image3}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-6 image-shops">
                  <Image
                    src={Image2}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                <div className="col-12 col-md-6 image-shops">
                  <Image
                    src={Image6}
                    alt="Abc logo"
                    className="image-shop"
                  />
                </div>
                </OwlCarousel>
                </div>
      </section>
    </div>
  );
}