import React from 'react'
import Image from 'next/image'
import Image1 from '../public/logo1.png'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function FooterWebsite() {
  return (
    <div>
      <section className="footer-website marginheading">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 justify-content-start">
              <Image src={Image1} alt="logo" className='footerlogo' height={75} width={250}></Image>
            </div>
            <div className="col col-md-5 col-sm-12 col-lg-5 col-xs-12 justify-content-center">
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item navbar-text"> <a href='#'> Home </a> </li>
                <li className="list-inline-item navbar-text"> <a href='#about'>About </a></li>
                <li className="list-inline-item navbar-text"><a href='#product'> Product </a></li>
                <li className="list-inline-item navbar-text"> <a href='#contact'> Contact </a></li>
              </ul>

            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12  justify-content-end">
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-facebook"><a href="https://www.facebook.com/vinayaksteelfurniture/"> <Facebook></Facebook> </a></li>
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-instagram" href="#"><Instagram ></Instagram></li>
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-whatsapp"><a href="https://api.whatsapp.com/send?phone=919694985000" class="float " target="_blank"><Whatsapp ></Whatsapp></a></li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FooterWebsite