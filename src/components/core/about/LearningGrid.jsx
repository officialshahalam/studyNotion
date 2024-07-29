import React from 'react'
import {LearningGridArray} from "../../../data/learning";
import HighlightText from '../home/HighlightText';
import CTAButton from '../home/CTAButton';

function LearningGrid() {
  return (
    <section className='w-full bg-richblack-900 text-white'>
        <div className='w-11/12 max-w-maxContent mx-auto grid grid-cols-1 lg:grid-cols-4 py-16'>
            {
                LearningGridArray.map((card,index)=>(
                   <div  
                        key={index} 
                        className={`
                            ${index===0 && "lg:col-span-2 bg-transparent mb-4"} 
                            ${card.order %2===1 ? "bg-richblack-700" :"bg-richblack-800" }
                            ${card.order ===3 && "lg:col-start-2"}
                            lg:min-h-[250px]
                        `}
                        >
                        {
                            card.order < 0
                            ?
                            (
                                <div className='flex flex-col gap-5 '>
                                    <h1 className='text-4xl font-semibold '>
                                        <p>{card.heading}</p>
                                        <HighlightText text={card.highliteText} />
                                    </h1>
                                    <p className='text-base font-normal text-richblack-500'>{card.description}</p>
                                    <CTAButton linkTo={card.BtnLink} active={true}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>
                            )
                            :
                            (
                                <div className='flex flex-col gap-4 p-4'>
                                    <h1 className='text-lg'>{card.heading}</h1>
                                    <p className='text-base text-richblack-400'>{card.description}</p>
                                </div>
                            )
                        }

                   </div> 
                ))
            }
        </div>
    </section>
  )
}

export default LearningGrid