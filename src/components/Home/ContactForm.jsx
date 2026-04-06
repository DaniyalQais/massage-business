import React from 'react'

const ContactForm = () => {
    return (
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-form p-5 bg-light rounded">
                            <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
                            <h1 className="display-4 mb-4">Contact For Any Query</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control py-3 border-0" placeholder="Full Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" className="form-control py-3 border-0" placeholder="Email Address" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control py-3 border-0" placeholder="Project Subject" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea className="form-control border-0 py-3" rows="6" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn btn-primary btn-primary-outline-0 w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-img rounded">
                            <img src="/img/contact.jpg" className="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
