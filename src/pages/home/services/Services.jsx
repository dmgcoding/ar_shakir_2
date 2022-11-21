import React from 'react'
import './Services.css'

import icon1 from './../../../assets/home/services/briefcase.svg'
import icon2 from './../../../assets/home/services/gem2.svg'
import icon3 from './../../../assets/home/services/headset.svg'
import icon4 from './../../../assets/home/services/lighting.svg'
import icon5 from './../../../assets/home/services/people.svg'
import icon6 from './../../../assets/home/services/ui-checks-grid.svg'
import icon7 from './../../../assets/home/services/vector-pen.svg'

import bg from './../../../assets/home/services/services_bg.svg'


const allServices = [
  {
    icon: icon1,
    heading: "Project Management",
    details: "30 options available"
  },
  {
    icon: icon2,
    heading: "Web & Mobile Developement",
    details: "30 options available"
  },
  {
    icon: icon3,
    heading: "Customer Support",
    details: "30 options available"
  },
  {
    icon: icon4,
    heading: "Human Resources",
    details: "30 options available"
  },
  {
    icon: icon5,
    heading: "Design & Creatives",
    details: "30 options available"
  },
  {
    icon: icon6,
    heading: "Marketing & Communication",
    details: "30 options available"
  },
  {
    icon: icon7,
    heading: "Business Development",
    details: "30 options available"
  },
];

const Services = () => {

  const serviceBox = (icon, title, details)=>{
    return (
      <>
      <div key={title} className="w__home__services__container-boxes-box">
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
    <div className="w__home__services" style={{backgroundImage: `url(${bg})`}}>
      {/* <div className="w__home__services-bg">
        <img src={bg} alt="" />
      </div> */}
      <div className="w__home__services__container" >
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