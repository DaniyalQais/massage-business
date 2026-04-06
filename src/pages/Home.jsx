import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import Appointment from '../components/Home/Appointment'
import Counter from '../components/Home/Counter'
import Gallery from '../components/Home/Gallery'
import Pricing from '../components/Home/Pricing'
import Team from '../components/Home/Team'
import Testimonial from '../components/Home/Testimonial'
import ContactInfo from '../components/Home/ContactInfo'

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Appointment />
            <Counter />
            <Gallery />
            <Pricing />
            <Team />
            <Testimonial />
            <ContactInfo />
        </main>
    )
}

export default Home
