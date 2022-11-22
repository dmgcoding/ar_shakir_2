import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Testimonials.css';
import { quote_icon,star_icon,left_arrow_icon,right_arrow_icon} from '../imports';
import testimonials_p1 from './../../../assets/home/testimonials/testimonials_p1.webp';
import testimonials_p2 from './../../../assets/home/testimonials/testimonials_p2.webp';
import segment from './../../../assets/brand-logos/segment.png';
import samsung from './../../../assets/brand-logos/samsung.png';


const testimonials = [
  {
    id: "t1",
    img: testimonials_p1,
    t: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
    name: "Angela Taylor",
    post: "Expecting to be Samsung CEO",
    icon: samsung 
  },
  {
    id: "t2",
    img: testimonials_p2,
    t: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
    name: "AR Shakir",
    post: "CEO GetNextDesign",
    icon: segment
  },
]


const Testimonials = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className="w__home__test">
      <div className="w__home__test__container">
        <div className="w__home__test__container-title" data-aos='fade-up'  data-aos-once='true'>
          <p className="w__home__pricing__container-texts-title">
          TESTIMONAILS
          </p>
          <p className="w__home__test__container-title-heading">
          Check what our clients are saying
            </p>
          <p className="w__home__test__container-title-subheading">
          Checkout what our clients are saying about us!
          </p>
        </div>
        <div className="w__home__test__container__slider" data-aos='fade-down'  data-aos-once='true'>
          <img src={left_arrow_icon} alt="" className="w__home__test__container__slider-prevbtn" />
          <img src={right_arrow_icon} alt="" className="w__home__test__container__slider-nextBtn" />
          <div className="w__home__test__container__slider-slide">
            <img className="w__home__test__container__slider-slide-img" src={testimonials_p1} alt="" />
            <div className="w__home__test__container__slider-slide__content">
              <img className='w__home__test__container__slider-slide__content-quote' src={quote_icon} alt="" />
              <div className="w__home__test__container__slider-slide__content-ratings">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
              </div>
              <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
              <div className="w__home__test__container__slider-slide__content-author">
                <div className="w__home__test__container__slide-slide__content-author-details">
                  <div style={{color: 'black'}}>Angela Taylor</div>
                  <div style={{color:'grey'}}>Expecting to be Samsung CEO</div>
                </div>
                <img src={segment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials