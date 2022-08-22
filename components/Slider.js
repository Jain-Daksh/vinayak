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
        <OwlCarousel>
        <div className="item">
          <Image src={Image1} alt="logo"  className='imagegallerys'></Image>
        </div>
          <div className="item">
        <Image src={Image2} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
          <Image src={Image3} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image5} alt="logo" className='imagegallerys'></Image>
        </div>
        <div className="item">
        <Image src={Image6} alt="logo" className='imagegallerys'></Image>
        </div>
        </OwlCarousel>
      </section>
    </div>
  );
}
