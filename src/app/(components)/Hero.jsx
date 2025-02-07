import Image from 'next/image'
import React from 'react'
import NetflixLogo from './NetflixLogo'
import SigninButton from './SigninButton'
import Box from './Box'
import Questions from './Questions'
import Getstarted from './Getstarted'
import Footer from './Footer'
import TrendingNow from './TrendingNow'

function Hero() {
    return (
        <div>
            <div className='relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/LK-en-20250127-TRIFECTA-perspective_1d8db1fc-8ee8-4390-b420-6e3c24a85b53_large.jpg)] h-[115vh] bg-cover bg-center'>
                <div className='absolute bg-gradient-to-b from-black/90 via-black/50 to-black/90 top-0 left-0 bottom-0 right-0'></div>

                <div className='flex justify-between z-10 relative py-6 px-36'>
                    <NetflixLogo />
                    <SigninButton />
                </div>
                <div className='z-10 relative flex flex-col text-center px-8 justify-center items-center w-[65%] max-w-[800px] h-[100vh] m-auto'>
                    <h1 className='text-[3.5rem] font-[900] leading-[1.25] max-w-screen-sm mb-4'>Unlimited movies, TV shows, and more</h1>
                    <p className='text-[1.25rem] font-[500] mb-8'>Starts at USD 2.99. Cancel anytime.</p>
                    <p className='text-[1rem] leading-relaxed font-[400]'>Ready to watch? Enter your email to create or restart your membership</p>

                    <Getstarted />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden w-full h-[96px]">
                    <div className="absolute bg-gradient-to-r from-[#b82869] via-[#e50914] to-[#b82869] h-[96px] w-[130%] left-[-15%] rounded-tl-[50%_100%] rounded-tr-[50%_100%]">
                    <div className="absolute bottom-0 left-0 w-full h-[92px] bg-black z-10  rounded-tl-[50%_100%] rounded-tr-[50%_100%]"></div>
                    {/* <div className="absolute bottom-0 left-0 w-full h-[92px] bg-custom-radial  z-10  rounded-tl-[50%_100%] rounded-tr-[50%_100%]"></div> */}
                    </div>
                    
                </div>


            </div>

            <div className='px-40'>
                <TrendingNow />
                <Box />
                <Questions />
                <p className='mt-16 text-center text-[1rem] font-[500]'>Ready to watch? Enter your email to create or restart your membership.</p>
                <Getstarted />
                <Footer />
            </div>
        </div>
    )
}

export default Hero