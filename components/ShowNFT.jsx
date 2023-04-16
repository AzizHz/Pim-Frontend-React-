import Identicon from 'react-identicons'
import { FaTimes } from 'react-icons/fa'
import {useState} from 'react'
import React from 'react'
import { useGlobalState, setGlobalState, truncate, setAlert } from '../store/index'
import player from "../assets/player.png"
import { buyNFT } from '../Blockchain.services'

const ShowNFT = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [modal] = useGlobalState('showModal')
  const [nft] = useGlobalState('nft')
 const handleSubmit = () => {
    closeModal()
 }
 const closeModal = () => {
    setGlobalState('showModal', 'scale-0')
 }
 const handleNFTPurchase = async () => {
  setGlobalState('showModal', 'scale-0')
  setGlobalState('loading', {
    show: true,
    msg: 'Initializing NFT transfer...',
  })

  try {
    await buyNFT(nft)
    setAlert('Transfer completed...', 'green')
    window.location.reload()
  } catch (error) {
    console.log('Error transfering NFT: ', error)
    setAlert('Purchase failed...', 'red')
  }
}

  return (
   <div 
    className={`fixed top-0 left-0 
    w-screen h-screen flex items-center 
    justify-center bg-orange-500 bg-opacity-50
    transform transition-transform duration-300 ${modal}`}>
  
    <div
    className="bg-[#484f98] shadow-xl
    shadow-[#fda727]  rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
    <div className='flex flex-col'>
<div className='flex justify-between items-center text-gray-50'>
  <p className='font-semibold'>Buy NFT</p>
  <button
  type="button" 
  onClick={closeModal}
  className="border-0 bg-transparent
  focus:outline-none">
    <FaTimes/>
    </button>
</div>
<div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={nft?.metadataURI}
                alt={nft?.title}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">{nft?.title}</h4>
            <p className="text-gray-400 text-xs my-1">{nft?.description}</p>

            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  string={nft?.owner}
                  size={50}
                  className="h-10 w-10 object-contain rounded-full mr-3"
                />
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@owner</small>
                  <small className="text-pink-800 font-semibold">
                    {nft?.owner ? truncate(nft.owner, 4, 4, 11) : '...'}
                  </small>
                </div>
              </div>

              <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">{nft?.cost} ETH</p>
              </div>
            </div>
          </div>
          <button
                className="flex flex-row justify-center items-center
                w-full text-white text-md bg-[#fda727]
                hover:bg-[#fda727] py-2 px-5 rounded-full
                drop-shadow-xl border border-transparent
                hover:bg-transparent hover:text-[#fda727]
                hover:border hover:border-[#fda727]
                focus:outline-none focus:ring mt-5"
                onClick={handleNFTPurchase}
              >
                Purchase Now
              </button>
             
          </div>
        </div>
      </div>
    
  )
}
export default ShowNFT