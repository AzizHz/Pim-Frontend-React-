import { useEffect } from 'react'
import { getAllNFTs, isWalletConnected } from '../../Blockchain.services'
import Artworks from '../Artworks'
import ShowNFT from '../ShowNFT'
import CreateNFT from '../CreateNFT'

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
