import React from "react";

import Industries from "../industries/industries";

function Services() {
    return (
        <div className="services">
            <div className="services-heading">
                <span></span>
                <h4>What we do</h4>
            </div>
            <div className="description">
                <p>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            </div>

            <Industries />
        </div>
    )
}

export default Services;