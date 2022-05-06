import React from 'react'
import {Dot} from "./Dots";
import {Dots} from "./Dots"
import ReviewImg from "../images/customerReviewImg.svg";
import arrowLeft from '../images/arrowLeft.svg'
import arrowRight from '../images/arrowRight.svg'
// import ellipseOne from '../images/Ellipse-one.svg'
// import ellipseTwo from '../images/Ellipse-two.svg'


const Review = () => {
  return (
    <div> 
        <div class="bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 rounded-lg lg:mt-40 mt-20 lg:mx-60 mx-3 text-white md:px-20 lg:px-28 relative">
          <div className='absolute right-0 top-1'>
            <Dot />
          </div>
          <div class="py-12">
            <h2 class="text-3xl text-center font-semibold">
              What our customer are saying
            </h2>
            <div class="h-0.5 my-4 bg-white w-10 mx-auto"></div>
            <div class="lg:flex lg:py-6 py-2">
              <div class="flex m-5 lg:m-1">
                <div>
                  <img
                    className="border-4 border-white rounded-full mr-4"
                    src={ReviewImg}
                    alt=""
                  />
                </div>
                <div class="pt-10 pl-1 lg:pl-5">
                  <h4 class="font-semibold">Edward Newgate</h4>
                  <p class="font-light">Founder Circle</p>
                </div>
              </div>
              <div class="lg:w-1/2 p-4 lg:pt-6">
                <p class="font-extralight">
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </div>
          </div>
          <div className='absolute bottom-5 -left-12 -z-20'>
            <Dots />
          </div>
        </div>
        <div class="text-center pt-4 mt-8">
          <img className="lg:mx-[500px] md:mx-[270px] mx-24 -mb-6" src={arrowLeft} alt="arrowleft" />
          <span class="w-2 h-2 text-blue-300 font-black pl-10 px-1">•</span>
          <span class="w-2 h-2 text-blue-400 font-black px-1">•</span>
          <span class="w-2 h-2 text-blue-300 font-black px-1">•</span>
          <span class="w-2 h-2 text-blue-300 font-black px-1 pr-10">•</span>
          <img className='lg:mx-[730px] md:mx-[470px] mx-60 -mt-4' src={arrowRight} alt="arrowRight" />
        </div>
      
    </div>
  );
}

export default Review




