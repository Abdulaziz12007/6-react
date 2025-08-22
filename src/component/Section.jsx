import React from 'react'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Menu2 from '../assets/Menu2.jpg'
import Logo1 from '../assets/logo1.png'
import Rasm1 from '../assets/rasm1.png'
import Icons from '../assets/icons.png'

const Section = () => {
  return (
    <div>
          <h1 className='text-5xl font-bold flex justify-center'>How the app works</h1>

          <div className='mt-15 flex'>
            <div>
              <img src={Image1} alt="" className='w-[602px] h-[525px]'/>
            </div>
            <div className='mt-30'>
              <p className='text-[#FA4A0C] font-bold text-[20px]'>Create an account</p>
              <h2 className='font-bold text-4xl mt-10'>Create/login to an existing <br />
              account to get started</h2>
              <p className='mt-10 text-[#737373] text-[20px]'>An account is created with your email <br />
              and a desired password</p>
            </div>
          </div>

    <div className='mt-15 flex justify-center'>
                  <div className='mt-30'>
              <p className='text-[#FA4A0C] font-bold text-[20px]'>Explore varieties</p>
              <h2 className='font-bold text-4xl mt-10'>Shop for your favorites <br />
              meal as e dey hot.</h2>
              <p className='mt-10 text-[#737373] text-[20px]'>Shop for your favorite meals or drinks <br />
              and enjoy while doing it.</p>
            </div>
            <div>
              <img src={Image3} alt="" className='w-[602px] h-[525px]'/>
            </div>
    </div>

      <div className='mt-15 flex'>
            <div>
              <img src={Image2} alt="" className='w-[602px] h-[525px]'/>
            </div>
            <div className='mt-30'>
              <p className='text-[#FA4A0C] font-bold text-[20px]'>Checkout</p>
              <h2 className='font-bold text-4xl mt-10'>When you done check out <br />and get it delivered.</h2>
              <p className='mt-10 text-[#737373] text-[20px]'>When you done check out and get it <br />delivered with ease.</p>
            </div>
      </div>
            <div className="relative bg-cover bg-center h-[600px]">
              <img src={Menu2} alt="" className="w-[100%] h-[600px]"/>
              <div className="absolute inset-0 bg-/50 flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-5xl mb-2 font-bold">Download the app now.</p>
                <p className="text-gray-200 mt-4">
                Available on your favorite store. Start your premium experience now
                </p>
      
                <div className="flex gap-4 mt-6">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-orange-700 cursor-pointer transition-all duration-[500ms]">
                    Playstore
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-white hover:text-black cursor-pointer transition-all duration-[500ms]">
                    App store
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
  <img src={Logo1} alt="Food app 1" className="w-[246px] h-[101px]" />
  <img src={Icons} alt="Icons" className="" />
  <p className="text-sm">Copyright 2020 Bella Onojie.com</p>
</div>

    </div>
  )
}

export default Section