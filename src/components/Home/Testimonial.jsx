import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    { name: "John Doe", profession: "Spa Lover", img: "/img/testimonial-1.jpg", text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
    { name: "Jane Smith", profession: "Regular Client", img: "/img/testimonial-2.jpg", text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
    { name: "Robert Wilson", profession: "Beauty Consultant", img: "/img/testimonial-3.jpg", text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
]

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setItemsToShow(1);
            } else {
                setItemsToShow(2);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleItems = () => {
        const visible = [];
        for (let i = 0; i < itemsToShow; i++) {
            visible.push(testimonials[(index + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    <p className="fs-4 text-uppercase text-primary">Testimonial</p>
                    <h1 className="display-4 mb-4 text-white">What Our Clients Say!</h1>
                </div>
                <div className="testimonial-carousel-container position-relative">
                    <div className="row g-4 overflow-hidden flex-nowrap">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {getVisibleItems().map((t, i) => (
                                <motion.div
                                    key={`${index}-${i}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className={itemsToShow === 1 ? "col-12" : "col-lg-6"}
                                >
                                    <div className="testimonial-item rounded p-4 position-relative h-100">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="d-flex flex-column mx-auto">
                                                    <div className="rounded-circle mb-4">
                                                        <img src={t.img} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className="text-center">
                                                        <h4 className="mb-2 text-primary">{t.name}</h4>
                                                        <p className="m-0 text-white">{t.profession}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="position-absolute" style={{ top: '20px', right: '25px' }}>
                                                    <i className="fa fa-quote-right fa-2x text-secondary"></i>
                                                </div>
                                                <div className="testimonial-content">
                                                    <div className="d-flex mb-4">
                                                        <i className="fas fa-star text-primary"></i>
                                                        <i className="fas fa-star text-primary"></i>
                                                        <i className="fas fa-star text-primary"></i>
                                                        <i className="fas fa-star text-primary"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <p className="fs-5 mb-0 text-white">{t.text}</p>
                                                </div>
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

export default Testimonial
