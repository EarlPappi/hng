import React from 'react';
import HeroSection from '../Components/Sections/HeroSection'
import HomeCard from '../Components/Sections/HomeCard'
import PostHero from '../Components/Sections/PostHero'
import PreFooter from '../Components/Sections/PreFooter'

function Home() {
  // const [showWallet, setShowWallet] = useState(true);

  


  return (
    <div>
      <HeroSection />
      <PostHero />
      <HomeCard />
      <PreFooter />    


    </div>
  )
}

export default Home