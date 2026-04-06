import React, { useState } from 'react'

const galleryCategories = [
    { id: 'tab-1', label: 'All Gallery', images: ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6', 'gallery-7', 'gallery-8'] },
    { id: 'tab-2', label: 'Skin Care', images: ['gallery-9', 'gallery-10', 'gallery-5', 'gallery-1'] },
    { id: 'tab-3', label: 'Stream Bath', images: ['gallery-11', 'gallery-12', 'gallery-2', 'gallery-6'] },
    { id: 'tab-4', label: 'Stone Therapy', images: ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4'] },
    { id: 'tab-5', label: 'Face Massage', images: ['gallery-5', 'gallery-6', 'gallery-7', 'gallery-8'] },
]

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    return (
        <div className="container-fluid gallery py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    <p className="fs-4 text-uppercase text-primary">Our Gallery</p>
                    <h1 className="display-4 mb-4">Let's See Our Gallery</h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                        {galleryCategories.map(cat => (
                            <li key={cat.id} className="nav-item">
                                <a className={`d-block mx-2 py-2 px-4 border border-primary bg-light rounded-pill ${activeTab === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(cat.id)}
                                    style={{ cursor: 'pointer', minWidth: '150px' }}>
                                    <span className="text-dark">{cat.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content">
                        {galleryCategories.map(cat => (
                            <div key={cat.id} id={cat.id} className={`tab-pane fade show p-0 ${activeTab === cat.id ? 'active' : ''}`}>
                                <div className="row g-4">
                                    {cat.images.map((img, idx) => (
                                        <div key={idx} className="col-6 col-md-4 col-lg-3">
                                            <div className="gallery-img">
                                                <img className="img-fluid rounded w-100" src={`/img/${img}.jpg`} alt="" />
                                                <div className="gallery-overlay p-4">
                                                    <h4 className="text-secondary">{cat.label}</h4>
                                                </div>
                                                <div className="search-icon">
                                                    <a href={`/img/${img}.jpg`} data-lightbox={`Gallery-${cat.id}`} className="my-auto">
                                                        <i className="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
