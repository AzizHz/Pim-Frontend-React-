import React from 'react'
import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'

 const Transactions = () => {
  return (
    <div className='gradient-bg-artworks'>
       <h4 className='text-white text-3xl font-bold uppercase text-gradient2 ml-8
       '>Latest Transactions</h4>

       <div className="grid grid-cols-1 md:grid-cols-3 ls:grid-cols-4 gap-10 md:gap-7 py-2.5">
      {Array(3)
      .fill()
      .map((nft, i) => (
        <Transaction key={i} tx={i} />
      ))} 
      </div>

      <button className="drop-shadow-2xl shadow-black text-white
            bg-[#dfa042] hover:bg-[#fda727]
            rounded-full cursor-pointer p-2"
            >Load More</button>
          </div>
    
    
  )
}
const Transaction = ({tx}) => {
    return (
    <div className="flex justify-between items-center border border-orange-300 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-[#484f98] my-7 p-3 ml-10">
    <div className='rounded-md shadow-sm shadow-orange-300 p-2'>
     <BiTransfer/>
     </div>
     <div>
        <h4 className='text-sm'>#{tx} Fund Transferd</h4>
        <small className='flex justify-start items-center'>
            <span className='mr-1'>Received By you</span>
            <a className ='text-orange-300' href="#" target="_blank">0x31...037e</a>
            <MdOpenInNew/>
        </small>
     </div>
    
 <p className='text-sm font-medium'>0.32 ETH</p>
 </div>
)}
export default Transactions