import React from 'react'

const stats=[
    {
        count:"5K",
        label:"Active Students"
    },
    {
        count:"10+",
        label:"Mentors"
    },
    {
        count:"200+",
        label:"Courses"
    },
    {
        count:"50+",
        label:"Awards"
    },
]

function StatesComponents() {
  return (
    <section className='w-full relative bg-richblack-800 '>
        <div className='w-11/12 max-w-maxContent mx-auto px-[120px] py-[90px]'>
            <div className='flex justify-between flex-col lg:flex-row gap-10'>
                {
                    stats.map((element,index)=>(
                        <div 
                            className='flex flex-col items-center'
                            key={index}>
                            <h1 className='text-3xl font-bold text-white'>{element.count}</h1>
                            <p className='text-base text-richblack-400'>{element.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default StatesComponents