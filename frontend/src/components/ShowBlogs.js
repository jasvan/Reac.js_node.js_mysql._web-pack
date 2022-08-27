/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import axios from 'axios'

const endpoint = 'http://localhost:8000'

const ShowBlogs = () => {
  const [ users, setUsers ] = useState( [] )

  useEffect( () => {
    getAllBlogs()
  }, [] )

  const getAllBlogs = async () => {
    const response = await axios.get( `${ endpoint }/blogs` )
    setUsers( response.data )
  }

  const deleteBlog = async ( id ) => {
    await axios.delete( `${ endpoint }/blogs/${ id }` )
    getAllBlogs()
  }

  return (
    <div class="g-sidenav-show  bg-gray-200">
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target=" ">
            <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/dashboard.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active bg-gradient-primary" href="../pages/tables.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/billing.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/virtual-reality.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/rtl.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">format_textdirection_r_to_l</i>
                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/notifications.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/profile.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/sign-in.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/sign-up.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">assignment</i>
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
          </div>
        </div>
      </aside>

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */ }
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">

                  <a className="opacity-5 text-dark" href=" ">
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Tables</li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Tables</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                  <label className="form-label">Type here...</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a href="../pages/sign-in.html" className="nav-link text-body font-weight-bold px-0">
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href=" " className="nav-link text-body p-0" id="iconNavbarSidenav">
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href=" " className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a href=" " className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href=" ">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            {/* <img src={ avatar } className="avatar avatar-sm  me-3" alt="" /> */ }
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New message</span> from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href=" ">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img src="../assets/img/small-logos/logo-spotify.svg" alt="" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">New album</span> by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-radius-md" href=" ">
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <title>credit-card</title>
                              <g stroke="none" strokeWidth={ 1 } fill="none" fillRule="evenodd">
                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743" />
                                      <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */ }

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">List User
                      <span>
                        <Link to="/Create" className="text-secondary font-weight-bold text-xs">
                          <Icon icon="akar-icons:plus" color="white" width="24" height="24" />
                        </Link>
                      </span>
                    </h6>

                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Password</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Create date</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Options</th>
                          <th className="text-secondary opacity-7" />
                        </tr>
                      </thead>
                      <tbody>

                        { users.map( ( user ) => (
                          <tr>
                            <td>
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">
                                    { user.usuario }
                                  </h6>
                                  <p className="text-xs text-secondary mb-0">
                                    {/* john@creative-tim.com */ }
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <p className="text-xs font-weight-bold mb-0">
                                { user.email }
                              </p>
                              <p className="text-xs text-secondary mb-0">
                                { user.password }
                              </p>
                            </td>

                            <td className="align-middle text-center text-sm">
                              <span className="badge badge-sm bg-gradient-success">
                                Online
                              </span>
                            </td>

                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">
                                { user.createdAt }
                              </span>
                            </td>

                            <td className="align-middle">
                              <Link to={ `/update/${ user.id }` }
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Edit blog">
                                <Icon icon="ei:pencil" color="#303f9f" width="28" height="28" />
                              </Link>
                            </td>

                            <td className="align-middle">
                              <buttom 
                                onClick={ () => deleteBlog( user.id ) }
                                className="text-secondary font-weight-bold text-xs"
                                data-toggle="tooltip"
                                data-original-title="Delete blog">
                                <Icon icon="ei:trash" color="#d32f2f" width="28" height="28" />
                              </buttom>
                            </td>
                          </tr>
                        ) )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Projects table</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-content-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/logo-asana.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Asana</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$2,500</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">working</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">60%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={ 60 } aria-valuemin={ 0 } aria-valuemax={ 100 } style={ { width: '60%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/github.svg" className="avatar avatar-sm rounded-circle me-2" alt="invision" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Github</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$5,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">done</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">100%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={ 100 } aria-valuemin={ 0 } aria-valuemax={ 100 } style={ { width: '100%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm rounded-circle me-2" alt="jira" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Atlassian</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$3,400</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">canceled</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">30%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow={ 30 } aria-valuemin={ 0 } aria-valuemax={ 30 } style={ { width: '30%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/bootstrap.svg" className="avatar avatar-sm rounded-circle me-2" alt="webdev" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Bootstrap</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$14,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">working</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">80%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={ 80 } aria-valuemin={ 0 } aria-valuemax={ 80 } style={ { width: '80%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm rounded-circle me-2" alt="slack" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Slack</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$1,000</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">canceled</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">0%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={ 0 } aria-valuemin={ 0 } aria-valuemax={ 0 } style={ { width: '0%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img src="../assets/img/small-logos/devto.svg" className="avatar avatar-sm rounded-circle me-2" alt="xd" />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Devto</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">$2,300</p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">done</span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">100%</span>
                              <div>
                                <div className="progress">
                                  <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={ 100 } aria-valuemin={ 0 } aria-valuemax={ 100 } style={ { width: '100%' } } />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer py-4  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    © ,
                    made with <i className="fa fa-heart" /> by
                    <a href="https://www.creative-tim.com" className="font-weight-bold" target=" ">Creative Tim</a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com" className="nav-link text-muted" target=" ">Creative Tim</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target=" ">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target=" ">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target=" ">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="material-icons py-2">settings</i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Material UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="material-icons">clear</i>
              </button>
            </div>
            {/* End Toggle Button */ }
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            {/* Sidebar Backgrounds */ }
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a href=" " className="switch-trigger background-color">
              <div className="badge-colors my-2 text-start">
                <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)" />
                <span className="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)" />
                <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)" />
                <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)" />
                <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)" />
                <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)" />
              </div>
            </a>
            {/* Sidenav Type */ }
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div className="d-flex">
              <button className="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
              <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent" onclick="sidebarType(this)">Transparent</button>
              <button className="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
            {/* Navbar Fixed */ }
            <div className="mt-3 d-flex">
              <h6 className="mb-0">Navbar Fixed</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
              </div>
            </div>
            <hr className="horizontal dark my-3" />
            <div className="mt-2 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
              </div>
            </div>
            <hr className="horizontal dark my-sm-4" />
            <a className="btn bg-gradient-info w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro">Free Download</a>
            <a className="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard">View documentation</a>
            <div className="w-100 text-center">
              <a className="github-button"
                href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" className="btn btn-dark mb-0 me-2" target=" " rel="noreferrer">
                <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" className="btn btn-dark mb-0 me-2" target=" ">
                {/* target="_blank" */ }
                <i className="fab fa-facebook-square me-1" aria-hidden="true" /> Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*   Core JS Files   */ }
      {/* Github buttons */ }
      {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */ }
    </div>

  )
}

export default ShowBlogs