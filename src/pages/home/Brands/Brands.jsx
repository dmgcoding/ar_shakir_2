import React,{useEffect} from 'react'
import './Brands.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import openzeppelin from './../../../assets/brand-logos/open-zopply.png'
import monday from './../../../assets/brand-logos/monday.png'
import morpheus from './../../../assets/brand-logos/morpheus.png'
import oracle from './../../../assets/brand-logos/oracle.png'
import protone from './../../../assets/brand-logos/protone.png'
import samsung from './../../../assets/brand-logos/samsung.png'
import segement from './../../../assets/brand-logos/segment.png'

const Brands = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  
  return (
    <div className="w__home__brands" data-aos='fade-up' data-aos-once='true'>
      <div className="w__home__brands__container">
        <div className="w__home__brands__container-title">
        Over 32k+ software  businesses growing with AR Shakir
        </div>
        <div className="w__home__brands__container-brands">
          <img src={openzeppelin} alt="openzepplein" />
          <img src={oracle} alt="oracle" />
          <img src={morpheus} alt="morpheus" />
          <img src={samsung} alt="samsung" />
          <img src={monday} alt="monday" />
          <img src={segement} alt="segment" />
          <img src={protone} alt="protone" />
        </div>
      </div>
    </div>
  )
}

export default Brands