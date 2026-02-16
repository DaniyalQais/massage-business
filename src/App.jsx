import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Price from './pages/Price'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Gallery from './pages/Gallery'
import Appointment from './pages/Appointment'

const NotFound = () => (
    <div className="container-fluid py-5">
        <div className="container py-5 text-center">
            <h1 className="display-1">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
        </div>
    </div>
)

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/price" element={<Price />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
