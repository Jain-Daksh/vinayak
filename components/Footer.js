import React from 'react'

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <hr></hr>
      <div className="container ">
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 col-xs-12 mt-3 mb-2 justify-content-start footer-website">
              © {year} Vinayak Steel Furniture. All Rights Reserved
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-xs-12 mt-3 mb-2 justify-content-end text-end footer-website ">
              <p className='footerLink'>
              Design and Developed By <strong> <a href="https://alvrio.io/">Alvrio Labs</a></strong>
              </p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer

/*



*/

/*


<div className='container'>
        <div className='row'>
        <div class="d-flex">
        <div class="p-2 justify-content-start">
        © {year} Vinayak Steel Furniture. All Rights Reserved
        </div>
        <div class="p-2 justify-content-end">Website Design and Developed By <spam> <a href="https://alvrio.io/">Alvrio Labs</a></spam></div>
      </div>
        </div>
      </div>
*/