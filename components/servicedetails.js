import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 text-center">
            <img src={service.img} alt=""/>
            <p className="text-secondary">{service.desc}</p>
        </div>
    );
};

export default ServiceDetail;