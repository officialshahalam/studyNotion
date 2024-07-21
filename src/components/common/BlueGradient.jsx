import React from 'react'

function BlueGradient() {
  return (
      <svg width="444" height="344" viewBox="0 0 444 344" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_305_3)">
        <ellipse cx="222" cy="172" rx="150" ry="100" fill="url(#paint0_linear_305_3)"/>
        </g>
        <defs>
        <filter id="filter0_f_305_3" x="0.0742493" y="0.0742493" width="443.852" height="343.852" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="35.9629" result="effect1_foregroundBlur_305_3"/>
        </filter>
        <linearGradient id="paint0_linear_305_3" x1="56" y1="136" x2="424.239" y2="188.351" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1FA2FF"/>
        <stop offset="0.398417" stop-color="#12D8FA"/>
        <stop offset="1" stop-color="#A6FFCB"/>
        </linearGradient>
        </defs>
      </svg>
  )
}

export default BlueGradient;