import React, { useState } from 'react'
import player from "../assets/player.png"
import { FaTimes } from 'react-icons/fa'
import {
    useGlobalState,
    setGlobalState,
    setLoadingMsg,
    setAlert,
  } from '../store'

const UpdateNFT = () => {
  const [modal] = useGlobalState('updateModal')
   const [price, setPrice] = useState('')
  
  const handleSubmit =(e) => {
    e.preventdefault()
    if(!price) return
 console.log('Updated...')
    closeModal()
  }
  const closeModal = () => {
    setGlobalState('updateModal', 'scale-0')
    resetForm()
  }
  const resetForm = () => {
    setPrice('')
  }
    return (
    <div
     className={`fixed top-0 left-0 w-screen h-screen
    flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal} `}
    >

<div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
    <form onSubmit={handleSubmit} className='flex flex-col'>

    <div className='flex justify-between items-center text-gray-400'>
    <p className='font-semibold '>  nft</p>
   <button
    type="button"
    onClick={closeModal}
    className='border-0 bg-transparent focus:outline-none'>
  <FaTimes/>
   </button>
    </div>
    <div className='flex justify-center items-center rounded xl'>
        <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden '>
        <img className="h-85 w-full object-cover  shadow-black rounded-lg " src={ player} alt={"NFT card"} />
    
        </div>
    </div>



<div className='flex justify-betwee, items-center bg-gray-800 rounded-xl mt-5'>
  
        <span className='sr-only'>choose profile photo</span>
        <input type="number"
         className='block w-full text-sm 
        text-slate-500 focus:outline-none cursor-pointer focus:ring-0
        bg-transparent border-0' 
        placeholder='price(ETH)'
        min={0.01}
        step={0.01}
        name='price'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        required/>

   
</div>

<button className='flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'> Update now</button>
    </form>
    </div>
    </div>
  )
}

export default UpdateNFT