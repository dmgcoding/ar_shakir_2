import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Pricing.css'
import { pricing_bg_p,pricing_check_icon, pricing_check_icon_bgwhite,pricing_cross_icon} from '../imports'
import {BsArrowRight} from 'react-icons/bs';

const boxes = [
  {
    plan: "BASIC PLAN",
    pricing: "$0",
    details: "Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured.",
    pros: ["Customer Support","Free User Account"],
    cons: ["Monthly Reports","Multiple Devices"],
    btnText: "Join for free"
  },
  {
    plan: "PREMIUM PLAN",
    pricing: "$49",
    details: "On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe.",
    pros: ["Customer Support","Upto 10 Users","Monthly Reports","Multiple Devices Supported"],
    cons: [],
    btnText: "Get the premium"
  }
]

const Pricing = () => {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const renderBox = (classbase, box)=>{
    let checkIcon = pricing_check_icon;
    if(classbase === "box2") checkIcon = pricing_check_icon_bgwhite;
    return (
      <>
      <div data-aos={`${classbase == 'box1' ? 'fade-right': 'fade-left'}`} data-aos-once='true' className={`w__home__pricing__container-boxes-${classbase}`}>
            <p className={`w__home__pricing__container-boxes-${classbase}-plan`}>
            {box.plan}
            </p>
            <p className={`w__home__pricing__container-boxes-${classbase}-price`}>
            {box.pricing} <span>Per month</span>
            </p>
            <p className={`w__home__pricing__container-boxes-${classbase}-details`}>
            {box.details}
            </p>
            <hr style={{margin: '1.5rem 0'}} />

            {
              box.pros.map(m=>(
                <div className={`w__home__pricing__container-boxes-${classbase}-pros`}>
                    <img src={checkIcon} alt="" />
                    <p>{m}</p>
                </div>
              ))
            }
            {
              box.cons.map(m=>(
                <div className={`w__home__pricing__container-boxes-${classbase}-pros`}>
                  <img src={pricing_cross_icon} alt="" />
                  <p>{m}</p>
                 </div>
              ))
            }
  
            <button className={`w__home__pricing__container-boxes-${classbase}-btn`}>
              <p>{box.btnText}</p> <BsArrowRight size={28}/>
            </button>
            
          </div>
      </>
    )
  }

  return (
    <div className="w__home__pricing" style={{backgroundImage: `url(${pricing_bg_p})`}}>
      <div className="w__home__pricing__container">
        <div className="w__home__pricing__container-texts" data-aos='fade-up' data-aos-once='true'>
          <p className="w__home__pricing__container-texts-title">
          PRICING
          </p>
          <p className="w__home__pricing__container-texts-heading">
          Start today, with free or premium plan, you choose
          </p>
          <p className="w__home__pricing__container-texts-para">
          With lots of unique and useful features, you can easily manage your wallet easily without any problem.
          </p>
        </div>
        <div className="w__home__pricing__container-boxes">
          {renderBox("box1",boxes[0])}
          {renderBox("box2",boxes[1])}
        </div>
      </div>
    </div>
  )
}

export default Pricing