import React from 'react'
import { setGlobalState } from './store'

const CardNFT = ({nft}) => {
    const setNFT = () => {
        setGlobalState('nft', nft)
        setGlobalState('showModal', 'scale-100')
      }
  return (
    <div className="w-full border-2 border-[#fda727] rounded-md overflow-hidden bg-white my-2 p-3">
    <img
      src={nft.metadataURI}
      alt={nft.title}
      className="h-60 w-full object-cover border-2 border-[#fda727] rounded-lg mb-3"
    />
    <h4 className="text-black font-semibold">{nft.title}</h4>
    <p className="text-gray-400 text-xs my-1">{nft.description}</p>
    <div className="flex justify-between items-center mt-3 text-black">
      <div className="flex flex-col">
        <small className="text-xs">Current Price</small>
        <p className="text-sm font-semibold">{nft.cost} ETH</p>
      </div>

      <button
        className="text-white text-sm bg-[#fda727]
          hover:bg-[#fda727] cursor-pointer rounded-md px-1.5 py-1"
        onClick={setNFT}
      >
        View Details
      </button>
    </div>
  </div>
  )
}

export default CardNFT