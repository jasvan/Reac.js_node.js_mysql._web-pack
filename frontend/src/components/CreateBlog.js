import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Footer from './login/footer';

const endpoint = 'http://localhost:8000/blogs/'

const CreateBlog = () => {

  const [ usuario, setUser ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const navigate = useNavigate()

  const store = async ( e ) => {
    e.preventDefault()

    await axios.post( endpoint, {
      usuario: usuario,
      email: email,
      password: password
    } )
    navigate( '/' )

  }


  return (
    <main className="main-content  mt-0">
      <div className="page-header align-items-start min-vh-100" style={ { backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")' } }>
        <span className="mask bg-gradient-dark opacity-6" />
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sing up</h4>
                    <div className="row mt-3">
                      <div className="col-2 text-center ms-auto">
                        <a className="btn btn-link px-3" href=" ">
                          <i className="fa fa-facebook text-white text-lg" />
                        </a>
                      </div>
                      <div className="col-2 text-center px-1">
                        <a className="btn btn-link px-3" href=" ">
                          <i className="fa fa-github text-white text-lg" />
                        </a>
                      </div>
                      <div className="col-2 text-center me-auto">
                        <a className="btn btn-link px-3" href=" ">
                          <i className="fa fa-google text-white text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">

                  <form onSubmit={ ( store ) } className="text-start" autocomplete="off">
                    <div className="input-group input-group-outline my-3">
                      {/* <label className="form-label">User</label> */ }
                      <input
                        id='user'
                        type="text"
                        value={ usuario }
                        onChange={ ( e ) => setUser( e.target.value ) }
                        className="form-control"
                        required="required"
                      />

                    </div>
                    <div className="input-group input-group-outline my-3">
                      {/* <label className="form-label">Email</label> */ }
                      <input
                        id='email'
                        type="email"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        className="form-control"
                        required="required"
                      />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                      {/* <label className="form-label">Password</label> */ }
                      <input
                        id='password'
                        autocomplete="off"
                        type="text"
                        value={ password }
                        onChange={ ( e ) => setPassword( e.target.value ) }
                        className="form-control"
                      />
                    </div>
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        defaultChecked
                      />
                      <label form="rememberMe" className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn bg-gradient-primary w-100 my-4 mb-2">
                        Join us
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                      Don't have an account?
                      <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Update user</a>
                    </p>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default CreateBlog