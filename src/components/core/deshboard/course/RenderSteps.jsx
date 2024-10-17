import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa"
import CourseInformationForm from './courseInformationForm';


function RenderSteps() {

    const { step } = useSelector((state) => state.course);

    const steps = [
        {
            id: 1,
            title: "Course Information",
        },
        {
            id: 2,
            title: "Course Builder",
        },
        {
            id: 3,
            title: "Publish",
        },
    ]

    return (
        <>
            <div className="flex w-full">
                {
                    steps.map((item, index) => (
                        <div key={index} className='w-full flex'>
                            <div
                                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${step === item.id ? "bg-yellow-900 border-yellow-50 text-yellow-50" : "border-richblack-700 bg-richblack-800 text-richblack-300"} ${step > item.id && "bg-yellow-50 text-yellow-50"}}`}>
                                {
                                    step > item.id
                                        ? (<FaCheck className="font-bold text-richblack-900" />)
                                        : (item.id)
                                }
                            </div>
                            {
                                item.id !== steps.length &&
                                (
                                    <div
                                        className={`h-[calc(34px/2)] flex-1  border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"
                                            } `}
                                        >
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    steps.map((item,index)=>(
                        <div key={index}>{item.title}</div>
                    ))
                }
            </div>

            {step === 1 && <CourseInformationForm/>}
            {/* {step === 2 && <CourseBuilderForm/>} */}
            {/* {step === 3 && <PublishCourse/>} */}
        </>
    )
}

export default RenderSteps