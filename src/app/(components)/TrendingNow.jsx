'use client'
import React, { useRef, useState, useEffect } from 'react';
import { films } from './filmsdata';
import Image from 'next/image';

function TrendingNow() {


    const [startIndex, setStartIndex] = useState(0)


    function handleRightbutton() {

    }

    function handleLeftbutton() {

    }


    return (
        <div className='mb-16'>
            <h1 className='text-[1.5rem] font-[700] mb-4'>TrendingNow</h1>
            <div className='relative flex justify-center items-center '>
                <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <button className='bg-white/10 h-[7.5rem] w-[1.5rem] hover:bg-white/20 m-auto rounded-md ' onClick={handleLeftbutton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronLeftStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="currentColor"></path></svg></button>
                    {films.map((film) => {
                        return (
                            <div key={film.id} className='inline-block py-2 px-9 hover:scale-105 transition-transform duration-300 ease-in-out'>
                                <Image src={film.url1} alt='..' width={180} height={252} className='rounded-xl cursor-pointer'/>
                                <div className='relative bottom-[7rem] left-[-1rem]'>
                                    <h1 className='text-black text-[5rem] font-[700] text-stroke cursor-pointer'>{film.id}</h1>
                                </div>
                            </div>
                        )
                    })}
                    <button className='bg-white/10 h-[7.5rem] w-[1.5rem] hover:bg-white/20 m-auto rounded-md' onClick={handleRightbutton}><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
                </div>
            </div>

        </div>
    )
}

export default TrendingNow