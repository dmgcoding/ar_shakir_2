import React from 'react';
import {NavBar, Banner, Brands, Cover, CTO, Pricing, Process, Services, Testimonials, Footer,App} from './imports';
import './Home.css';

const Home = () => {
  return (
    <div className='w__home'>
      <NavBar />
      {/* <div style={{height: `120vh`}}></div> */}
      <Cover />
      <Brands />
      <Services />
      <Process />
      {/* <App />
      <CTO />
      <Pricing />
      <Testimonials />
      <Banner />
      <Footer /> */}
    </div>
  )
}

export default Home