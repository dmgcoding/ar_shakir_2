import React from 'react'
import './Services.css'
import { services_icon1,services_icon2,services_icon3,services_icon4,services_icon5,services_icon6,services_icon7 } from '../imports';

const allServices = [
  {
    icon: services_icon1,
    heading: "Project Management",
    details: "30 options available"
  },
  {
    icon: services_icon2,
    heading: "Web & Mobile Developement",
    details: "30 options available"
  },
  {
    icon: services_icon3,
    heading: "Customer Support",
    details: "30 options available"
  },
  {
    icon: services_icon4,
    heading: "Human Resources",
    details: "30 options available"
  },
  {
    icon: services_icon5,
    heading: "Design & Creatives",
    details: "30 options available"
  },
  {
    icon: services_icon6,
    heading: "Marketing & Communication",
    details: "30 options available"
  },
  {
    icon: services_icon7,
    heading: "Business Development",
    details: "30 options available"
  },
];

const Services = () => {

  const serviceBox = (icon, title, details)=>{
    return (
      <>
      <div className="w__home__services__container-boxes-box">
            <div className="w__home__services__container-boxes-box-iconbox">
              <img src={icon} alt="" />
            </div>
            <p className="w__home__services__container-boxes-box-heading">
            {title}</p>
            <p className="w__home__services__container-boxes-box-details">
            {details}
            </p>
      </div>
      </>
    );
  }

  return (
    <div className="w__home__services">
      <div className="w__home__services-bg">
        <img src="" alt="" />
      </div>
      <div className="w__home__services__container">
        <div className="w__home__services__container-title">
          <p className="w__home__services__container-title-title">
          OUR SERVICES
          </p>
          <p className="w__home__services__container-title-heading">
          Save Time Managing Your Business With Our Best Services
          </p>
        </div>
        <div className="w__home__services__container-boxes">
          {
            allServices.map(s=>
              (serviceBox(s.icon, s.heading, s.details))
            )
          }
          <div className="w__home__services__container-boxes-box2">
              <p className="w__home__services__container-boxes-box2-heading">
              +4
              </p>
              <p className="w__home__services__container-boxes-box2-heading">
              More
              </p>
              <p className="w__home__services__container-boxes-box2-details">
              30 options available
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services