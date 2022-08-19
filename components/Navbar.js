import React from 'react'
import { Nav, Button, Container } from 'react-bootstrap';
import { Whatsapp } from 'react-bootstrap-icons';

import Image from 'next/image';
import Image1 from '../public/output-onlinepngtools.png'
function Navbar() {
  return (
    <div>
      <section className='navbarheader'>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar-2">
          <div className="container-fluid">
            <Image src={Image1} className="logo " width="80"
              height="80"></Image>
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

        <a href="https://api.whatsapp.com/send?phone=919694985000&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
          <Whatsapp className='class="fa fa-whatsapp my-float"'></Whatsapp>
        </a>
      </section>
    </div >
  )
}

export default Navbar



