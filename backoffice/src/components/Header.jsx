
import React from 'react';
import { connectWallet } from '../Blockchain.services';
import { truncate, useGlobalState } from '../store';
//import { connectWallet } from '../Blockchain.Services'
import { setGlobalState } from "../store";

const Header = () => {
 const [connectedAccount]= useGlobalState('connectedAccount')
 return (
    <div className="w-4/5 flex md:justify-right justify-between py-0 mx-auto">
    <div className="md:flex-[0.5] flex-intial justify-right items-right">
      
  
    </div>
    <ul 
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-items-start 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">dashboard</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer ">Community</li>
        <button className="drop-shadow-2xl shadow-black text-white
            
            rounded-full cursor-pointer p-2"
            onClick={() => setGlobalState('updateModal', 'scale-100')}
            >update NFT</button> 
        <li className="mx-4 cursor-pointer ">Pie chart</li>
        <button className="drop-shadow-2xl shadow-black text-white
            rounded-full cursor-pointer p-2"
            onClick={() => setGlobalState('modal', 'scale-100')}
            >Create NFT</button> 
      </ul>

{connectedAccount ?(
  <button  className="drop-shadow shadow-black text-white
  bg-[#dfa042] hover:bg-[#fda727]
  rounded-full cursor-pointer p-2 justify-self-end  m-10 h-10">

    {truncate(connectedAccount, 4,4,11)}
  </button>
) : (
  <button className="drop-shadow shadow-black text-white
  bg-[#dfa042] hover:bg-[#fda727]
  rounded-full cursor-pointer p-2 justify-self-end  m-10 h-10"
  onClick={connectWallet}>
    Connect wallet
  </button>
)}
</div>


 )
 } 
export default Header
// // <div className='w-1/2 flex justify-between md:justify-items-start items-start pt-0 '>
// <div className='md:flex-[0.15] flex-auto justify-start items-start ml-10'>
// <img className='w-50 h-auto cursor-pointer '   src={ah} alt="alley"/>
// </div>