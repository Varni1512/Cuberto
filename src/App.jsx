import React from 'react'
import FeaturedSection from './components/FeaturedSection'
import HeroSection from './components/HeroSection'
import HeroVideo from './components/HeroVideo'
import SecondSection from './components/SecondSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div style={{ overflowX: 'hidden', width: '100vw' }}>
      <HeroSection />
      <HeroVideo />
      <SecondSection />
      <FeaturedSection />
      <FooterSection />
    </div>
  );
}


export default App
