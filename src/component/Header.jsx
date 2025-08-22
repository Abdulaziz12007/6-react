import React from 'react'
import Logo1 from '../assets/Logo1.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-sm">
      <div className="flex items-center gap-2 text-orange-500 text-xl font-bold">
        <img src={Logo1} alt="" className='w-[246px] h-[101px]'/>
      </div>
      <nav className="flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-[#FA4A0C] transition-all duration-[500ms]">Home</a>
        <a href="#" className="hover:text-[#FA4A0C] transition-all duration-[500ms]">Product</a>
        <a href="#" className="hover:text-[#FA4A0C] transition-all duration-[500ms]">Faq</a>
        <a href="#" className="hover:text-[#FA4A0C] transition-all duration-[500ms]">Contact</a>
      </nav>
    </header>
  )
}

export default Header
