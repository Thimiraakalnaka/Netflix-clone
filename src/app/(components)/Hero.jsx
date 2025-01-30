import Image from 'next/image'
import React from 'react'
import NetflixLogo from './NetflixLogo'
import SigninButton from './SigninButton'

function Hero() {
  return (
    <div className='relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/LK-en-20250127-TRIFECTA-perspective_1d8db1fc-8ee8-4390-b420-6e3c24a85b53_large.jpg)] h-[100vh] bg-cover bg-center'>
        <div className='absolute bg-gradient-to-b from-black/90 via-black/50 to-black/90 top-0 left-0 bottom-0 right-0'></div>
        
        <div className='flex justify-between z-10 relative py-6 px-36'>
            <NetflixLogo/>
            <SigninButton/>
        </div>
        <div className='z-10 relative flex flex-col text-center px-8 justify-center items-center w-[65%] max-w-[800px] h-[100vh] m-auto'>
            <h1 className='text-[3.5rem] font-[900] leading-[1.25] max-w-screen-sm mb-4'>Unlimited movies, TV shows, and more</h1>
            <p  className='text-[1.25rem] font-[500] mb-8'>Starts at USD 2.99. Cancel anytime.</p>
            <p  className='text-[1rem] leading-relaxed font-[400]'>Ready to watch? Enter your email to create or restart your membership</p>
           
           <div className='flex px-11 w-full justify-center mt-3'>
           <input type="text" placeholder='Email address' className='flex basis-2/3 bg-inherit border border-white/30 rounded-md font-[1rem] px-4 pt-6 pb-2 w-[100%]' />
            <button className='flex bg-[#e50914] text-[1.5rem] font-medium p-2 rounded ml-1 justify-center items-center w-40'>
                <span>Get Started</span>
                <svg className='w-5 h-5 text-white fill-current' role="img" viewBox="0 0 24 24"  data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" ></path></svg>
            </button>
           </div>
        </div>
    </div>
  )
}

export default Hero