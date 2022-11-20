import React from 'react';
import './Cover.css';
import {BsArrowRight} from 'react-icons/bs';

//images
import { cover_bg_pattern,coverImg1,coverImg2,coverImg3,coverImg4 } from '../imports';

const Cover = () => {

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
    <div className="w__home__cover">
      <div className="w__home__cover-bgpattern">
        <img src={cover_bg_pattern} alt="" />
      </div>
      <div className="w__home__cover__container">
        <div className="w__home__cover__container-content">
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
          <img src={coverImg1} alt="" className="w__home__cover__container-images-img1" />
          {/* this div is to add a little spacing to images container below first img */}
          <div></div>
          <img src={coverImg2} alt="" className="w__home__cover__container-images-img2" />
          <img src={coverImg3} alt="" className="w__home__cover__container-images-img3" />
          <img src={coverImg4} alt="" className="w__home__cover__container-images-img4" />
        </div>
      </div>
    </div>
  )
}

export default Cover