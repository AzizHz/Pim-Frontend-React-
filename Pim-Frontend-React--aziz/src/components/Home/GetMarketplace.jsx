import { useEffect } from 'react'
import { getAllNFTs, isWalletConnected } from '../../Blockchain.services'
import Artworks from '../Artworks'
import CreateNFT from '../CreateNFT'
import ShowNFT from '../ShowNFT'


const GetMarketplace = () => {

  useEffect(() => {
    const fetchData = async () => {
      await isWalletConnected()
      await getAllNFTs()
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen">
      <Artworks />
      <CreateNFT />
      <ShowNFT />
    </div>
  )
}

export default GetMarketplace;
