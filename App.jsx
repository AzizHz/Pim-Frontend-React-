import { useEffect } from 'react'
import { getAllNFTs, isWalletConnected } from './Blockchain.services'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ShowNFT from './components/ShowNFT'
import CreateNFT from './components/CreateNFT'

import Transactions from './components/Transactions'


const App = () => {
  useEffect(async () => {
    await isWalletConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <CreateNFT />
      <ShowNFT />
      <Footer />

    </div>
  )
}

export default App

