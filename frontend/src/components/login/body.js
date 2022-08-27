
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik'
import axios from 'axios';

const endpoint = 'http://localhost:8000'
const Body = () => {
  const [ user, setUser ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const navigate = useNavigate();
  const { id } = useParams();

  const endpoint = 'http://localhost:8000/blogs'
  const upDate = async ( e ) => {
    e.preventDefault()
    await axios.put( `${ endpoint }${ id }`, {
      user: user,
      email: email,
      password: password
    } )
    navigate( '/' )
  }
  useEffect( () => {
    const getUserById = async () => {
      const response = await axios.get( `${ endpoint }${ id }` )
      setUser( response.data.user )
      setEmail( response.data.email )
      setPassword( response.data.email )
    }
    getUserById()
  }, [] )
  return (
    <div className="row">
      <div className="col-lg-4 col-md-8 col-12 mx-auto">
        <div className="card z-index-0 fadeIn3 fadeInBottom">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
              <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Update user</h4>
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
            <Formik
              initialValues={ { user: '', email: '', password: '' } }
              validate={ values => {
                let errors = {};
                if ( !values.email )
                {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
                )
                {
                  errors.email = 'Invalid email adress';
                }
                if ( !values.user )
                {
                  errors.user = ' Required';
                }
                if ( !values.password )
                {
                  errors.password = ' Required';
                }
                return errors;
              } }
              onSubmit={ ( values, { setSubmitting } ) => {
                setTimeout( () => {
                  alert( JSON.stringify( values, null, 2 ) );
                  setSubmitting( false );
                }, 1000 )
              } }
            >
              { ( {
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              } ) => (
                <form onChange={ upDate } className="text-start">
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label"> User </label>
                    <input
                      type="text"
                      value={ user }
                      onChange={ ( e ) => setUser( e.target.value ) }
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label"> Email </label>
                    <input
                      type="text"
                      value={ email }
                      onChange={ ( e ) => setEmail( e.target.value ) }
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label"> Password </label>
                    <input
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
                      type="button"
                      className="btn bg-gradient-primary w-100 my-4 mb-2">
                      Update
                    </button>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    Don't have an account?
                    <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Update user</a>
                  </p>
                </form>
              ) }
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
