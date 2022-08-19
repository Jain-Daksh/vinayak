import React from 'react'
import Image from 'next/image'
import Image1 from '../public/logo1.png'
import { Facebook, Instagram, Twitter, Dribbble } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function FooterWebsite() {
  return (
    <div>
      <section className="footer-website">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Image src={Image1} alt="logo" className='footerlogo' height={75} width={250}></Image>



            </div>

            <div className="col-lg-3  justify-content-end">
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-facebook" href="#"><Facebook></Facebook> </li>
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-instagram" href="#"><Instagram ></Instagram></li>
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-twitter" href="#"><Twitter ></Twitter></li>
                <li className="list-inline-item btn btn-white btn-sm shadow px-2 text-dribbble" href="#"><Dribbble ></Dribbble></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FooterWebsite