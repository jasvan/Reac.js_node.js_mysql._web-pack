import React from 'react'

const footer = () => {
  return (
    <footer className="footer position-absolute bottom-2 py-2 w-100">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-12 col-md-6 my-auto">
            <div className="copyright text-center text-sm text-white text-lg-start">
              © ,
              made with <i className="fa fa-heart" aria-hidden="true" /> by
              <a href="https://www.creative-tim.com" className="font-weight-bold text-white" target=" ">Creative Tim</a>
              for a better web.
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="https://www.creative-tim.com" className="nav-link text-white" target=" ">Creative Tim</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/presentation" className="nav-link text-white" target=" ">About Us</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/blog" className="nav-link text-white" target=" ">Blog</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target=" ">License</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
