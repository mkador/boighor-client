import React from 'react'
import banner from '../../assets/images/Banner.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen  mt-5">
      <img className="min-h-screen " src={banner} alt="" />
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-0 text-4xl font-bold font-mono">
            Buy and sell your books at the{' '}
            <span className="text-green-400">best price</span>
          </h1>

          <button className="btn btn-success mt-4">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
