import React from 'react'

function Footer() {
  return (
    <div>
      <hr></hr>
        <div className="container ">
          <div className="row">
            <div className="col col-md-9 col-sm-12 mt-3 footer-text-left">
              © 2022 Vinayak Steel Furniture. All Rights Reserved
            </div>

            <div className="col col-md-3 col-sm-12  justify-content-end">
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item">Home</li>
                <li className="list-inline-item">About</li>
                <li className="list-inline-item">Product</li>
                <li className="list-inline-item">Contact</li>
              </ul>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer