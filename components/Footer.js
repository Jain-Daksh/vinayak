import React from 'react'

function Footer() {
  return (
    <div>
      <hr></hr>
        <div className="container ">
          <div className="row">
            <div className="col col-md-9 col-sm-12 col-xs-12 mt-3 footer-text-left">
              © 2022 Vinayak Steel Furniture. All Rights Reserved
            </div>

            <div className="col col-md-3 col-sm-12 col-xs-12 justify-content-end ">
              <ul className="list-inline mb-0 mt-3 ">
                <li className="list-inline-item "> <a href='#'> Home </a> </li>
                <li className="list-inline-item"> <a href='#about'>About </a></li>
                <li className="list-inline-item"><a href='#product'> Product </a></li>
                <li className="list-inline-item"> <a href='#contact'> Contact </a></li>
              </ul>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer