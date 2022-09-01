import React from 'react'
import { Nav, Button, Container } from 'react-bootstrap';
import { Whatsapp , Facebook } from 'react-bootstrap-icons';

import Image from 'next/image';
import Image1 from '../public/output-onlinepngtools.png'
function Navbar() {
  return (
    <div className=''>
      <section className='navbardiv'>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar-2">
          <div className="container">
            <Image src={Image1} className="logo " width="80"
              height="80" id='logo' ></Image>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </div>
          </div>
        </Nav>

        <div class="icon-bar">
          <a href="https://www.facebook.com/vinayaksteelfurniture/" class="facebook"> 
          <Facebook className="fa fa-facebook my-float"></Facebook>
          </a>
          <a href="https://api.whatsapp.com/send?phone=919694985000" class="float whatsapp" target="_blank">
          <Whatsapp className='class="fa fa-whatsapp my-float"'></Whatsapp>
        </a>
        </div>
      </section>
    </div >
  )
}

export default Navbar



