import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const plans = [
    {
        name: "Basic Plan",
        price: "49",
        items: ["Full Body Massage", "Deep Tissue Massage", "Hot Stone Massage", "Tissue Body Polish", "Foot & Nail Care"]
    },
    {
        name: "Family Plan",
        price: "99",
        items: ["Full Body Massage", "Deep Tissue Massage", "Hot Stone Massage", "Tissue Body Polish", "Foot & Nail Care"]
    },
    {
        name: "VIP Plan",
        price: "149",
        items: ["Full Body Massage", "Deep Tissue Massage", "Hot Stone Massage", "Tissue Body Polish", "Foot & Nail Care"]
    },
    {
        name: "Most Plan",
        price: "199",
        items: ["Full Body Massage", "Deep Tissue Massage", "Hot Stone Massage", "Tissue Body Polish", "Foot & Nail Care"]
    },
]

const Pricing = () => {
    const [index, setIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 576) {
                setItemsToShow(1);
            } else if (width < 992) {
                setItemsToShow(2);
            } else if (width < 1200) {
                setItemsToShow(3);
            } else {
                setItemsToShow(4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % plans.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const next = () => {
        setIndex((prev) => (prev + 1) % plans.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + plans.length) % plans.length);
    };

    const getVisibleItems = () => {
        const visible = [];
        for (let i = 0; i < itemsToShow; i++) {
            visible.push(plans[(index + i) % plans.length]);
        }
        return visible;
    };

    const getColClass = () => {
        if (itemsToShow === 1) return "col-12";
        if (itemsToShow === 2) return "col-sm-6";
        if (itemsToShow === 3) return "col-lg-4";
        return "col-xl-3";
    };

    return (
        <div className="container-fluid pricing py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    <p className="fs-4 text-uppercase text-white">Our Pricing</p>
                    <h1 className="display-4 mb-4 text-white">Affordable Price For All</h1>
                </div>
                <div className="pricing-carousel-container position-relative">
                    <div className="row g-4 overflow-hidden flex-nowrap">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {getVisibleItems().map((plan, i) => (
                                <motion.div
                                    key={`${index}-${i}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className={getColClass()}
                                >
                                    <div className="pricing-item h-100">
                                        <div className="rounded pricing-content h-100">
                                            <div className="d-flex align-items-center justify-content-between bg-light rounded-top border-3 border-bottom border-primary p-4">
                                                <h1 className="display-4 mb-0">
                                                    <small className="align-top text-muted" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                                                    {plan.price}
                                                    <small className="text-muted" style={{ fontSize: '16px', lineHeight: '40px' }}>/Mo</small>
                                                </h1>
                                                <h5 className="text-primary text-uppercase m-0">{plan.name}</h5>
                                            </div>
                                            <div className="p-4 rounded-bottom" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                                {plan.items.map((item, idx) => (
                                                    <p key={idx} className="text-white"><i className="fa fa-check text-primary me-2"></i>{item}</p>
                                                ))}
                                                <a href="" className="btn btn-primary btn-primary-outline-0 rounded-pill my-2 px-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Carousel Controls */}
                    <div className="d-flex justify-content-center mt-5">
                        <button onClick={prev} className="btn btn-primary btn-primary-outline-0 rounded-circle mx-2" style={{ width: '45px', height: '45px' }}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button onClick={next} className="btn btn-primary btn-primary-outline-0 rounded-circle mx-2" style={{ width: '45px', height: '45px' }}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
