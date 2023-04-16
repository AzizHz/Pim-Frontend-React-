import nbaplayers from '../assets/nbaplayers.png'
import React from 'react';


const Hero = () => {
  return (
<div
className="flex flex-col md:flex-row w-4/5 justify-between 
items-center mx-auto py-10">
    <div className="md:w-3/6 w-full">
        <div>
            <h1 className="text-white text-6xl font-bold">
                Buy and Sell<br />Nba Players Cards <br />
                <span className=" text-gradient">NFTs</span> Collections 
            </h1>
            <p className="text-[#e1b676] font-semibold text-sm mt-3">Mint and collect Nfts</p>
     <div className="flex mt-5">
       
       </div>
       <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">1231k</p>
            <small className="text-gray-300">User</small>
          </div>
          <div>
            <p className="text-white font-bold">152k</p>
            <small className="text-gray-300">Cards</small>
          </div>
          <div>
            <p className="text-white font-bold">200k</p>
            <small className="text-gray-300">Players</small>
          </div>
        </div>
      </div>
        </div>
        <div>
        <img
          src={nbaplayers}  alt="NFT Art"
          className='h-100 w-auto cursor-pointer py-8'/>
          
    </div>
    </div>

  )
 }

export default Hero