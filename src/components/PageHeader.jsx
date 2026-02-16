import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({ title, breadcrumb }) => {
    return (
        <div className="container-fluid bg-breadcrumb py-5">
            <div className="container text-center py-5">
                <h3 className="text-white display-3 mb-4">{title}</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active text-white">{breadcrumb || title}</li>
                </ol>
            </div>
        </div>
    )
}

export default PageHeader
