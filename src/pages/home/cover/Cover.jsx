import React,{useEffect,useRef} from 'react';
import './Cover.css';
import {BsArrowRight} from 'react-icons/bs';
import Aos from 'aos'
import 'aos/dist/aos.css'

//images
import { cover_bg_pattern,coverImg1,coverImg2,coverImg3,coverImg4 } from '../imports';

const Cover = () => {
  const containerRef = useRef();
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const img4Ref = useRef();

  useEffect(()=>{
    Aos.init({duration:1000})
    const container = containerRef.current;

    container.addEventListener('mousemove',onMouseMove)
    container.addEventListener('mouseout',onMouseOut)

  },[])

  const onMouseMove = (e)=>{
    const elHeight = containerRef.current.clientHeight;
    const elWidth = containerRef.current.clientWidth;
    const y = e.layerY;
    const x = e.layerX;
    
    //img1
    const skewVal = y/elHeight * 6;
    img1Ref.current.style.transform = `skew(${skewVal}deg)`;

    //img2
    const img2YOffset = 13 - (y/elHeight * 5);
    const img2XOffset = -5 + (x/elWidth * 6);
    img2Ref.current.style.bottom = `${img2YOffset}%`;
    img2Ref.current.style.right = `${img2XOffset}%`;

    //img3
    const img3Rotate = y/elHeight * 15;
    const img3XOffeset = 0 - (x/elWidth * 7);
    img3Ref.current.style.transform = `rotate(${img3Rotate}deg)`;
    img3Ref.current.style.right = `${img3XOffeset}%`;

    //img4
    const img4Rotate = y/elHeight * 15;
    const img4YOffset = y/elHeight * 3;
    const img4XOffset = 15 + (x/elWidth * 7);
    img4Ref.current.style.transform = `rotate(-${img4Rotate}deg)`;
    img4Ref.current.style.bottom = `${img4YOffset}%`;
    img4Ref.current.style.right = `${img4XOffset}%`
  }

  const onMouseOut = ()=>{
    img1Ref.current.style.transform = 'skew(0deg)';
    //img2
    img2Ref.current.style.bottom = '13%';
    img2Ref.current.style.right = '-5%';
    //img3
    img3Ref.current.style.transform = 'rotate(0deg)';
    img3Ref.current.style.right = '0%';
    //img4
    img4Ref.current.style.transform = 'rotate(0deg)';
    img4Ref.current.style.bottom = '3%';
    img4Ref.current.style.right = '15%';
  }


  const sectionBox = (title,para)=>{
    return (
      <>
      <div className="w__home__cover__container-content-section__box">
          <p className="w__home__cover__container-content-section__box-title">{title}</p>
          <p className='w__home__cover__container-content-section__box-para'>{para}</p>
      </div>
      </>
    );
  }

  return (
    <div className="w__home__cover" >
      <div className="w__home__cover-hovercontainer" ref={containerRef}></div>
      <div className="w__home__cover-bgpattern">
        <img src={cover_bg_pattern} alt="" />
      </div>
      <div className="w__home__cover__container">
        <div className="w__home__cover__container-content" data-aos="fade-right" data-aos-once='true'>
          <p className="w__home__cover__container-content-title">
          Product Growth Solution in Single Platform.
          </p>
          <p className="w__home__cover__container-content-heading">
          Managing business payments has never been easier
          </p>
          <p className="w__home__cover__container-content-para">
          Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.
          </p>
          <button className="w__home__cover__container-content-button">
            Try for free<span></span> <BsArrowRight size={28}/>
          </button>
          <div className="w__home__cover__container-content-section">
            {sectionBox("195k+ Users","Delightful remarkably mr on announcing themselves entreaties favourable.")}
            {sectionBox("$400m+ Saved","About to in so terms voice at. Equal an would is found seems of and concluded.")}
          </div>
        </div>
        <div className="w__home__cover__container-images">
          <img ref={img1Ref} data-aos="fade-down-left" data-aos-once='true' src={coverImg1} alt="" className="w__home__cover__container-images-img1" />
          {/* this div is to add a little spacing to images container below first img */}
          <div></div>
          <img ref={img2Ref} data-aos="fade-left" data-aos-once='true' src={coverImg2} alt="" className="w__home__cover__container-images-img2" />
          <img ref={img3Ref} data-aos="fade-left" data-aos-once='true' src={coverImg3} alt="" className="w__home__cover__container-images-img3" />
          <img ref={img4Ref} data-aos="fade-up" data-aos-once='true' src={coverImg4} alt="" className="w__home__cover__container-images-img4" />
        </div>
      </div>
    </div>
  )
}

export default Cover