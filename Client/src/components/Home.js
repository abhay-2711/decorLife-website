import React from 'react'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Recommend from './Recommend';
import Trending from './Trending';
// import Header from './Header'
// import Nav from './nav/Nav'
// import About from './about/About'
// import Front from './front/Front'
// // import Form from './components/login/Form'
// import Contact from './contact/Contact'
// import Footer from './footer/Footer'
const Home = () => {
  return (
    <div>
    <ImageSlider />
    <Recommend />
    <Trending />
    <About />
    <Contact />
    <Footer />
      {/* <Header /> */}
      {/* <Nav />
      <Front/>
      <About />
      <Contact />
      <Footer /> */}
    </div>
    
  )
}
export default Home;
