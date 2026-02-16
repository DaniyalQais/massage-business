import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="container-fluid sticky-top px-0">
            <div className="container-fluid topbar d-none d-lg-block">
                <div className="container px-0">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap">
                                <a href="#" className="me-4 text-light"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                                <a href="#" className="me-4 text-light"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                                <a href="#" className="text-light"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="me-3 btn-square border rounded-circle nav-fill"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="btn-square border rounded-circle nav-fill"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-primary display-4">Your Business</h1>
                        </Link>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                            <div className="navbar-nav mx-auto border-top">
                                <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
                                <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
                                <Link to="/service" className={`nav-item nav-link ${isActive('/service')}`}>Services</Link>
                                <Link to="/price" className={`nav-item nav-link ${isActive('/price')}`}>Price</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="/team" className="dropdown-item">Team</Link>
                                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link to="/gallery" className="dropdown-item">Gallery</Link>
                                        <Link to="/appointment" className="dropdown-item">Appointment</Link>
                                        <Link to="/404" className="dropdown-item">404 page</Link>
                                    </div>
                                </div>
                                <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact Us</Link>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                                <button className="btn-search btn btn-primary btn-primary-outline-0 rounded-circle btn-lg-square" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                <Link to="/appointment" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-4 ms-4">Book Appointment</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
