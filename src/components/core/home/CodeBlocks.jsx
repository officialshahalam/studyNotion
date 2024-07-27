import React from 'react'
import CTAButton from './CTAButton';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import OrangeGradient from '../../common/OrangeGradient';
import BlueGradient from '../../common/BlueGradient';

function CodeBlocks({order,heading,subHeading,ctaBtn1,ctaBtn2,codeText,codeColor,gradientColor}) {
  return (
    <div className={`flex ${order} flex-col justify-between items-center`}>
        {/* left */}
        <div className='lg:w-[486px] w-full lg:min-h-[286px] mb-8 flex flex-col gap-3'>
            <h1 className='text-3xl font-semibold text-white'>{heading}</h1>
            <p className='text-base font-medium'>{subHeading}</p>
            <div className='flex flex-col sm:flex-row gap-4 pt-8'>
                <CTAButton active={ctaBtn1.active} linkTo={ctaBtn1.linkTo}>
                    <div className='flex gap-2 items-center justify-center'>
                        {ctaBtn1.btnText} 
                        <FaArrowRight className='text-sm'/>
                    </div>
                </CTAButton>

                <CTAButton active={ctaBtn2.active} linkTo={ctaBtn2.linkTo}>
                    <div className='flex gap-2 items-center justify-center'>
                        {ctaBtn2.btnText} 
                    </div>
                </CTAButton>
                
            </div>
        </div>

        {/* right */}
        <div className='relative lg:w-[470px] w-full'>
            <div className='absolute top-[-70px] scale-90 left-[50px] z-0 blur-xl'>
                {
                    gradientColor==="orange"?<OrangeGradient/>:<BlueGradient/>
                }
            </div>  
            <div className=' flex text-richblack-400 font-bold border p-2 bg-[#111E32] bg-opacity-40'>
                <div className='w-[7%] text-center flex flex-col '>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                </div>
                <div className={`w-[90%] flex flex-col z-20 ${codeColor}`}>
                    <TypeAnimation
                        sequence={[codeText , 4000 , ""]}
                        repeat={Infinity} 
                        omitDeletionAnimation={true}
                        cursor={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"inline-block"
                            }
                        }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks;