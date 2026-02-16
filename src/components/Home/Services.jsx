import React from 'react'

const serviceData = [
    { title: "Skin Care", img: "/img/services-1.jpg", position: "end" },
    { title: "Face Masking", img: "/img/services-2.jpg", position: "start" },
    { title: "Stream Bath", img: "/img/services-3.jpg", position: "end" },
    { title: "Facial Therapy", img: "/img/services-4.jpg", position: "start" },
    { title: "Body Massage", img: "/img/services-5.jpg", position: "end" },
    { title: "Aroma Therapy", img: "/img/services-6.jpg", position: "start" },
    { title: "Mineral Baths", img: "/img/services-3.jpg", position: "end" },
    { title: "Stone Therapy", img: "/img/services-1.jpg", position: "start" },
]

const Services = () => {
    return (
        <div className="container-fluid services py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '800px' }}>
                    <p className="fs-4 text-uppercase text-center text-primary">Our Service</p>
                    <h1 className="display-3">Spa & Beauty Services</h1>
                </div>
                <div className="row g-4">
                    {serviceData.map((service, index) => (
                        <div key={index} className="col-12 col-lg-6">
                            <div className="services-item bg-light border-4 border-start border-primary rounded p-4">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <div className="services-img d-flex align-items-center justify-content-center rounded">
                                            <img src={service.img} className="img-fluid rounded" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={service.title} />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="services-content text-start">
                                            <h3>{service.title}</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                            <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4 mt-3">Make Order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12">
                        <div className="services-btn text-center">
                            <a href="#" className="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Service More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
