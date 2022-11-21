import React from 'react';
import {NavBar, Banner, Brands, Cover, Pricing, Process, Services, Testimonials, Footer} from './imports';
import './Home.css';

const Home = () => {
  return (
    <div className='w__home'>
      <NavBar />
      <Cover />
      <Brands />
      <Services />
      <Process />
      {/* <App />
      <CTO /> */}
      <Pricing />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home