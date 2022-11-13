import React from 'react';
import HeroSection from '../Components/Sections/HeroSection'
import HomeCard from '../Components/Sections/HomeCard'
import PostHero from '../Components/Sections/PostHero'
import PreFooter from '../Components/Sections/PreFooter'
import { useAuth } from '../Context'
import { ChevronRight, XMark } from '../Icons'
import Meta from '../Asset/meta.png'

function Home() {
  // const [showWallet, setShowWallet] = useState(true);

  const { showWallet, setShowWallet } = useAuth();


  return (
    <div>
      <HeroSection />
      <PostHero />
      <HomeCard />
      <PreFooter />

      {showWallet &&

        <div className=''>
          <div className='absolute top-0  bg-[#00000094] w-screen h-screen' onClick={() => {
            setShowWallet(false)
          }}>
          </div>


          <div className='absolute bg-white w-8/12 md:w-2/5 h-2/6 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 rounded-3xl'>
            <div className='flex justify-between'>
              <h2>Connect Wallet</h2>
              <XMark  />
            </div>

            <div>
              <p>Choose your Preferred Wallet: </p>
            </div>

            <div className='flex justify-between items-center bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#CFD8DC]'>
              <div className='flex items-center gap-8'>
                <div><img src={ Meta }></img></div>
                <h2>MetaMask</h2>
              </div>

              <div>
                <ChevronRight/>
              </div>
            </div>

          </div>


        </div>
      }


    </div>
  )
}

export default Home