import React from 'react'

const teamMembers = [
    { name: "Oliva Mia", role: "Spa & Beauty Expert", img: "/img/team-1.png" },
    { name: "Charlotte Ross", role: "Spa & Beauty Expert", img: "/img/team-2.png" },
    { name: "Amelia Luna", role: "Spa & Beauty Expert", img: "/img/team-3.png" },
    { name: "Isabella Evelyn", role: "Spa & Beauty Expert", img: "/img/team-4.png" },
]

const Team = () => {
    return (
        <div className="container-fluid team py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
                    <p className="fs-4 text-uppercase text-primary">Spa Specialist</p>
                    <h1 className="display-4 mb-4">Spa & Beauty Specialist</h1>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                            <div className="team-item">
                                <div className="team-img rounded-top">
                                    <img src={member.img} className="img-fluid w-100 rounded-top bg-light" alt={member.name} />
                                </div>
                                <div className="team-text rounded-bottom text-center p-4">
                                    <h3 className="text-white">{member.name}</h3>
                                    <p className="mb-0 text-white">{member.role}</p>
                                </div>
                                <div className="team-social">
                                    <a className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-light btn-light-outline-0 btn-square rounded-circle mb-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-light btn-light-outline-0 btn-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
