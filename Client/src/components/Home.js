import React from 'react'
import About from './About';
import Contact from './Contact';
import Feature from './Feature';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Reviews_Home from './Reviews_Home';
// import Recommend from './Recommend';
// import Trending from './Trending';

const Home = () => {
  return (
    <div>
    <ImageSlider />
    <Feature />
    {/* <Recommend /> */}
    {/* <Trending /> */}
    {/* <Reviews_Home /> */}
    <About />
    <Contact />
    {/* <Footer /> */}
    </div>
  )
}
export default Home;
