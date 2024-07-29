import React from 'react'
import HighlightText from '../home/HighlightText'

function Quote() {
  return (
    <div className='text-center text-4xl leading-normal'>
        <sup>"</sup>We are passionate about revolutionizing the way we learn. Our innovative platform 
        <HighlightText text={"combines technology"}/>
        <span className='text-brown-100'>expertise </span>
        and community to create an 
        <span className='text-brown-100'> unparalleled educational experience.<sup>"</sup></span>
    </div>
  )
}

export default Quote