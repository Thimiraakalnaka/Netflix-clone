import React from 'react'

function Getstarted() {
    return (
        <div className=' flex flex-col md:flex-row  md:px-11 w-full justify-center items-center mt-3 gap-3'>
            <input type="text" placeholder='Email address' className='bg-inherit border border-white/30 rounded-md font-[1rem] px-4 mb-4 py-3 md:pt-6 md:pb-2 w-full md:w-2/3 md:mb-0' />
            <button className='flex bg-[#e50914] text-[1.125rem] md:text-[1.125rem] font-medium py-3 md:py-[14px] px-4 rounded ml-1 justify-center items-center w-40'>
                <span>Get Started</span>
                <svg className='w-5 h-5 text-white fill-current' role="img" viewBox="0 0 24 24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" ></path></svg>
            </button>
        </div>
    )
}

export default Getstarted