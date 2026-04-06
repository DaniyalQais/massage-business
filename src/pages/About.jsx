import React from 'react'
import PageHeader from '../components/PageHeader'
import AboutSection from '../components/Home/About'
import TeamSection from '../components/Home/Team'

const About = () => {
    return (
        <>
            <PageHeader title="About Us" />
            <AboutSection />
            <TeamSection />
        </>
    )
}

export default About
