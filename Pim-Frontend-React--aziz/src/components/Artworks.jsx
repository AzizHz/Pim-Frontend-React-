import React from "react"
import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from "./store";
import CardNFT from "./Card";
const Artworks = () => {
 
  const [nfts] = useGlobalState('nfts')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  
    return(
        <div className="gradient-bg-artworks">
            <div className="w-4/5 py-10 mx-auto">
        
            <h4 
            className="text-white text-3xl font-bold uppercase text-gradient">
</h4>


<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-1">
          {collection.map((nft, i) => (
            <CardNFT key={i} nft={nft} />
          ))}
        </div>
        
        {collection.length > 0 && nfts.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-black text-white
            bg-[#fda727] hover:bg-[#fda727]
            rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default Artworks
   

    

