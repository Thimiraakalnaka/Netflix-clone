'use client'
import React, { useState } from 'react'

function Questions() {

    const [isClicked, setIsClicked] = useState(false);
    const [openIndex, setOpenIndex] = useState(null)

    const contents = [
        {
            id: 1,
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            id: 2,
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
        },
        {
            id: 3,
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            id: 4,
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            id: 5,
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            id: 6,
            question: "Is Netflix good for kids?",
            answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        },
    ]

    const handlebutton = (i) => {
        if(openIndex == i){
            setIsClicked(false);
            setOpenIndex(null);
        }else{
            setIsClicked(true);
            setOpenIndex(i);
        }
    }

    return (
        <div className='mt-14'>
            <h1 className='text-[1.5rem] font-[700] mb-3'>Frequently Asked Questions</h1>
            <ul>
                <li>

                    {contents.map((content, index) => {
                        return (
                            <>
                                <div className='flex justify-between bg-[#2d2d2d] p-6 mt-3' onClick={() => handlebutton(index)} key={content.id}>

                                    <div className='text-[1.5rem] font-[500]'>
                                        {content.question}
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" width="36" height="36" data-icon="PlusLarge" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                                    </div>
                                </div>
                                {isClicked == true && (openIndex == index ? <div className='mt-1 bg-[#2d2d2d] text-[1.5rem] font-[500] p-6'>
                                    <p className='mb-6'></p>
                                    <p>{content.answer}</p>
                                </div> : null)
                                    
                                }
                                
                            </>

                        )
                    })}



                </li>

            </ul>
        </div>
    )
}

export default Questions