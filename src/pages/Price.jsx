import React from 'react'
import PageHeader from '../components/PageHeader'
import PricingSection from '../components/Home/Pricing'
import ServiceSection from '../components/Home/Services'

const Price = () => {
    return (
        <>
            <PageHeader title="Pricing" />
            <PricingSection />
            <ServiceSection />
        </>
    )
}

export default Price
