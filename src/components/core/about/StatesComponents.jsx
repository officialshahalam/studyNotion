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
    <section className='w-full relative'>
        <div className='w-11/12 max-w-maxContent mx-auto'>
            <div className='flex justify-between'>
                {
                    stats.map((element,index)=>(
                        <div key={index}>
                            <h1>{element.count}</h1>
                            <p>{element.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default StatesComponents