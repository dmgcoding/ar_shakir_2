import React from 'react'
import './Banner.css'
import { BsArrowRight } from 'react-icons/bs'
import { banner_p_bottomleft,banner_p_left, banner_p_topright } from '../imports'

const Banner = () => {
  return (
    <div className="w__home__banner">
      <div className="w__home__banner__container">
        <img src={banner_p_left} alt="" className="w__home__banner__container-img1" />
        <img src={banner_p_bottomleft} alt="" className="w__home__banner__container-img2" />
        <img src={banner_p_topright} alt="" className="w__home__banner__container-img3" />
        <div className="w__home__banner__container-text">
        Discover a better way to reach your clients.
        </div>
        <button>
          Try for free <BsArrowRight style={{marginLeft:'1rem'}} size={28} />
        </button>
      </div>
    </div>
  )
}

export default Banner