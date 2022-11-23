import React,{useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Testimonials.css';
import { quote_icon,star_icon,left_arrow_icon,right_arrow_icon} from '../imports';
import testimonials_p1 from './../../../assets/home/testimonials/testimonials_p1.webp';
import testimonials_p2 from './../../../assets/home/testimonials/testimonials_p2.webp';
import segment from './../../../assets/brand-logos/segment.png';
import samsung from './../../../assets/brand-logos/samsung.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

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

  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const nextSlide = ()=>{
    setCounter(c=>c+1);
    console.log(counter);
    const firstSlideId = testimonials[0].id;
    const firstSlide = document.getElementById(firstSlideId);
    
    firstSlide.style.left = `-${counter * 100}%`;
    
  }

  const prevSlide = ()=>{
    setCounter(counter-1);
    console.log(counter);
    const firstSlideId = testimonials[0].id;
    const firstSlide = document.getElementById(firstSlideId);

    firstSlide.style.left = `${counter * 100}%`;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderSlide = (slide)=>{
    return (
      <>
      <div id={slide.id} className="w__home__test__container__slider-slides-slide">
            <img className="w__home__test__container__slider-slides-slide-img" src={slide.img} alt="" />
            <div className="w__home__test__container__slider-slides-slide__content">
              <img className='w__home__test__container__slider-slides-slide__content-quote' src={quote_icon} alt="" />
              <div className="w__home__test__container__slider-slides-slide__content-ratings">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
              </div>
              <p>{slide.t}</p>
              <div className="w__home__test__container__slider-slides-slide__content-author">
                <div className="w__home__test__container__slider-slides-slide__content-author-details">
                  <div style={{color: 'black'}}>{slide.name}</div>
                  <div style={{color:'grey'}}>{slide.post}</div>
                </div>
                <img src={slide.icon} alt="" />
              </div>
            </div>
          </div>
      </>
    )
  }

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
          {/* <img onClick={prevSlide} src={left_arrow_icon} alt="" className="w__home__test__container__slider-prevbtn" />
          <img onClick={nextSlide} src={right_arrow_icon} alt="" className="w__home__test__container__slider-nextBtn" /> */}
          <Slider {...sliderSettings}>
            {
              testimonials.map(t=>renderSlide(t))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials