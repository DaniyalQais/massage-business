import React from 'react'

const counters = [
    { icon: "fa-globe", label: "Worldwide Clients", count: "379" },
    { icon: "fa-spa", label: "Wellness & Spa", count: "829" },
    { icon: "fa-users", label: "Happy Customers", count: "713" },
]

const Counter = () => {
    return (
        <div className="container-fluid counter-section">
            <div className="container py-5">
                <div className="row g-5 justify-content-center">
                    {counters.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xl-4">
                            <div className="counter-item p-5">
                                <div className="counter-content bg-white p-4">
                                    <i className={`fas ${item.icon} fa-5x text-primary mb-3`}></i>
                                    <h5 className="text-primary">{item.label}</h5>
                                    <div className="svg-img">
                                        <svg width="100" height="50">
                                            <polygon points="55, 10 85, 55 25, 55 25," style={{ fill: '#DCCAF2' }} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="counter-quantity">
                                    <span className="text-white fs-2 fw-bold" data-toggle="counter-up">{item.count}</span>
                                    <span className="h1 fw-bold text-white">+</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Counter
