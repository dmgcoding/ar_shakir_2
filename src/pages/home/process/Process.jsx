import React from 'react'
import './Process.css'

import { process_curve_down,process_curve_up } from '../imports'
import process_img1 from '../../../assets/home/process/process_img1.png'
import process_img2 from '../../../assets/home/process/process_img2.png'
import process_img3 from '../../../assets/home/process/process_img3.png'
import process_img4 from '../../../assets/home/process/process_img4.png'

const boxes = [
  {
    num: 1,
    img: process_img2,
    step: "Register",
    details: "It more shed went up is roof if loud case. Delay music in lived noise an."
  },
  {
    num: 2,
    img: process_img3,
    step: "Complete Setup",
    details: "Beyond genius really enough passed is up. Up maids me an ample stood given."
  },
  {
    num: 3,
    img: process_img4,
    step: "Utilize App",
    details: "Certainty say suffering his him collected intention promotion. Hill sold ham men."
  },
]

const Process = () => {

  const processBox = (num, img, step, details)=>{
    return (
      <>
      <div key={num} className="w__home__process__container-processbox-box">
        <div className="w__home__process__container-processbox-box__imgbox">
          <p className="w__home__process__container-processbox-box__imgbox-number">{num}</p>
          <img src={img} alt="" className="w__home__process__container-processbox-box__imgbox-img" />
        </div>
        <p className="w__home__process__container-processbox-box-step">
        {step}
        </p>
        <p className="w__home__process__container-processbox-box-details">
        {details}
        </p>
      </div>
      </>
    );
  }

  return (
    <div className="w__home__process">
      <div className="w__home__process__container">
        <div className="w__home__process__container-title">
          <img src={process_img1} alt="" />
          <p className="w__home__process__container-title-heading">
            Learn More About Process
            </p>
          <p className="w__home__process__container-title-subheading">
          Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably.
          </p>
        </div>
        <div className="w__home__process__container-processbox">
          <img src={process_curve_down} alt="" className="w__home__process_container-processbox-curvedown" />
          <img src={process_curve_up} alt="" className="w__home__process_container-processbox-curveup" />
          {boxes.map(b=>(
              processBox(b.num, b.img, b.step, b.details)
            ))}
        </div>
      </div>
    </div>
  )
}

export default Process