import React from 'react'

const Navbar = () => {
  return (
    <div className="m-10 flex">
      <div className="flex mr-96">
        <h1 className="bg-[#458FF6] w-10 h-10 rounded-full justify-center">
          <h2 className="pl-3 pt-1 text-2xl text-white font-bold">T</h2>
        </h1>
        <h2 className="text-2xl font-bold ml-2 pt-1">Trafalgar</h2>
      </div>
      <div className='p-3'>
        <button className="text-[#1F1534] mr-10">Home</button>
        <button className="text-[#666] mr-10">Find a doctor</button>
        <button className="text-[#666] mr-10">Apps</button>
        <button className="text-[#666] mr-10">Testimonials</button>
        <button className="text-[#666] mr-10">About us</button>
      </div>
    </div>
  );
}

export default Navbar