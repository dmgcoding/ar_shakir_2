import React,{useEffect} from 'react'
import Aos from 'aos'
import './Process.css'
import 'aos/dist/aos.css'
import { process_curve_down,process_curve_up } from '../imports'
import process_img1 from '../../../assets/home/process/process_img1.png'
import process_img2 from '../../../assets/home/process/process_img2.png'
import process_img3 from '../../../assets/home/process/process_img3.png'
import process_img4 from '../../../assets/home/process/process_img4.png'

const boxes = [
  {
    num: 1,
    anim: 'fade-right',
    img: process_img2,
    step: "Register",
    details: "It more shed went up is roof if loud case. Delay music in lived noise an."
  },
  {
    num: 2,
    anim: 'fade-up',
    img: process_img3,
    step: "Complete Setup",
    details: "Beyond genius really enough passed is up. Up maids me an ample stood given."
  },
  {
    num: 3,
    anim: 'fade-left',
    img: process_img4,
    step: "Utilize App",
    details: "Certainty say suffering his him collected intention promotion. Hill sold ham men."
  },
]

const Process = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const processBox = (num,anim, img, step, details)=>{
    return (
      <>
      <div data-aos={anim} data-aos-once='true' key={num} className="w__home__process__container-processbox-box">
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
        <div className="w__home__process__container-title" data-aos='zoom-in'>
          <img src={process_img1} alt="" />
          <p className="w__home__process__container-title-heading">
            Learn More About Process
            </p>
          <p className="w__home__process__container-title-subheading">
          Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably.
          </p>
        </div>
        <div className="w__home__process__container-processbox">
          <img data-aos='fade-right' data-aos-once='true' src={process_curve_down} alt="" className="w__home__process_container-processbox-curvedown" />
          <img data-aos='fade-up' data-aos-once='true' src={process_curve_up} alt="" className="w__home__process_container-processbox-curveup" />
          {boxes.map(b=>(
              processBox(b.num,b.anim, b.img, b.step, b.details)
            ))}
        </div>
      </div>
    </div>
  )
}

export default Process